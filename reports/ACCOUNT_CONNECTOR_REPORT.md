# Deliverable 1: Audited Account & Connector Report

**Scan Execution Timestamp**: `2026-10-26T21:38:00Z` (`2026-10-27 00:38:00 EET` in `Europe/Nicosia`)  
**October Discovery Window**: `2026-10-01T00:00:00+03:00` (`2026-09-30T21:00:00Z`) through `2026-10-26T21:38:00Z`  
**Known Connected Sources Scanned**: **100%** of accessible Google Drive & Gmail sources (`3/3` Google Drive pages exhausted for `.xlsx`, `1/1` page for Google Sheets, `2/2` pages for CSVs).

| Provider & Connector | Masked Identity | Workspace / Root | Access Level | Connection Status | Last Scan (UTC) | Discovered Primary Workbooks | Missing Scopes / Notes |
|---|---|---|---|---|---|---|---|
| **Google Drive API v3 + Sheets API v4** | `bagos***@gmail.com` | `My Drive` (`0AAZPgw-hi291Uk9PVA`) | Owner (`Read/Write`) | **CONNECTED & VERIFIED** | `2026-10-26T21:38:00Z` | **38** GSheets, **28** My Drive `.xlsx` | Full pagination exhausted |
| **Google Drive Computer Backup (`My Laptop`)** | `bagos***@gmail.com` | `My Laptop` (`Desktop`, `Documents [OneDrive Mirror]`, `Downloads`) | Owner (`syncedComputer=true`) | **CONNECTED & VERIFIED** | `2026-10-26T21:38:00Z` | **79** `.xlsx` workbooks + **17** October CSV/TSV files | Mirrors local `C:\Users\bagos\OneDrive\Documents` |
| **Shared Google Drive (`Projects KattuAI`)** | `papak***@gmail.com` | `Shared with me / Projects KattuAI` (`1vtF1OCEC...`) | Writer (`sharedWithMe`) | **CONNECTED & VERIFIED** | `2026-10-26T21:38:00Z` | **6** GSheets, **1** `.xlsx` | Shared with `bagosandeep@gmail.com` & `opportunity-os-sync` SA |
| **Shared External B2B Workbooks** | `miche***@spiritsexportboost.com`, `michel.m***@gmail.com` | `Shared with me` | Writer (`sharedWithMe`) | **CONNECTED & VERIFIED** | `2026-10-26T21:38:00Z` | **1** GSheet (`First sheet India`), **2** `.xlsx` (`DESTINY`) | Locked Read-Only by workspace safety policy |
| **Microsoft Graph API (Direct Cloud)** | Not authenticated | OneDrive / SharePoint Cloud API | None (`0` tokens) | **NOT CONNECTED** | N/A | `0` via Graph API | Requires Azure App Registration + `Files.Read.All` consent |
