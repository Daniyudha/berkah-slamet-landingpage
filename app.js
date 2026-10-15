// BSG landing page logic (styling: Tailwind CSS). Konten dari BSG_CONFIG.
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
  function icon(name, cls) {
    return '<svg class="' + (cls || 'h-8 w-8') + '" aria-hidden="true"><use href="#i-' + esc(name) + '" /></svg>';
  }
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
    if (navbar) navbar.classList.toggle('shadow-[0_4px_18px_rgba(0,0,0,0.08)]', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var toggle = $('#navToggle');
  var links = $('#navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('flex');
      if (open) links.classList.remove('hidden'); else links.classList.add('hidden');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target && e.target.tagName === 'A' && window.innerWidth < 768) {
        links.classList.remove('flex');
        links.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  // ---- Katalog produk + filter kategori ----
  var grid = $('#productGrid');
  var products = Array.isArray(cfg.products) ? cfg.products : [];
  var FALLBACK_IMG =
    'https://placehold.co/640x400/e7eefb/0d4ea1.png?text=BSG';
  var CHIP_BASE = 'cursor-pointer rounded-full border-[1.5px] px-[18px] py-2 font-sans text-[14px] font-bold ';
  var CHIP_ON = CHIP_BASE + 'border-brand bg-brand text-white';
  var CHIP_OFF = CHIP_BASE + 'border-line bg-white text-ink hover:border-brand hover:text-brand';
  function card(p) {
    var wa = cfg.whatsappLink
      ? 'https://wa.me/' + cfg.whatsapp + '?text=' + encodeURIComponent('Halo BSG, saya mau tanya ' + p.name + ' (' + p.sku + ').')
      : '#kontak';
    var img = p.image
      ? '<img class="aspect-[16/10] w-full rounded-[10px] bg-altbg object-cover" src="' + esc(p.image) + '" alt="' + esc(p.name) +
        '" loading="lazy" onerror="this.onerror=null;this.src=\'' + FALLBACK_IMG + '\';" />'
      : '';
    return (
      '<article class="flex flex-col gap-1.5 rounded-[14px] border border-line bg-white p-5 shadow-card" data-category="' + esc(p.category) + '">' +
        img +
        '<span class="self-start rounded-full bg-[#e7eefb] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-branddark">' + esc(p.category) + '</span>' +
        '<h3 class="mb-0 mt-2 text-[17px] font-bold">' + esc(p.name) + '</h3>' +
        '<p class="m-0 text-[13px] text-muted">' + esc(p.sku) + ' &bull; per ' + esc(p.unit) + '</p>' +
        '<p class="mx-0 my-2 text-xl font-extrabold text-branddark">' + rupiah(p.price) + '</p>' +
        '<a class="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-wagreen bg-white px-4 py-2 text-[13px] font-bold text-wagreen no-underline transition hover:-translate-y-px hover:bg-wagreen hover:text-white" href="' + esc(wa) + '" target="_blank" rel="noopener">' + icon('wa', 'h-4 w-4') + 'Tanya Stok</a>' +
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
      : '<p class="text-[15px] text-muted">Belum ada produk pada kategori ini.</p>';
  }
  renderProducts('all');
  $all('[data-filter]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      $all('[data-filter]').forEach(function (b) { b.className = CHIP_OFF; });
      btn.className = CHIP_ON;
      renderProducts(btn.getAttribute('data-filter'));
    });
  });

  // ---- Keunggulan (ikon SVG dari sprite #i-*) ----
  var advGrid = $('#advGrid');
  if (advGrid && Array.isArray(cfg.advantages)) {
    advGrid.innerHTML = cfg.advantages.map(function (a) {
      return '<div class="rounded-[14px] border border-line bg-white px-[22px] py-6 shadow-card">' +
        '<span class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7eefb] text-brand">' + icon(a.icon || 'box', 'h-6 w-6') + '</span>' +
        '<h3 class="mb-1.5 mt-3 text-[17px] font-bold">' + esc(a.title) + '</h3><p class="m-0 text-[15px] text-muted">' + esc(a.desc) + '</p></div>';
    }).join('');
  }
  // ---- Langkah order ----
  var stepsList = $('#stepsList');
  if (stepsList && Array.isArray(cfg.steps)) {
    stepsList.innerHTML = cfg.steps.map(function (s, i) {
      return '<li class="flex items-start gap-4 rounded-[14px] border border-line bg-white px-5 py-[18px] shadow-card">' +
        '<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-[18px] font-extrabold text-white">' + (i + 1) + '</span>' +
        '<div><strong class="text-[17px]">' + esc(s.title) + '</strong><p class="mb-0 mt-0.5 text-[15px] text-muted">' + esc(s.desc) + '</p></div></li>';
    }).join('');
  }

  // ---- FAQ accordion ----
  var faqList = $('#faqList');
  if (faqList && Array.isArray(cfg.faqs)) {
    faqList.innerHTML = cfg.faqs.map(function (f) {
      return '<div class="faq-item overflow-hidden rounded-[14px] border border-line bg-white">' +
        '<button class="faq-q flex w-full cursor-pointer items-center justify-between gap-3 bg-transparent border-0 px-5 py-4 text-left font-sans text-[15px] font-bold text-ink" type="button">' +
        esc(f.q) + '<span class="faq-plus shrink-0 text-[22px] font-normal text-brand transition-transform">+</span></button>' +
        '<div class="faq-a max-h-0 overflow-hidden transition-[max-height] duration-300"><p class="m-0 px-5 pb-[18px] text-[15px] text-muted">' + esc(f.a) + '</p></div></div>';
    }).join('');
    faqList.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.faq-q') : null;
      if (!btn) return;
      var item = btn.parentElement;
      var ans = btn.nextElementSibling;
      var wasOpen = item.classList.contains('open');
      $all('.faq-item.open', faqList).forEach(function (it) {
        it.classList.remove('open');
        var a = it.querySelector('.faq-a');
        if (a) a.style.maxHeight = '0px';
        var p = it.querySelector('.faq-plus');
        if (p) p.style.transform = '';
      });
      if (!wasOpen) {
        item.classList.add('open');
        if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
        var plus = btn.querySelector('.faq-plus');
        if (plus) plus.style.transform = 'rotate(45deg)';
      }
    });
  }
})(window, document);
