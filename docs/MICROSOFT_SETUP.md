# Microsoft Entra ID & Graph API Setup (OneDrive / SharePoint Excel)

1. Open **Microsoft Entra Admin Center** -> **App registrations** -> **New registration**.
2. Set Redirect URI (Web): `http://localhost:3000/api/auth/callback/microsoft-entra-id`.
3. Under **API permissions** -> **Microsoft Graph** -> **Delegated permissions**, add:
   - `User.Read`
   - `Files.Read.All` (Discover OneDrive & SharePoint Excel workbooks)
   - `Files.ReadWrite` (Optional: enable only when range-level Excel write-back is desired)
   - `offline_access`
4. Copy `MICROSOFT_CLIENT_ID`, `MICROSOFT_CLIENT_SECRET`, and `MICROSOFT_TENANT_ID` into `.env`.
