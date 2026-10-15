// ============================================================
// KONFIGURASI BERKAH SLAMET GEMILANG
// Cukup ubah nilai di bawah ini, seluruh halaman ikut berubah.
// ============================================================
const BSG_CONFIG = {
  companyName: 'Berkah Slamet Gemilang',
  shortName: 'BSG',
  tagline: 'Distributor Atap & Baja Ringan Terpercaya',
  description:
    'Melayani toko bangunan, kontraktor, dan proyek dengan harga distributor, stok ready, dan pengiriman cepat.',

  // Ganti dengan nomor WhatsApp aktif (format: 628xx tanpa spasi/tanda +).
  whatsapp: '6281234567890',
  whatsappMessage:
    'Halo Berkah Slamet Gemilang, saya mau tanya pricelist produk.',
  phoneDisplay: '(0274) 000-000 / 0812-3456-7890',

  address: 'Jl. Raya Contoh No. 123, Yogyakarta',
  mapsUrl: 'https://maps.google.com/?q=Yogyakarta',
  hours: 'Senin – Sabtu, 08.00 – 17.00 WIB',
  email: 'info@berkahslametgemilang.id',

  // Katalog produk (harga contoh — update berkala via file ini).
  products: [
    { sku: 'GLV-025-90', name: 'Galvalum 0.25mm x 90cm', category: 'Atap', unit: 'lembar', price: 78000 },
    { sku: 'GLV-030-90', name: 'Galvalum 0.30mm x 90cm', category: 'Atap', unit: 'lembar', price: 105000 },
    { sku: 'SPD-025', name: 'Atap Spandek 0.25mm', category: 'Atap', unit: 'lembar', price: 58000 },
    { sku: 'SPD-030', name: 'Atap Spandek 0.30mm', category: 'Atap', unit: 'lembar', price: 72000 },
    { sku: 'HOL-2x4-08', name: 'Besi Hollow 2x4 0.8mm', category: 'Besi', unit: 'batang', price: 62000 },
    { sku: 'HOL-4x4-12', name: 'Besi Hollow 4x4 1.2mm', category: 'Besi', unit: 'batang', price: 118000 },
    { sku: 'HOL-5x5-16', name: 'Besi Hollow 5x5 1.6mm', category: 'Besi', unit: 'batang', price: 165000 },
    { sku: 'CNP-75', name: 'Kanal C (CNP) 75', category: 'Rangka Baja', unit: 'batang', price: 85000 },
    { sku: 'RNG-030', name: 'Reng Baja Ringan 0.30', category: 'Rangka Baja', unit: 'batang', price: 45000 },
    { sku: 'GYP-9', name: 'Plafon Gypsum 9mm', category: 'Plafon', unit: 'lembar', price: 68000 },
    { sku: 'PVC-PLF', name: 'Plafon PVC', category: 'Plafon', unit: 'lembar', price: 47000 },
  ],

  advantages: [
    { icon: '💰', title: 'Harga Distributor', desc: 'Langsung dari gudang tanpa perantara — margin aman untuk dijual kembali.' },
    { icon: '📦', title: 'Stok Ready Setiap Hari', desc: 'Gudang utama selalu terisi, kebutuhan mendadak tetap terlayani.' },
    { icon: '✅', title: 'Kualitas Terjamin', desc: 'Ukuran & ketebalan sesuai spesifikasi, barang dicek sebelum kirim.' },
    { icon: '🧾', title: 'Nota & Surat Jalan Resmi', desc: 'Administrasi rapi untuk pembukuan toko maupun proyek.' },
    { icon: '🚚', title: 'Pengiriman Cepat', desc: 'Armada siap kirim, estimasi 1 hari untuk area kota & sekitarnya.' },
    { icon: '🤝', title: 'Ecer & Partai Proyek', desc: 'Fleksibel: beli satuan untuk renovasi hingga volume proyek.' },
  ],

  steps: [
    { title: 'Chat WhatsApp', desc: 'Sampaikan kebutuhan: jenis barang, ukuran, dan jumlah.' },
    { title: 'Terima Penawaran', desc: 'Kami kirim pricelist terbaru + estimasi ongkir.' },
    { title: 'Bayar & Terima Nota', desc: 'Pembayaran transfer/cash, nota resmi diterbitkan.' },
    { title: 'Barang Dikirim', desc: 'Diantar dengan surat jalan, cek barang saat terima.' },
  ],

  faqs: [
    { q: 'Apakah bisa beli ecer/satuan?', a: 'Bisa. Kami melayani pembelian ecer untuk renovasi maupun partai besar untuk proyek.' },
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
