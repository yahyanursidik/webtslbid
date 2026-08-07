# 33 — Redirect & Migration Plan

## Purpose
Preserve SEO dan link lama.

## Process
1. crawl/export URL lama,
2. tentukan URL baru,
3. buat redirect map,
4. gunakan 301 untuk permanent redirect,
5. hindari redirect chain.

## Example
```text
/old-path    /new-path    301
```

## Rules
- jangan redirect semua 404 ke homepage,
- gunakan nearest relevant page,
- preserve campaign parameters where possible,
- audit external backlinks jika tersedia.
