// BSG landing page logic (tanpa framework). Konten dari BSG_CONFIG.
(function () {
  'use strict';
  var cfg = window.BSG_CONFIG || {};
  function $(s, c) { return (c || document).querySelector(s); }
  function $all(s, c) {
    return Array.prototype.slice.call((c || document).querySelectorAll(s));
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      var m = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };
      m['"'] = '&quot;';
      m["'"] = '&#39;';
      return m[c];
    });
  }
  function rupiah(n) { return 'Rp ' + Number(n || 0).toLocaleString('id-ID'); }

  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  $all('[data-config]').forEach(function (el) {
    var v = cfg[el.getAttribute('data-config')];
    if (typeof v === 'string' || typeof v === 'number') el.textContent = v;
  });
  $all('[data-config-href]').forEach(function (el) {
    var v = cfg[el.getAttribute('data-config-href')];
    if (v) el.setAttribute('href', v);
  });
  $all('[data-config-href-email]').forEach(function (el) {
    var v = cfg[el.getAttribute('data-config-href-email')];
    if (v) el.setAttribute('href', 'mailto:' + v);
  });

  var navbar = $('#navbar');
  function onScroll() {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var toggle = $('#navToggle');
  var links = $('#navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target && e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Katalog produk + filter kategori ----
  var grid = $('#productGrid');
  var products = Array.isArray(cfg.products) ? cfg.products : [];
  function card(p) {
    var wa = cfg.whatsappLink
      ? 'https://wa.me/' + cfg.whatsapp + '?text=' + encodeURIComponent('Halo BSG, saya mau tanya ' + p.name + ' (' + p.sku + ').')
      : '#kontak';
    return (
      '<article class="product-card" data-category="' + esc(p.category) + '">' +
        '<span class="product-cat">' + esc(p.category) + '</span>' +
        '<h3>' + esc(p.name) + '</h3>' +
        '<p class="product-sku">' + esc(p.sku) + ' &bull; per ' + esc(p.unit) + '</p>' +
        '<p class="product-price">' + rupiah(p.price) + '</p>' +
        '<a class="btn btn-outline btn-sm btn-block" href="' + esc(wa) + '" target="_blank" rel="noopener">Tanya Stok</a>' +
      '</article>'
    );
  }
  function renderProducts(filter) {
    if (!grid) return;
    var list = !filter || filter === 'all'
      ? products
      : products.filter(function (p) { return p.category === filter; });
    grid.innerHTML = list.length
      ? list.map(card).join('')
      : '<p class="note">Belum ada produk pada kategori ini.</p>';
  }
  renderProducts('all');
  $all('[data-filter]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      $all('[data-filter]').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderProducts(btn.getAttribute('data-filter'));
    });
  });

  // ---- Keunggulan ----
  var advGrid = $('#advGrid');
  if (advGrid && Array.isArray(cfg.advantages)) {
    advGrid.innerHTML = cfg.advantages.map(function (a) {
      return '<div class="adv-card"><span class="adv-icon">' + esc(a.icon) +
        '</span><h3>' + esc(a.title) + '</h3><p>' + esc(a.desc) + '</p></div>';
    }).join('');
  }

  // ---- Langkah order ----
  var stepsList = $('#stepsList');
  if (stepsList && Array.isArray(cfg.steps)) {
    stepsList.innerHTML = cfg.steps.map(function (s, i) {
      return '<li><span class="step-num">' + (i + 1) + '</span><div><strong>' +
        esc(s.title) + '</strong><p>' + esc(s.desc) + '</p></div></li>';
    }).join('');
  }

  // ---- FAQ accordion ----
  var faqList = $('#faqList');
  if (faqList && Array.isArray(cfg.faqs)) {
    faqList.innerHTML = cfg.faqs.map(function (f) {
      return '<div class="faq-item"><button class="faq-q" type="button">' +
        esc(f.q) + '<span class="faq-plus">+</span></button>' +
        '<div class="faq-a"><p>' + esc(f.a) + '</p></div></div>';
    }).join('');
    faqList.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.faq-q') : null;
      if (!btn) return;
      var item = btn.parentElement;
      var wasOpen = item.classList.contains('open');
      $all('.faq-item.open', faqList).forEach(function (it) {
        it.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  }
})(window, document);
