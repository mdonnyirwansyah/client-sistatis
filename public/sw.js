let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
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
        "/data/thesis",
        "/data/seminar/thesis-proposal",
        "/seminar-register/thesis-proposal",
        "/seminar-schedule/thesis-proposal",
        "/seminar-validate/thesis-proposal",
        "/account/profile",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }

        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
