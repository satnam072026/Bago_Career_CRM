# Security, Privacy & Token Storage Boundaries

1. **Zero Hardcoded Secrets**: No OAuth client secrets, refresh tokens, access tokens, or `.env` files are stored in frontend bundles or in `Sandeep_Workspace_Complete_Source.zip`.
2. **At-Rest Token Encryption**: OAuth refresh tokens stored in `ConnectedAccount.encryptedTokenVault` are encrypted using `AES-256-GCM` with `TOKEN_ENCRYPTION_KEY_BASE64`.
3. **CSV Formula Injection Defense**: Every cell exported to CSV via `sanitizeCsvCellForExport()` escapes leading `=`, `+`, `-`, and `@` characters with a leading single quote (`'`) so untrusted cell strings cannot trigger DDE/command execution in desktop spreadsheet clients.
4. **HTML / XSS Sanitization**: All workbook titles, folder paths, owner emails, and cell strings are HTML-escaped before DOM insertion.
