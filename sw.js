/* Service Worker — Zyncosoft Tarjetas Digitales
   Estrategia "red primero": con internet siempre muestra lo más reciente;
   la caché solo se usa como respaldo cuando no hay conexión. */
const CACHE = 'zyncosoft-tarjetas-v5';

// Recursos locales que precargamos para que las tarjetas funcionen offline.
const ASSETS = [
  '/',
  '/index.html',
  '/julio/',
  '/julio/index.html',
  '/juan/',
  '/juan/index.html',
  '/card.js',
  '/logo.png',
  '/vendor/tailwind.min.js',
  '/vendor/qrcode.min.js',
  '/manifest.webmanifest',
  '/julio/manifest.webmanifest',
  '/juan/manifest.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => Promise.allSettled(ASSETS.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== location.origin) return; // deja pasar CDNs, etc.

  // Red primero: intenta la versión más reciente y guarda copia; si falla
  // (sin conexión), usa la caché. Para navegaciones cae al inicio como último recurso.
  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      })
      .catch(() =>
        caches.match(req).then((cached) =>
          cached || (req.mode === 'navigate' ? caches.match('/index.html') : undefined)
        )
      )
  );
});
