# Google Drive v3 & Google Sheets v4 OAuth Setup

1. Open Google Cloud Console -> **APIs & Services** -> **Enable APIs**:
   - Enable **Google Drive API** (`drive.googleapis.com`)
   - Enable **Google Sheets API** (`sheets.googleapis.com`)
2. Configure **OAuth Consent Screen** and add scopes:
   - `https://www.googleapis.com/auth/drive.readonly` (Discovery, timestamps, folder paths, permissions)
   - `https://www.googleapis.com/auth/spreadsheets` (Authorized range read & guarded cell write-back)
   - `openid`, `email`, `profile`
3. Create **OAuth 2.0 Client ID (Web Application)**:
   - Authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
4. Copy `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` into `.env`.
