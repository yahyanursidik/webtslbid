# 24 — Netlify Deployment

## Flow
```text
GitHub
↓
Pull Request
↓
Netlify Deploy Preview
↓
Review
↓
Merge main
↓
Production Deploy
```

## Build
Typical:
```text
Build command: npm run build
Publish directory: dist
```

## Configuration
Use `netlify.toml` for:
- headers,
- redirects,
- caching,
- framework settings if required.

## Environment
Keep separate:
- development
- deploy preview
- production

## Domain
Production:
`tslbelajarislam.id`
