# 16 — Architecture

## High-Level
```text
User
 ↓
Netlify CDN
 ↓
Astro Public Website
 ├── Static Pages
 ├── Content Collections
 ├── SEO
 └── Small Interactive Islands
```

## Ecosystem
```text
tslbelajarislam.id
    └── Public Website

kelas.tslbelajarislam.id
    └── LMS / participant portal

registration URL / service
    └── Enrollment
```

## Rendering
Recommended:
- Homepage: SSG
- Program: SSG
- Curriculum: SSG
- Subjects: SSG
- Teachers: SSG
- About: SSG
- FAQ: SSG
- Articles: SSG
- Search: client/third-party if necessary
- dynamic status: SSR/API only if required

## Data
Phase 1:
- no database,
- Git-versioned content.

Future:
- CMS only when content team truly needs it.
