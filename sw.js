// Minimal service worker — its only job is to exist with a fetch handler,
// which is what Chrome/Android requires before it will offer "Add to Home Screen."
// This is a passthrough only; it does not cache anything for offline use yet.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
