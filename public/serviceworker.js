const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

// this represents the service worker
const self = this;

// Install Service workers
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Opened Cache");
        return cache.addAll(urlsToCache);
      })
      .catch((e) => console.log("Error", e))
  );
});

// Intercept every fetch request and check for internet connection
// If there is none, return offline.html (page for no internet)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

// Activate service workers
// Delete all caches not in the cacheWhitelist
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
