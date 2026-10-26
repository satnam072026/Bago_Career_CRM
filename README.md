# Bago Career CRM & Enterprise Spreadsheet OS (ARGON v2.4)

A production-grade, self-hostable Enterprise Career CRM & Opportunity Workspace engineered for **Sandeep Bago (`bagosandeep@gmail.com`)**. Built with **TypeScript (strict)**, **Next.js 14 App Router**, **React 18**, **Tailwind CSS + Radix/shadcn UI**, **Univer Sheets OSS**, **TanStack Table + Virtual + Query**, **PostgreSQL + Prisma ORM**, **Redis + BullMQ**, **Auth.js**, **Google Drive API v3 + Google Sheets API v4**, **Microsoft Graph API**, and **ExcelJS + Papa Parse**.

---

## 1. Quick Start & Verified Commands

```bash
# 1. Copy environment variables template (never commit real secrets)
cp .env.example .env

# 2. Install workspace dependencies with pinned lockfile
pnpm install --frozen-lockfile

# 3. Generate Prisma client and apply PostgreSQL schema migrations
pnpm --filter @sandeep-workspace/db prisma:generate
pnpm --filter @sandeep-workspace/db prisma:migrate

# 4. Run linter, strict TypeScript typecheck, and unit/contract test suite
pnpm lint
pnpm typecheck
pnpm test

# 5. Build all workspace packages and Next.js production bundle
pnpm build

# 6. Start full stack via Docker Compose (Web + BullMQ Worker + PostgreSQL 16 + Redis 7)
docker compose up --build
```

For immediate zero-dependency verification in any Node.js LTS environment:
```bash
node tests/run_verification_suite.mjs
```

---

## 2. Workspace Architecture (`pnpm` Monorepo)

- `apps/web/` — Next.js 14 App Router UI, Univer OSS spreadsheet editor canvas, TanStack Virtual file explorer, Auth.js OAuth routes, and guarded REST API endpoints (`/api/workbooks`, `/api/connectors`, `/api/sync`, `/api/workbooks/[id]/cells`).
- `apps/worker/` — Standalone Node.js/TypeScript BullMQ background worker executing paginated, rate-limited Google Drive v3 and Microsoft Graph discovery jobs with checkpoint recovery.
- `packages/db/` — Prisma schema (`schema.prisma`), SQL migrations, and typed queries enforcing canonical `(provider, externalFileId)` deduplication and four-timestamp separation (`createdAtSource`, `modifiedAtSource`, `viewedByMeAt`, `firstIndexedAt`).
- `packages/connectors/` — Google Drive v3 + Google Sheets v4 adapter (with `headRevisionId` / ETag concurrency checks), Microsoft Graph DriveItem + Workbook session adapter, and ExcelJS / Papa Parse local importer/exporter with CSV formula-injection defense.
- `packages/ui/` — Enterprise design system tokens (`#F6F8FB` / `#0D1420`), density controller (`Compact`, `Standard`, `Comfortable`), status badges, and command palette (`⌘K`).
- `packages/shared/` — Strict TypeScript interfaces, `Europe/Nicosia` IANA timezone boundary evaluators (`2026-10-01T00:00:00+03:00` through scan execution), and per-format capability matrix.
- `reports/` — Audited `OCTOBER_2026_INVENTORY.csv` (73 active October workbooks), `ALL_DISCOVERED_WORKBOOKS_155.csv` (155 total deduplicated primary workbooks), `ACCOUNT_CONNECTOR_REPORT.md`, and `SYNC_AUDIT.md`.
- `docs/` — Complete setup, security, data fidelity, QA proof, and Elite Dashboard Engineering Masterclass documentation.
