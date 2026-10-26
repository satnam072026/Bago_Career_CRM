# Self-Hosted Deployment Guide

## Docker Compose Deployment

```bash
cp .env.example .env
# Populate GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AUTH_SECRET, TOKEN_ENCRYPTION_KEY_BASE64
docker compose up --build -d
```

- **Web UI & API**: `http://localhost:3000`
- **PostgreSQL 16**: `localhost:5432` (internal Docker network `postgres:5432`)
- **Redis 7**: `localhost:6379` (internal Docker network `redis:6379`)
- **Operational Cost**: $0/month self-hosted via Docker Compose or single VPS; Google Drive/Sheets APIs and Microsoft Graph standard workbook endpoints incur $0 API usage fees within standard quota tiers.
