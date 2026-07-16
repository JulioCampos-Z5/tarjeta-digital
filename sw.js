/* Service Worker — Zyncosoft Tarjetas Digitales */
const CACHE = 'zyncosoft-tarjetas-v2';

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
  '/vendor/qrcode.min.js',
  '/manifest.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      // addAll falla si un recurso da 404; los agregamos tolerando fallos.
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

  // Navegaciones: red primero, con respaldo a la caché (buen offline).
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match(req).then((r) => r || caches.match('/index.html')))
    );
    return;
  }

  // Resto (mismo origen): caché primero, luego red y se guarda una copia.
  if (new URL(req.url).origin === location.origin) {
    event.respondWith(
      caches.match(req).then((cached) =>
        cached ||
        fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        }).catch(() => cached)
      )
    );
  }
});
