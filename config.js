// ============================================================
// KONFIGURASI BERKAH SLAMET GEMILANG
// Cukup ubah nilai di bawah ini, seluruh halaman ikut berubah.
// Pakai `var` (bukan `const`) agar config menempel di `window`
// dan bisa dibaca app.js lewat `window.BSG_CONFIG`.
// Ikon keunggulan memakai nama ikon SVG: tag, box, shield, receipt, truck, users.
// ============================================================
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
  // `image` = URL gambar produk (dari CDN Unsplash, bebas dipakai).
  products: [
    { sku: 'GLV-025-90', name: 'Galvalum 0.25mm x 90cm', category: 'Atap', unit: 'lembar', price: 78000, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=640&q=70' },
    { sku: 'GLV-030-90', name: 'Galvalum 0.30mm x 90cm', category: 'Atap', unit: 'lembar', price: 105000, image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=640&q=70' },
    { sku: 'SPD-025', name: 'Atap Spandek 0.25mm', category: 'Atap', unit: 'lembar', price: 58000, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=640&q=70' },
    { sku: 'SPD-030', name: 'Atap Spandek 0.30mm', category: 'Atap', unit: 'lembar', price: 72000, image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=640&q=70' },
    { sku: 'HOL-2x4-08', name: 'Besi Hollow 2x4 0.8mm', category: 'Besi', unit: 'batang', price: 62000, image: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=640&q=70' },
    { sku: 'HOL-4x4-12', name: 'Besi Hollow 4x4 1.2mm', category: 'Besi', unit: 'batang', price: 118000, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=640&q=70' },
    { sku: 'HOL-5x5-16', name: 'Besi Hollow 5x5 1.6mm', category: 'Besi', unit: 'batang', price: 165000, image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=640&q=70' },
    { sku: 'CNP-75', name: 'Kanal C (CNP) 75', category: 'Rangka Baja', unit: 'batang', price: 85000, image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=640&q=70' },
    { sku: 'RNG-030', name: 'Reng Baja Ringan 0.30', category: 'Rangka Baja', unit: 'batang', price: 45000, image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=640&q=70' },
    { sku: 'GYP-9', name: 'Plafon Gypsum 9mm', category: 'Plafon', unit: 'lembar', price: 68000, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=640&q=70' },
    { sku: 'PVC-PLF', name: 'Plafon PVC', category: 'Plafon', unit: 'lembar', price: 47000, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=640&q=70' },
  ],

  advantages: [
    { icon: 'tag', title: 'Harga Distributor', desc: 'Langsung dari gudang tanpa perantara — margin aman untuk dijual kembali.' },
    { icon: 'box', title: 'Stok Ready Setiap Hari', desc: 'Gudang utama selalu terisi, kebutuhan mendadak tetap terlayani.' },
    { icon: 'shield', title: 'Kualitas Terjamin', desc: 'Ukuran & ketebalan sesuai spesifikasi, barang dicek sebelum kirim.' },
    { icon: 'receipt', title: 'Nota & Surat Jalan Resmi', desc: 'Administrasi rapi untuk pembukuan toko maupun proyek.' },
    { icon: 'truck', title: 'Pengiriman Cepat', desc: 'Armada siap kirim, estimasi 1 hari untuk area kota & sekitarnya.' },
    { icon: 'users', title: 'Ecer & Partai Proyek', desc: 'Fleksibel: beli satuan untuk renovasi hingga volume proyek.' },
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
