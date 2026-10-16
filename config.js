// ============================================================
// KONFIGURASI BERKAH SLAMET GEMILANG
// Cukup ubah nilai di bawah ini, seluruh halaman ikut berubah.
// Pakai `var` (bukan `const`) agar config menempel di `window`
// dan bisa dibaca app.js lewat `window.BSG_CONFIG`.
// Ikon keunggulan memakai nama ikon SVG: tag, box, shield, receipt, truck, users.
// ============================================================
// URL gambar produk (hosting: Wikimedia Commons — bebas dipakai, sudah diverifikasi).
// Ganti nilai di bawah untuk mengubah foto, tanpa menyentuh daftar produk.
var IMG_ZINCROOF =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dachdeckung_aus_diagonal_verlegten_Grossrauten_aus_Zinkblech%2C_%C3%9Cber_dem_Dorfe_13%2C_Niedernissa%2C_99099_Erfurt%2C_Germany.jpg/960px-Dachdeckung_aus_diagonal_verlegten_Grossrauten_aus_Zinkblech%2C_%C3%9Cber_dem_Dorfe_13%2C_Niedernissa%2C_99099_Erfurt%2C_Germany.jpg';
var IMG_CORRUGATED =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Corrugated_iron_02_-_Preview_%28Jandre_van_Heerden_via_Poly_Haven%29.webp/960px-Corrugated_iron_02_-_Preview_%28Jandre_van_Heerden_via_Poly_Haven%29.webp';
var IMG_SPANDEK =
  'https://upload.wikimedia.org/wikipedia/commons/d/d3/Atap_spandek_6.jpg';
var IMG_HOLLOW =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Steel_beams_stacked_beside_a_building_in_a_construction_yard.jpg/960px-Steel_beams_stacked_beside_a_building_in_a_construction_yard.jpg';
var IMG_PIPE =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Steel_pipe.jpg/960px-Steel_pipe.jpg';
var IMG_TRUSS =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Three_dimensional_truss_construction_Unic_Rotarex%C2%AE.jpg/960px-Three_dimensional_truss_construction_Unic_Rotarex%C2%AE.jpg';
var IMG_GYPSUM =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Gib_board_aka_plasterboard_tapered_edges_01.jpg/960px-Gib_board_aka_plasterboard_tapered_edges_01.jpg';
var IMG_PVC =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fine_PVC_Ceiling_in_Awka.jpg/960px-Fine_PVC_Ceiling_in_Awka.jpg';

var BSG_CONFIG = {
  companyName: 'Berkah Slamet Gemilang',
  shortName: 'BSG',
  tagline: 'Distributor Atap & Baja Ringan Terpercaya',
  description:
    'Melayani toko bangunan, kontraktor, dan proyek dengan harga distributor, stok ready, dan pengiriman cepat.',

  // Ganti dengan nomor WhatsApp aktif (format: 628xx tanpa spasi/tanda +).
  whatsapp: '6287785841345',
  whatsappMessage:
    'Halo Berkah Slamet Gemilang, saya mau tanya pricelist produk.',
  phoneDisplay: '62-877-8584-1345',

  address: 'Jl. Kebon Agung, Pete, Margodadi, Kec. Seyegan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55561',
  mapsUrl: 'https://maps.app.goo.gl/rqAecBWgtxdkEgZLA',
  hours: 'Senin – Sabtu, 09.00 – 16.00 WIB',
  email: 'berkahslamet.web@gmail.com',

  // Katalog produk (harga contoh — update berkala via file ini).
  // `image` = URL foto produk (lihat konstanta IMG_* di atas, dari Wikimedia Commons).
  products: [
    { sku: 'GLV-025-90', name: 'Galvalum 0.25mm x 90cm', category: 'Atap', unit: 'lembar', price: 78000, image: IMG_ZINCROOF },
    { sku: 'GLV-030-90', name: 'Galvalum 0.30mm x 90cm', category: 'Atap', unit: 'lembar', price: 105000, image: IMG_CORRUGATED },
    { sku: 'SPD-025', name: 'Atap Spandek 0.25mm', category: 'Atap', unit: 'lembar', price: 58000, image: IMG_SPANDEK },
    { sku: 'SPD-030', name: 'Atap Spandek 0.30mm', category: 'Atap', unit: 'lembar', price: 72000, image: IMG_ZINCROOF },
    { sku: 'HOL-2x4-08', name: 'Besi Hollow 2x4 0.8mm', category: 'Besi', unit: 'batang', price: 62000, image: IMG_HOLLOW },
    { sku: 'HOL-4x4-12', name: 'Besi Hollow 4x4 1.2mm', category: 'Besi', unit: 'batang', price: 118000, image: IMG_PIPE },
    { sku: 'HOL-5x5-16', name: 'Besi Hollow 5x5 1.6mm', category: 'Besi', unit: 'batang', price: 165000, image: IMG_HOLLOW },
    { sku: 'CNP-75', name: 'Kanal C (CNP) 75', category: 'Rangka Baja', unit: 'batang', price: 85000, image: IMG_TRUSS },
    { sku: 'RNG-030', name: 'Reng Baja Ringan 0.30', category: 'Rangka Baja', unit: 'batang', price: 45000, image: IMG_TRUSS },
    { sku: 'GYP-9', name: 'Plafon Gypsum 9mm', category: 'Plafon', unit: 'lembar', price: 68000, image: IMG_GYPSUM },
    { sku: 'PVC-PLF', name: 'Plafon PVC', category: 'Plafon', unit: 'lembar', price: 47000, image: IMG_PVC },
  ],

  advantages: [
    { icon: 'tag', title: 'Harga Distributor', desc: 'Langsung dari gudang tanpa perantara — margin aman untuk dijual kembali.' },
    { icon: 'box', title: 'Stok Ready Setiap Hari', desc: 'Gudang utama selalu terisi, kebutuhan mendadak tetap terlayani.' },
    { icon: 'shield', title: 'Kualitas Terjamin', desc: 'Ukuran & ketebalan sesuai spesifikasi, barang dicek sebelum kirim.' },
    { icon: 'receipt', title: 'Nota & Surat Jalan Resmi', desc: 'Administrasi rapi untuk pembukuan toko maupun proyek.' },
    { icon: 'truck', title: 'Pengiriman Cepat', desc: 'Armada siap kirim, estimasi 1 hari untuk area kota & sekitarnya.' },
    { icon: 'users', title: 'Partai & Proyek', desc: 'Melayani pembelian partai untuk toko, kontraktor, dan proyek.' },
  ],

  steps: [
    { title: 'Chat WhatsApp', desc: 'Sampaikan kebutuhan: jenis barang, ukuran, dan jumlah.' },
    { title: 'Terima Penawaran', desc: 'Kami kirim pricelist terbaru + estimasi ongkir.' },
    { title: 'Bayar & Terima Nota', desc: 'Pembayaran transfer/cash, nota resmi diterbitkan.' },
    { title: 'Barang Dikirim', desc: 'Diantar dengan surat jalan, cek barang saat terima.' },
  ],

  faqs: [
    { q: 'Apa bedanya galvalum dan spandek?', a: 'Galvalum (zincalume) punya lapisan seng–aluminium sehingga lebih awat dan tahan karat. Spandek lebih tipis, ringan, dan ekonomis — cocok untuk atap rumah tinggal & kanopi.' },
    { q: 'Ketebalan & ukuran apa saja yang tersedia?', a: 'Atap tersedia 0.25mm & 0.30mm (lebar efektif 90cm). Besi hollow 2x4, 4x4, dan 5x5. Plafon gypsum 9mm & plafon PVC. Untuk panjang/ukuran khusus, tanyakan via WhatsApp.' },
    { q: 'Berapa jarak reng yang ideal untuk atap baja ringan?', a: 'Untuk ketebalan 0.25–0.30mm, jarak reng umumnya 60–70cm, menyesuaikan kemiringan dan beban atap. Konsultasikan kebutuhan Anda via WhatsApp.' },
    { q: 'Bagaimana cara cek harga terbaru?', a: 'Harga material fluktuatif — chat WhatsApp kami untuk pricelist terbaru hari ini.' },
    { q: 'Apakah ada pengiriman ke luar kota?', a: 'Ada. Ongkir menyesuaikan jarak & volume — tanyakan estimasinya via WhatsApp.' },
    { q: 'Apakah barang bisa ditukar jika salah ukuran?', a: 'Bisa, selama barang belum dipotong/dipakai dan masih dalam kondisi baik. Hubungi kami maksimal H+1 setelah terima.' },
    { q: 'Metode pembayaran apa saja?', a: 'Transfer bank dan cash. Untuk proyek rutin tersedia termin repeat order.' },
  ],
};

// Link WhatsApp siap pakai (otomatis dari nomor + pesan di atas).
BSG_CONFIG.whatsappLink =
  'https://wa.me/' +
  BSG_CONFIG.whatsapp +
  '?text=' +
  encodeURIComponent(BSG_CONFIG.whatsappMessage);
