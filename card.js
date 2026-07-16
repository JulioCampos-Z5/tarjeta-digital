/* ══════════════════════════════════════════════════════════════════
   Zyncosoft · Tarjetas digitales — render compartido
   Cada página define window.DATOS y este script dibuja la tarjeta.
   ══════════════════════════════════════════════════════════════════ */

const EMPRESA = 'Zyncosoft';
// Lema tomado del footer del sitio zyncosoft.pages.dev
const LEMA = 'Hecho con astucia. 🦊';
const WEB = 'https://zyncosoft.pages.dev';
// Ruta base a la raíz del proyecto ('./' en la raíz, '../' en /julio y /juan).
// Cada página la define en window.BASE para funcionar en file:// y en servidor.
const BASE = window.BASE || '/';

const iconos = {
  correo: '<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>',
  tel:    '<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>',
  wa:     '<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.944c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.9 11.9 0 0 0 5.71 1.454h.005c6.585 0 11.946-5.359 11.949-11.945a11.9 11.9 0 0 0-3.479-8.408"/></svg>',
  li:     '<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/></svg>',
  web:    '<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 0 1 0-18m0 18c2.485 0 4.5-4.03 4.5-9s-2.015-9-4.5-9m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9M3.6 9h16.8M3.6 15h16.8"/></svg>'
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function iniciales(nombre) {
  const p = nombre.trim().split(/\s+/);
  return ((p[0]?.[0] || '') + (p[1]?.[0] || '')).toUpperCase();
}

function vcard(d) {
  const partes = d.nombre.trim().split(/\s+/);
  return [
    'BEGIN:VCARD', 'VERSION:3.0',
    `N:${partes.slice(1).join(' ')};${partes[0]};;;`,
    `FN:${d.nombre}`,
    `ORG:${EMPRESA}`,
    d.tipo === 'persona' ? `TITLE:${d.cargo}` : '',
    d.telTel ? `TEL;TYPE=CELL:${d.telTel}` : '',
    d.correo ? `EMAIL;TYPE=WORK:${d.correo}` : '',
    d.web ? `URL:${d.web}` : '',
    // Sin emoji: qrcodejs falla al codificar caracteres fuera de ASCII.
    `NOTE:${LEMA.replace(/[^\x20-\x7E]/g, '').trim()}`,
    'END:VCARD'
  ].filter(Boolean).join('\r\n');
}

function boton(href, tipo, extra) {
  const paleta = {
    correo: 'hover:border-brand-400/70 hover:bg-brand-500/15 hover:text-brand-300',
    tel:    'hover:border-brand-400/70 hover:bg-brand-500/15 hover:text-brand-300',
    wa:     'hover:border-emerald-400/70 hover:bg-emerald-500/15 hover:text-emerald-300',
    li:     'hover:border-sky-400/70 hover:bg-sky-500/15 hover:text-sky-300',
    web:    'hover:border-violet-400/70 hover:bg-violet-500/15 hover:text-violet-300'
  };
  return `<a href="${esc(href)}" ${extra || ''}
    class="group grid h-12 flex-1 basis-0 place-items-center rounded-xl border border-white/10 bg-neutral-800 text-neutral-300 transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 sm:w-12 sm:flex-none ${paleta[tipo]}">
    ${iconos[tipo]}</a>`;
}

function navInferior(actualId) {
  const items = [
    ['Empresa', BASE, 'empresa'],
    ['Julio', BASE + 'julio/', 'julio'],
    ['Juan', BASE + 'juan/', 'juan']
  ];
  return items.map(([txt, href, id]) => {
    const on = id === actualId;
    return `<a href="${href}" class="${on
      ? 'text-brand-400 font-semibold'
      : 'text-neutral-500 hover:text-neutral-300'} transition">${txt}</a>`;
  }).join('<span class="text-neutral-700">·</span>');
}

function render() {
  const d = window.DATOS;
  const card = document.getElementById('card');

  // El logo va en la foto de perfil de cada tarjeta
  const avatar = `<img src="${BASE}logo.png" alt="Logotipo de ${esc(EMPRESA)}" class="h-12 w-12 shrink-0 rounded-xl bg-white p-1 sm:h-14 sm:w-14" />`;

  // Lema debajo del nombre (en todas las tarjetas)
  const lemaLinea = `<p class="mt-3 text-sm font-medium text-brand-400">${esc(LEMA)}</p>`;

  const botones = [
    d.correo   ? boton(`mailto:${d.correo}`, 'correo', 'title="Enviar correo" aria-label="Enviar correo"') : '',
    d.telTel   ? boton(`tel:${d.telTel}`, 'tel', 'title="Llamar" aria-label="Llamar"') : '',
    d.whatsapp ? boton(`https://wa.me/${d.whatsapp}?text=${encodeURIComponent(d.waMensaje)}`, 'wa', 'target="_blank" rel="noopener" title="WhatsApp" aria-label="WhatsApp"') : '',
    d.linkedin ? boton(d.linkedin, 'li', 'target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn"') : '',
    d.web      ? boton(d.web, 'web', 'target="_blank" rel="noopener" title="Sitio web" aria-label="Sitio web"') : ''
  ].join('');

  const filas = [
    d.correo   ? ['Correo', d.correo] : null,
    d.telefono ? ['Teléfono', d.telefono] : null,
    d.web      ? ['Web', d.web.replace(/^https?:\/\//, '')] : null
  ].filter(Boolean).map(([k, v]) =>
    `<div class="flex items-baseline justify-between gap-4">
       <dt class="shrink-0 text-neutral-500">${k}</dt>
       <dd class="min-w-0 truncate text-right font-medium text-neutral-300">${esc(v)}</dd>
     </div>`).join('');

  card.innerHTML = `
    <div class="grid gap-px bg-white/5 sm:grid-cols-[1.4fr_1fr]">
      <div class="min-w-0 bg-neutral-900 p-5 sm:p-9">
        <div class="flex items-center gap-4">
          ${avatar}
          <div class="min-w-0 flex-1">
            <h1 class="truncate text-xl font-bold leading-tight tracking-tight sm:text-2xl">${esc(d.nombre)}</h1>
            <p class="text-sm text-neutral-400">${esc(d.cargo)}</p>
          </div>
        </div>
        ${lemaLinea}

        <nav aria-label="Contacto" class="mt-6 flex items-center gap-2 sm:mt-7 sm:gap-3">${botones}</nav>

        <dl class="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm sm:mt-7">${filas}</dl>
      </div>

      <aside class="flex min-w-0 flex-col items-center justify-center gap-4 bg-neutral-900 p-5 text-center sm:p-8">
        <div class="rounded-2xl bg-white p-3 shadow-xl shadow-black/40">
          <div id="qr" class="h-32 w-32 sm:h-36 sm:w-36" role="img" aria-label="Código QR de ${esc(d.nombre)}"></div>
        </div>
        <p class="text-[11px] font-medium uppercase tracking-widest text-neutral-500">Escanea para abrir la tarjeta</p>
        <div class="flex w-full max-w-xs flex-col gap-2">
          <button id="btn-vcard" class="rounded-lg bg-brand-500 px-4 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">Guardar contacto</button>
          <button id="btn-share" class="rounded-lg border border-white/15 bg-neutral-800 px-4 py-3 text-sm font-semibold text-neutral-300 transition hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400">Compartir</button>
        </div>
      </aside>
    </div>`;

  // QR → siempre lleva a la URL de esta misma tarjeta
  const qrEl = document.getElementById('qr');
  const urlActual = location.href.split('#')[0];
  const texto = urlActual.startsWith('http') ? urlActual : (d.web || WEB);
  if (typeof QRCode !== 'undefined') {
    const opciones = (nivel) => ({ text: texto, width: 288, height: 288, colorDark: '#0a0a0a', colorLight: '#FFFFFF', correctLevel: nivel });
    try {
      new QRCode(qrEl, opciones(QRCode.CorrectLevel.M));
    } catch (e) {
      // Respaldo: nivel L admite más datos si la vCard es larga.
      try { new QRCode(qrEl, opciones(QRCode.CorrectLevel.L)); }
      catch (e2) { qrEl.innerHTML = '<p class="flex h-full w-full items-center justify-center p-2 text-center text-[11px] text-neutral-500">QR no disponible</p>'; }
    }
  } else {
    qrEl.innerHTML = '<p class="flex h-full w-full items-center justify-center p-2 text-center text-[11px] text-neutral-500">QR no disponible</p>';
  }

  // Guardar contacto
  document.getElementById('btn-vcard').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([vcard(d)], { type: 'text/vcard' }));
    a.download = `${d.nombre}.vcf`;
    a.click();
    URL.revokeObjectURL(a.href);
  });

  // Compartir
  document.getElementById('btn-share').addEventListener('click', async () => {
    const btn = document.getElementById('btn-share');
    const url = location.href.split('#')[0];
    const data = { title: `${d.nombre} — ${EMPRESA}`, text: d.cargo, url };
    if (navigator.share) { try { await navigator.share(data); } catch {} return; }
    try {
      await navigator.clipboard.writeText(url);
      const original = btn.textContent;
      btn.textContent = '¡Enlace copiado!';
      setTimeout(() => (btn.textContent = original), 1800);
    } catch {}
  });

  // Navegación entre tarjetas + año
  const nav = document.getElementById('nav-cards');
  if (nav) nav.innerHTML = navInferior(d.id || (d.tipo === 'empresa' ? 'empresa' : ''));
  const anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();
}

// Service worker (solo en http/https; en file:// no aplica)
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register(BASE + 'sw.js').catch(() => {}));
}

render();
