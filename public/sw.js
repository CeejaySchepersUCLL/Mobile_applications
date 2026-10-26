self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activatte', (event) => event.awaitUntil(clients.claim()));
//TODO: add fetch event listener to cache request and serve cached response