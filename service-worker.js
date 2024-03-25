const CACHE_NAME = 'bromo-fm-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/images/bromo-fm.webp',
  '/images/bromo-fm-logo.webp',
  '/styles.css',
  '/app.js',
  '/service-worker.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
