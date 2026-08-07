# 22 — Security

## Minimum
- HTTPS
- HSTS where appropriate
- CSP
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## Secrets
- never commit `.env`
- use Netlify environment variables
- no API secret in frontend code

## Forms
If forms are added:
- validate server-side where relevant,
- anti-spam,
- rate limiting where supported,
- safe error messages.

## External Links
Use safe rel attributes where needed.
