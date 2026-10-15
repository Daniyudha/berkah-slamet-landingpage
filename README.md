# Landing Page — Berkah Slamet Gemilang (BSG)

Landing page statis untuk distributor atap, besi hollow, rangka baja ringan, dan plafon.
Styling memakai **Tailwind CSS via CDN** (tanpa build step) — cukup file HTML dan JS murni.

## Struktur

```
berkah-slamet-gemilang/
├── index.html   # Struktur halaman + sprite ikon SVG + konfigurasi tema Tailwind (hero, tentang, produk, keunggulan, cara order, FAQ, kontak)
├── app.js       # Render dinamis (produk, filter, FAQ accordion, menu mobile)
├── config.js    # ★ SEMUA KONTEN EDITABLE ADA DI SINI
└── assets/      # Logo (svg + png)
```

## Cara ubah konten

Cukup edit **`config.js`** — tidak perlu menyentuh HTML:

| Key | Kegunaan |
|---|---|
| `companyName`, `tagline`, `description` | Judul & deskripsi utama |
| `whatsapp`, `whatsappMessage` | Nomor WA (format `628xx`) + pesan default |
| `phoneDisplay`, `address`, `mapsUrl`, `hours`, `email` | Info kontak |
| `products` | Katalog (sku, nama, kategori, satuan, harga, image) |
| `advantages`, `steps`, `faqs` | Keunggulan (ikon: `tag`, `box`, `shield`, `receipt`, `truck`, `users`), cara order, FAQ |

## Tema warna (Tailwind, di `index.html` → `tailwind.config`)

| Token | Nilai | Pakai |
|---|---|---|
| `brand` / `branddark` | `#0d4ea1` / `#083a7d` (biru "G" logo) | Link, tombol outline, chip aktif, harga, ikon |
| `wagreen` / `wagreendark` | `#22a35b` / `#178245` | **Khusus tombol & ikon WhatsApp** |
| `gold` | `#f2b705` (kuning petir logo) | Badge & angka statistik hero |
| `ink` | `#161a21` (grafit rangka rumah) | Hero gradient, teks, footer |

## Cara preview lokal

```bash
cd berkah-slamet-gemilang
python3 -m http.server 8080
# buka http://localhost:8080
```

## Deploy

Upload seluruh isi folder ke hosting statis apa pun (cPanel, Netlify, Vercel, GitHub Pages, dsb).
Tidak ada environment variable / database yang dibutuhkan.
