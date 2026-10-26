# License & Open-Source Dependency Audit

All dependencies in **Sandeep Workspace** use permissive open-source licenses (`Apache-2.0`, `MIT`, `BSD-3-Clause`).

## Univer Sheets OSS Verification

- **Installed Packages**: `@univerjs/core`, `@univerjs/design`, `@univerjs/engine-render`, `@univerjs/engine-formula`, `@univerjs/sheets`, `@univerjs/sheets-ui`, `@univerjs/sheets-formula` (all `Apache-2.0`).
- **Pro / Commercial Exclusion**: Zero `@univerjs-pro/*` packages are installed or referenced. Features that would require commercial Univer Pro plugins (such as server-side collaborative OT co-editing across proprietary `.xlsm` binaries or native Excel pivot engine emulation) are explicitly handled via Google Sheets API v4 / Microsoft Graph native delegation or marked read-only in `docs/DATA_FIDELITY_MATRIX.md`.

## Core Stack Licenses

| Package Group | License | Commercial Restrictions |
|---|---|---|
| `next`, `react`, `react-dom` | MIT | None |
| `@univerjs/*` (OSS core, sheets, formula, ui) | Apache-2.0 | None |
| `@tanstack/react-table`, `@tanstack/react-virtual`, `@tanstack/react-query` | MIT | None |
| `prisma`, `@prisma/client` | Apache-2.0 | None |
| `bullmq`, `ioredis` | MIT | None |
| `googleapis` | Apache-2.0 | None |
| `@microsoft/microsoft-graph-client` | MIT | None |
| `exceljs`, `papaparse` | MIT | None |
| `tailwindcss`, `lucide-react`, `@radix-ui/*` | MIT | None |
| `vitest`, `@playwright/test` | MIT / Apache-2.0 | None |
