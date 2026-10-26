# Data Fidelity & Format Capability Matrix

| Workbook Format | Discovery & Metadata | Multi-Tab Grid View | Range Write-Back | Macro / Binary Preservation |
|---|---|---|---|---|
| **Google Sheets (`application/vnd.google-apps.spreadsheet`)** | **VERIFIED** (45 discovered) | **VERIFIED** (All tabs + formulas) | **IMPLEMENTED** (`spreadsheets.values.update` + revision check) | N/A (Cloud-native) |
| **Google Drive `.xlsx` (`openxmlformats...sheet`)** | **VERIFIED** (110 discovered) | **VERIFIED** (Read-Only / ExcelJS) | **READ-ONLY BY POLICY** (Prevents lossy full-file overwrite) | **PRESERVED** (Original binary untouched) |
| **OneDrive / SharePoint `.xlsx` (Microsoft Graph)** | **IMPLEMENTED NOT VERIFIED** (Requires Azure OAuth) | **IMPLEMENTED** (`/workbook/worksheets`) | **IMPLEMENTED** (`WorkbookSessionId` + `If-Match` ETag) | **PRESERVED** |
| **Macro-Enabled Excel (`.xlsm` / `.xlsb`)** | **SUPPORTED** | **READ-ONLY PREVIEW** | **BLOCKED BY SAFEGUARD** (Never silently converts or strips VBA macros) | **100% PRESERVED** |
| **CSV / TSV (`text/csv`, `text/tab-separated-values`)** | **VERIFIED** (17 October files) | **VERIFIED** (Papa Parse) | **REPLICA EXPORT** (With CSV formula-injection sanitizer) | Plain text |
