# 30 — Scholar Quotes Guidelines

## Tujuan
Nasihat ulama digunakan sebagai penguat konteks belajar, bukan dekorasi.

## Eligible Content
- nasihat ulama Ahlus Sunnah yang relevan,
- perkataan salaf,
- faedah dari ulama kontemporer yang sumbernya jelas.

## Verification
Sebelum status `published`:
1. pastikan attribution benar,
2. cek teks asli,
3. cek konteks,
4. cek sumber,
5. cek terjemahan,
6. review akademik.

## Source Priority
1. sumber primer,
2. edisi kitab terpercaya,
3. situs resmi ulama/lembaga resmi,
4. sumber sekunder tepercaya yang mencantumkan sumber primer.

Jangan jadikan sumber utama:
- Pinterest,
- Instagram poster,
- TikTok,
- Facebook quote image,
- anonymous blog,
- quote aggregator.

## Status
```yaml
status: draft | review | published
verified: true | false
```

Hanya:
```yaml
status: published
verified: true
```
yang boleh dirender di website production.

## UI
Gunakan:
- label kecil “Nasihat Ulama”,
- blockquote,
- nama,
- source line,
- divider.

Jangan:
- giant quote mark,
- decorative Arabic calligraphy,
- generated scholar portrait,
- mosque background,
- fake book background.

## Density
Homepage:
- maksimal 2 quote.

Inner page:
- maksimal 1 quote per main topic page,
- lebih banyak hanya pada artikel khusus yang memang membahas nasihat ulama.

## Direct Quote vs Insight

### ScholarQuote
Kutipan langsung.

### ScholarInsight
Parafrase/ringkasan faedah.
Tetap mencantumkan sumber.

Jangan menyamarkan paraphrase sebagai direct quote.
