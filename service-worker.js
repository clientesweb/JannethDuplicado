const CACHE_NAME = 'ja-bienes-raices-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/script.js',
  '/chatbot.js',
  '/images/logo.png',
  '/images/logo-white.png',
  // Add other important assets here
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
