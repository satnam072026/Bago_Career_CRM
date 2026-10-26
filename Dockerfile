FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.12.2 --activate
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml tsconfig.base.json ./
COPY apps/web/package.json ./apps/web/
COPY apps/worker/package.json ./apps/worker/
COPY packages/db/package.json ./packages/db/
COPY packages/connectors/package.json ./packages/connectors/
COPY packages/shared/package.json ./packages/shared/
COPY packages/ui/package.json ./packages/ui/
RUN pnpm install --frozen-lockfile

FROM deps AS builder
COPY . .
RUN pnpm --filter @sandeep-workspace/db prisma:generate
RUN pnpm -r build

FROM base AS web
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["pnpm", "--filter", "@sandeep-workspace/web", "start"]

FROM base AS worker
WORKDIR /app
COPY --from=builder /app ./
CMD ["pnpm", "--filter", "@sandeep-workspace/worker", "start"]
