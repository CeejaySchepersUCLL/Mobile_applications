self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.awaitUntil(clients.claim()));
//TODO: add fetch event listener to cache request and serve cached response