# Architecture, Source-of-Truth & Write-Back Policy

## 1. System Topology

```text
+-----------------------------------------------------------------------+
| Browser Client (Next.js App Router + React 18 + Tailwind + Radix UI)  |
|  - Explorer Grid: TanStack Table + TanStack Virtual (155+ workbooks)  |
|  - Editor Canvas: Univer Sheets OSS (@univerjs/sheets + formula)      |
|  - State Sync:    TanStack Query + Optimistic ETag Revision Tracking  |
+-----------------------------------+-----------------------------------+
                                    | HTTPS (Session Cookie + CSRF)
+-----------------------------------v-----------------------------------+
| Next.js Server API Layer & Auth.js OAuth Gateway                      |
|  - /api/workbooks          (Filtered, sorted, timezone-aware query)   |
|  - /api/workbooks/[id]     (Lazy-loaded sheet tabs & range reader)    |
|  - /api/workbooks/[id]/cells (Guarded range PATCH with ETag check)    |
|  - /api/connectors         (Encrypted token vault & health status)    |
+-----------------+-----------------------------------+-----------------+
                  |                                   |
+-----------------v-----------------+ +---------------v-----------------+
| PostgreSQL 16 + Prisma ORM        | | Redis 7 + BullMQ Sync Worker    |
|  - ConnectedAccount (AES-256-GCM) | |  - Paginated Drive v3 scanner   |
|  - Workbook (Canonical ID dedup)  | |  - Graph DriveItem scanner      |
|  - WorkbookTab & RevisionAuditLog | |  - Exponential backoff & resume |
+-----------------------------------+ +---------------+-----------------+
                                                      |
        +---------------------------------------------+---------------------------------------------+
        |                                             |                                             |
+-------v--------------------------+  +---------------v--------------------------+  +---------------v---------------+
| Google Drive v3 & Sheets v4 API  |  | Microsoft Graph API (OneDrive/SharePoint)|  | Local Import (ExcelJS / CSV)  |
| - Native GSheets: Range Read/Edit|  | - OAuth2 PKCE + WorkbookSessionId        |  | - Standalone Replica Mode     |
| - Binary .xlsx: Read-Only / Copy |  | - Range PATCH with If-Match ETag         |  | - CSV Injection Sanitizer     |
+----------------------------------+  +------------------------------------------+  +-------------------------------+
```

## 2. Source-of-Truth & Write-Back Safeguards

1. **Default Read-Only Lock**: Every discovered file opens in `READ_ONLY` mode by default. Write-back requires (a) verified `owner` or `writer` permission on the source file, (b) connector support for non-destructive range updates, and (c) explicit user toggle in the editor toolbar.
2. **Never Replace Whole Remote Workbooks**: Cloud edits use `spreadsheets.values.update` (Google Sheets API v4) or `/workbook/names` / `/workbook/worksheets/{id}/range(address='...')` PATCH (Microsoft Graph) with revision/ETag verification.
3. **Binary `.xlsx` Protection on Google Drive**: Binary `.xlsx` files stored on Google Drive (`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`, such as files mirrored from `My Laptop / Documents` or `Downloads`) are never silently converted or overwritten via lossy re-uploads. Edits to `.xlsx` files create an explicit **Internal Replica / Checkpoint** or export cleanly.
4. **Four-Timestamp Separation**:
   - `createdAtSource`: Provider `createdTime`
   - `modifiedAtSource`: Provider `modifiedTime`
   - `viewedByMeAt`: Provider `viewedByMeTime` (`null` -> displayed as `Not available from provider`)
   - `firstIndexedAt`: Internal scanner observation timestamp
