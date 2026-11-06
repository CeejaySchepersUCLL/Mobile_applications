// No offline caching yet. This worker only makes the app installable.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
//TODO: add fetch event listener to cache request and serve cached response