self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Permite funcionamiento online y usa cache si falla
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});