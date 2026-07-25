/* ══════════════════════════════════════════════════════════════════
   Kubo · Mago Ilusionista — tarjeta digital con temática de magia.
   Página autocontenida: no depende de card.js (tema propio negro y dorado).
   ══════════════════════════════════════════════════════════════════ */

const BASE = '../';

const iconos = {
  correo: '<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>',
  tel: '<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>',
  wa: '<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.944c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.9 11.9 0 0 0 5.71 1.454h.005c6.585 0 11.946-5.359 11.949-11.945a11.9 11.9 0 0 0-3.479-8.408"/></svg>',
  ig: '<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.688.073-4.948s-.014-3.667-.072-4.947C23.73 2.702 21.31.273 16.951.073 15.667.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/></svg>',
  web: '<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 0 1 0-18m0 18c2.485 0 4.5-4.03 4.5-9s-2.015-9-4.5-9m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9M3.6 9h16.8M3.6 15h16.8"/></svg>',
  estrella: '<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2H22l-6 4.6 2.3 7.2L12 16.6 5.7 21l2.3-7.2-6-4.6h7.6z"/></svg>'
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function vcard(d) {
  return [
    'BEGIN:VCARD', 'VERSION:3.0',
    `N:;${d.nombre};;;`,
    `FN:${d.nombre}`,
    `ORG:${d.nombre} — Magia`,
    `TITLE:${d.cargo}`,
    d.telTel ? `TEL;TYPE=CELL:${d.telTel}` : '',
    d.correo ? `EMAIL;TYPE=WORK:${d.correo}` : '',
    d.web ? `URL:${d.web}` : '',
    `NOTE:${d.lema.replace(/[^\x20-\x7E]/g, '').trim()}`,
    'END:VCARD'
  ].filter(Boolean).join('\r\n');
}

function boton(href, tipo, extra) {
  return `<a href="${esc(href)}" ${extra || ''}
    class="group grid h-12 flex-1 basis-0 place-items-center rounded-xl border border-gold-600/40 bg-black/40 text-gold-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:bg-gold-400 hover:text-black hover:shadow-[0_0_18px_rgba(212,175,55,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 sm:w-12 sm:flex-none">
    ${iconos[tipo]}</a>`;
}

function esquina(posicion) {
  const transform = {
    tl: '',
    tr: 'transform:scaleX(-1);',
    bl: 'transform:scaleY(-1);',
    br: 'transform:scale(-1,-1);'
  }[posicion];
  const clase = {
    tl: 'left-2.5 top-2.5',
    tr: 'right-2.5 top-2.5',
    bl: 'left-2.5 bottom-2.5',
    br: 'right-2.5 bottom-2.5'
  }[posicion];
  return `<svg viewBox="0 0 64 64" class="pointer-events-none absolute ${clase} h-8 w-8 text-gold-400/80 sm:h-10 sm:w-10" style="overflow:visible;${transform}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 50 V22"/><path d="M22 10 H50"/><path d="M10 22 C10 14.5 14.5 10 22 10"/>
    <path d="M15 15 C26 8 32 20 22 24 C16 26.3 13 20 18 18 C21 16.8 22 19 20 20" stroke-width="1.4"/>
    <path d="M10 50 h6" stroke-width="1.5"/><path d="M50 10 v6" stroke-width="1.5"/>
    <path d="M10 10 l2.6 2.6 l-2.6 2.6 l-2.6 -2.6 Z" fill="currentColor" stroke="none"/>
  </svg>`;
}

const CHISPA_PATH = 'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';

/* Chispas doradas decorativas alrededor de un botón (efecto "magia") */
function chispas(n) {
  let html = '';
  for (let i = 0; i < n; i++) {
    const top = (Math.random() * 84 + 4).toFixed(0);
    const left = (Math.random() * 90 + 3).toFixed(0);
    const size = (Math.random() * 5 + 4).toFixed(1);
    const delay = (Math.random() * 2).toFixed(2);
    const dur = (1.8 + Math.random() * 1.4).toFixed(2);
    html += `<span class="pointer-events-none absolute animate-chispa" style="top:${top}%;left:${left}%;animation-delay:${delay}s;animation-duration:${dur}s">
      <svg class="animate-girar-lento" style="width:${size}px;height:${size}px;filter:drop-shadow(0 0 3px rgba(246,221,147,.85))" viewBox="0 0 68 68" fill="#fdf3d9"><path d="${CHISPA_PATH}"/></svg>
    </span>`;
  }
  return `<div class="pointer-events-none absolute inset-0 z-10 overflow-visible">${html}</div>`;
}

function letras(texto) {
  return [...texto].map((ch, i) =>
    `<span class="inline-block opacity-0 animate-letter-in" style="animation-delay:${900 + i * 55}ms">${ch === ' ' ? '&nbsp;' : esc(ch)}</span>`
  ).join('');
}

function render() {
  const d = window.DATOS;
  const card = document.getElementById('card');

  const botones = [
    d.correo ? boton(`mailto:${d.correo}`, 'correo', 'title="Enviar correo" aria-label="Enviar correo"') : '',
    d.telTel ? boton(`tel:${d.telTel}`, 'tel', 'title="Llamar" aria-label="Llamar"') : '',
    d.whatsapp ? boton(`https://wa.me/${d.whatsapp}?text=${encodeURIComponent(d.waMensaje)}`, 'wa', 'target="_blank" rel="noopener" title="WhatsApp" aria-label="WhatsApp"') : '',
    d.instagram ? boton(d.instagram, 'ig', 'target="_blank" rel="noopener" title="Instagram" aria-label="Instagram"') : '',
    d.web ? boton(d.web, 'web', 'target="_blank" rel="noopener" title="Sitio web" aria-label="Sitio web"') : ''
  ].join('');

  const filas = [
    d.correo ? ['Correo', d.correo] : null,
    d.telefono ? ['Teléfono', d.telefono] : null,
    d.disponibilidad ? ['Disponibilidad', d.disponibilidad] : null,
    d.web ? ['Web', d.web.replace(/^https?:\/\//, '')] : null
  ].filter(Boolean).map(([k, v]) =>
    `<div class="flex items-baseline justify-between gap-4">
       <dt class="shrink-0 text-gold-600/80 font-cinzel text-[11px] uppercase tracking-widest">${k}</dt>
       <dd class="min-w-0 truncate text-right font-medium text-gold-100/90">${esc(v)}</dd>
     </div>`).join('');

  card.innerHTML = `
    <div class="relative grid gap-px overflow-hidden rounded-[1.6rem] border border-gold-600/30 bg-gradient-to-br from-[#161104] via-black to-[#0a0700] shadow-[0_0_60px_-10px_rgba(212,175,55,0.35)] sm:grid-cols-[1.4fr_1fr]">
      ${esquina('tl')}
      ${esquina('tr')}
      ${esquina('bl')}
      ${esquina('br')}

      <div class="min-w-0 p-5 sm:p-9">
        <div class="flex items-center gap-4">
          <div class="relative flex h-16 w-16 shrink-0 items-center justify-center sm:h-20 sm:w-20">
            <span class="absolute inset-0 rounded-full animate-halo-spin" style="background:conic-gradient(from 0deg, transparent, rgba(212,175,55,.9), transparent 35%)"></span>
            <span class="absolute inset-[3px] rounded-full bg-black"></span>
            <img src="logo.png" alt="Kubo — sombrero de mago" class="relative z-10 h-11 w-11 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.6)] sm:h-14 sm:w-14" />
          </div>
          <div class="min-w-0 flex-1">
            <h1 class="truncate text-3xl font-bold leading-tight tracking-wide text-gold-300 font-cinzel sm:text-4xl" style="text-shadow:0 0 18px rgba(233,196,106,.55)">${letras(d.nombre)}</h1>
            <p class="mt-1 text-xs uppercase tracking-[0.2em] text-gold-400/90 font-cinzel sm:text-sm">${esc(d.cargo)}</p>
          </div>
        </div>

        <p class="mt-4 font-signature text-xl leading-snug text-gold-300/90 sm:text-2xl">${esc(d.lema)}</p>

        <nav aria-label="Contacto" class="mt-6 flex items-center gap-2 sm:mt-7 sm:gap-3">${botones}</nav>

        <dl class="mt-6 space-y-2 border-t border-gold-600/25 pt-5 text-sm sm:mt-7">${filas}</dl>

        ${d.whatsapp ? `<div class="relative mt-6">
          <a href="https://wa.me/${d.whatsapp}?text=${encodeURIComponent(d.waReserva || d.waMensaje)}" target="_blank" rel="noopener"
            class="relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 bg-[length:200%_100%] px-4 py-3 text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_25px_-5px_rgba(212,175,55,0.7)] transition hover:animate-shine font-cinzel">
            ${iconos.estrella}<span>Reservar función</span>
          </a>
          ${chispas(7)}
        </div>` : ''}
      </div>

      <aside class="flex min-w-0 flex-col items-center justify-center gap-4 bg-black/40 p-5 text-center sm:p-8">
        <div class="relative rounded-2xl border-2 border-gold-500/70 bg-black p-3 shadow-[0_0_30px_-5px_rgba(212,175,55,0.5)]">
          <span class="absolute -left-1.5 -top-1.5 h-3 w-3 rotate-45 border-l-2 border-t-2 border-gold-400"></span>
          <span class="absolute -right-1.5 -top-1.5 h-3 w-3 -rotate-45 border-r-2 border-t-2 border-gold-400"></span>
          <span class="absolute -left-1.5 -bottom-1.5 h-3 w-3 -rotate-45 border-l-2 border-b-2 border-gold-400"></span>
          <span class="absolute -right-1.5 -bottom-1.5 h-3 w-3 rotate-45 border-r-2 border-b-2 border-gold-400"></span>
          <div class="rounded-xl bg-white p-2">
            <div id="qr" class="h-32 w-32 sm:h-36 sm:w-36" role="img" aria-label="Código QR de ${esc(d.nombre)}"></div>
          </div>
        </div>
        <p class="text-[11px] font-medium uppercase tracking-widest text-gold-500/90 font-cinzel">✦ Escanea y descubre la magia ✦</p>
        <div class="flex w-full max-w-xs flex-col gap-2">
          <div class="relative">
            <button id="btn-vcard" class="w-full rounded-lg bg-gold-400 px-4 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 font-cinzel">Guardar contacto</button>
            ${chispas(5)}
          </div>
          <div class="relative">
            <button id="btn-share" class="w-full rounded-lg border border-gold-500/50 bg-black/40 px-4 py-3 text-sm font-semibold text-gold-300 transition hover:border-gold-300 hover:text-gold-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 font-cinzel">Compartir</button>
            ${chispas(5)}
          </div>
        </div>
      </aside>
    </div>`;

  const qrEl = document.getElementById('qr');
  const urlActual = location.href.split('#')[0];
  const texto = urlActual.startsWith('http') ? urlActual : (d.web || 'https://magokubo.com');
  if (typeof QRCode !== 'undefined') {
    const opciones = (nivel) => ({ text: texto, width: 288, height: 288, colorDark: '#0a0a0a', colorLight: '#FFFFFF', correctLevel: nivel });
    try { new QRCode(qrEl, opciones(QRCode.CorrectLevel.M)); }
    catch (e) {
      try { new QRCode(qrEl, opciones(QRCode.CorrectLevel.L)); }
      catch (e2) { qrEl.innerHTML = '<p class="flex h-full w-full items-center justify-center p-2 text-center text-[11px] text-neutral-500">QR no disponible</p>'; }
    }
  }

  document.getElementById('btn-vcard').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([vcard(d)], { type: 'text/vcard' }));
    a.download = `${d.nombre}.vcf`;
    a.click();
    URL.revokeObjectURL(a.href);
  });

  document.getElementById('btn-share').addEventListener('click', async () => {
    const btn = document.getElementById('btn-share');
    const url = location.href.split('#')[0];
    const data = { title: `${d.nombre} — Mago Ilusionista`, text: d.cargo, url };
    if (navigator.share) { try { await navigator.share(data); } catch { } return; }
    try {
      await navigator.clipboard.writeText(url);
      const original = btn.textContent;
      btn.textContent = '¡Enlace copiado!';
      setTimeout(() => (btn.textContent = original), 1800);
    } catch { }
  });

  const anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();
}

/* ── Telón de apertura ────────────────────────────────────────────── */
function abrirTelon() {
  const izq = document.getElementById('telon-izq');
  const der = document.getElementById('telon-der');
  const luz = document.getElementById('reflector');
  if (!izq || !der) return;
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    izq.classList.add('animate-open-left');
    der.classList.add('animate-open-right');
    if (luz) luz.classList.add('opacity-100');
  }, 450);
  setTimeout(() => {
    izq.remove();
    der.remove();
    document.body.style.overflow = '';
    ráfagaDeChispas();
  }, 1900);
}

/* ── Polvo dorado (canvas de partículas) ─────────────────────────── */
function iniciarParticulas() {
  const canvas = document.getElementById('polvo-magico');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h;
  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const N = window.innerWidth < 640 ? 26 : 46;
  const particulas = Array.from({ length: N }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.6 + 0.4,
    vy: Math.random() * 0.25 + 0.05,
    vx: (Math.random() - 0.5) * 0.15,
    fase: Math.random() * Math.PI * 2
  }));

  let t = 0;
  function loop() {
    t += 0.02;
    ctx.clearRect(0, 0, w, h);
    for (const p of particulas) {
      p.y -= p.vy;
      p.x += p.vx;
      if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
      const brillo = (Math.sin(t + p.fase) + 1) / 2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(233,196,106,${0.15 + brillo * 0.55})`;
      ctx.shadowColor = 'rgba(212,175,55,0.8)';
      ctx.shadowBlur = 4;
      ctx.fill();
    }
    requestAnimationFrame(loop);
  }
  loop();
}

function ráfagaDeChispas() {
  const canvas = document.getElementById('polvo-magico');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = canvas.width / 2, cy = canvas.height * 0.42;
  const chispas = Array.from({ length: 60 }, () => ({
    x: cx, y: cy,
    vx: (Math.random() - 0.5) * 8,
    vy: (Math.random() - 0.5) * 8 - 2,
    vida: 1
  }));
  function anima() {
    chispas.forEach(c => {
      c.x += c.vx; c.y += c.vy; c.vy += 0.08; c.vida -= 0.018;
      if (c.vida > 0) {
        ctx.beginPath();
        ctx.arc(c.x, c.y, 2.2 * c.vida, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,224,140,${c.vida})`;
        ctx.shadowColor = 'rgba(255,215,120,0.9)';
        ctx.shadowBlur = 6;
        ctx.fill();
      }
    });
    if (chispas.some(c => c.vida > 0)) requestAnimationFrame(anima);
  }
  anima();
}

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register(BASE + 'sw.js').catch(() => { }));
}

render();
iniciarParticulas();
abrirTelon();
