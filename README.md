# Landing Page — Berkah Slamet Gemilang (BSG)

Landing page statis untuk distributor atap, besi hollow, rangka baja ringan, dan plafon.
Tanpa framework / tanpa build step — cukup file HTML, CSS, dan JS murni.

## Struktur

```
berkah-slamet-gemilang/
├── index.html   # Struktur halaman (hero, tentang, produk, keunggulan, cara order, FAQ, kontak)
├── styles.css   # Seluruh tampilan + responsif mobile
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
| `products` | Katalog (sku, nama, kategori, satuan, harga) |
| `advantages`, `steps`, `faqs` | Keunggulan, cara order, FAQ |

## Cara preview lokal

```bash
cd berkah-slamet-gemilang
python3 -m http.server 8080
# buka http://localhost:8080
```

## Deploy

Upload seluruh isi folder ke hosting statis apa pun (cPanel, Netlify, Vercel, GitHub Pages, dsb).
Tidak ada environment variable / database yang dibutuhkan.
