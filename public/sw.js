var cacheName = "appV1";

var filesToCache = [
  "/dist/css/adminlte.min.css",
  "/static/js/bundle.js",
  "/plugins/jquery/jquery.min.js",
  "/plugins/bootstrap/js/bootstrap.bundle.min.js",
  "/dist/js/adminlte.js",
  "/manifest.json",
  "/logo192.png",
  "/favicon.ico",
  "/index.html",
  "/",
  "/login",
  "/data/lecturer",
  "/data/thesis",
  "/data/seminar/thesis-proposal",
  "/data/seminar/thesis-result",
  "/data/seminar/thesis-defence",
  "/register/thesis-proposal",
  "/register/seminar",
  "/seminar-schedule/thesis-proposal",
  "/seminar-schedule/thesis-result",
  "/seminar-schedule/thesis-defence",
  "/seminar-validate/thesis-proposal",
  "/seminar-validate/thesis-result",
  "/seminar-validate/thesis-defence",
  "/account/profile",
  "/account/update-password",
];

this.addEventListener("install", function (e) {
  console.log("[demoPWA - ServiceWorker] Install event fired.");
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("[demoPWA - ServiceWorker] Caching app shell...");
      return cache.addAll(filesToCache);
    })
  );
});

this.addEventListener("activate", function (e) {
  console.log("[demoPWA - ServiceWorker] Activate event fired.");
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== cacheName) {
            console.log("[demoPWA - ServiceWorker] Removing old cache...", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return this.clients.claim();
});

this.addEventListener("fetch", function (e) {
  console.log("[demoPWA - ServiceWorker] Fetch event fired.", e.request.url);
  if (!navigator.onLine) {
    e.respondWith(
      caches.match(e.request).then(function (response) {
        if (response) {
          console.log("[demoPWA - ServiceWorker] Retrieving from cache...");
          return response;
        }
        console.log("[demoPWA - ServiceWorker] Retrieving from URL...");
        return fetch(e.request).catch(function (e) {
          //you might want to do more error checking here too,
          //eg, check what e is returning..
          console.log(
            "You appear to be offline, please try again when back online"
          );
        });
      })
    );
  }
});
