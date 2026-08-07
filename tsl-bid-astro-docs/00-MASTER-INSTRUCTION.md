# 00 — Master Instruction
## Project: Tarbiyah Sunnah Learning — Belajar Islam Dasar (BID)

## Tujuan
Dokumen ini adalah instruksi utama bagi AI coding assistant dan developer manusia dalam membangun ulang website publik:

- Brand: Tarbiyah Sunnah Learning
- Program: Belajar Islam Dasar (BID)
- Domain utama: `https://tslbelajarislam.id/`
- Platform: website publik responsive, bukan LMS
- Stack utama: Astro `7.2.0` + TypeScript + Hallmark (`nutlope/hallmark`) + Netlify
- Pendekatan: content-first, performance-first, mobile-first, editorial + educational + institutional
- Bahasa utama: Bahasa Indonesia

## Peran AI
Bertindak sebagai:
1. system analyst,
2. product designer,
3. UI/UX designer,
4. content architect,
5. full-stack developer,
6. QA engineer,
7. technical writer.

AI wajib membaca file `.md` proyek sebelum membuat keputusan implementasi.

## Prinsip Besar
Website BID harus terasa sebagai rumah digital program pembelajaran Islam dasar yang:
- terstruktur,
- bertahap,
- terarah,
- kredibel,
- tenang,
- mudah dipahami masyarakat umum,
- jelas jalur pendaftarannya.

Website tidak boleh terasa seperti:
- template SaaS,
- landing page AI generik,
- toko kursus,
- website “Arabian aesthetic” dekoratif.

## Non-Negotiable Visual Rules
JANGAN gunakan:
- Islamic arch / lengkung masjid dekoratif,
- mihrab palsu,
- masjid siluet sebagai ornamen,
- bulan dan bintang dekoratif,
- lentera,
- kubah,
- pattern Islam generik,
- kitab palsu,
- mushaf palsu,
- tulisan Arab palsu,
- kaligrafi AI,
- AI-generated Arabic text,
- ilustrasi AI muslim generik,
- green-gold gradient berlebihan,
- glassmorphism,
- floating SaaS cards,
- icon 3D,
- random blobs,
- rounded-card berlebihan.

Gunakan:
- tipografi kuat,
- whitespace,
- garis divider,
- layout editorial,
- foto dokumentasi asli bila tersedia,
- diagram kurikulum,
- hierarchy yang jelas,
- warna hijau yang tenang dan tidak berlebihan.

## Quote Ulama
Website boleh menampilkan nasihat/quote ulama Ahlus Sunnah/manhaj salaf.

Aturan:
- kutipan langsung harus terverifikasi,
- sumber harus dicantumkan,
- teks Arab tidak boleh dibuat AI,
- jangan menampilkan quote tidak jelas asalnya,
- bila ragu: tandai sebagai draft dan jangan publish,
- maksimal 1–2 quote per halaman panjang,
- quote harus relevan dengan konteks section.

Baca: `09-ISLAMIC-CONTENT-GUIDELINES.md` dan `30-SCHOLAR-QUOTES-GUIDELINES.md`.

## Arsitektur Produk
Pisahkan:
- website publik,
- pendaftaran,
- LMS/kelas.

Target:
- `tslbelajarislam.id` → public website
- `kelas.tslbelajarislam.id` → portal/LMS bila digunakan
- integrasi pendaftaran dilakukan melalui URL/API eksternal bila diperlukan.

## Cara Kerja AI
JANGAN membangun website lengkap dalam satu prompt.

Kerjakan tahap:
1. discovery,
2. architecture,
3. design foundation,
4. project scaffold,
5. global shell,
6. homepage per-section,
7. inner pages,
8. content collections,
9. integrations,
10. SEO,
11. accessibility,
12. performance,
13. QA,
14. deploy.

Setelah setiap tahap:
- build,
- lint/typecheck,
- review visual,
- laporkan file yang berubah,
- jangan lanjut jika ada error fundamental.

## Definition of Done Singkat
- Astro build sukses
- mobile & desktop baik
- no horizontal overflow
- accessible navigation
- content terstruktur
- no fake religious imagery
- no unverified Islamic quote
- SEO metadata lengkap
- performance tinggi
- Netlify deploy siap
