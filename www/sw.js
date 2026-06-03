// sw.js — offline caching for the web/PWA build.
// Capacitor serves files locally and ignores this, so it's safe everywhere.
// Bump CACHE when you change any cached file.
const CACHE = "hidayah-v15";

const CORE = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./css/fonts.css",
  "./css/fonts/amiri-400-arabic.woff2",
  "./css/fonts/amiri-400-latin-ext.woff2",
  "./css/fonts/amiri-400-latin.woff2",
  "./css/fonts/amiri-700-arabic.woff2",
  "./css/fonts/amiri-700-latin-ext.woff2",
  "./css/fonts/amiri-700-latin.woff2",
  "./css/fonts/cormorant-garamond-400i-latin-ext.woff2",
  "./css/fonts/cormorant-garamond-400i-latin.woff2",
  "./css/fonts/cormorant-garamond-400-latin-ext.woff2",
  "./css/fonts/cormorant-garamond-400-latin.woff2",
  "./css/fonts/cormorant-garamond-500-latin-ext.woff2",
  "./css/fonts/cormorant-garamond-500-latin.woff2",
  "./css/fonts/cormorant-garamond-600-latin-ext.woff2",
  "./css/fonts/cormorant-garamond-600-latin.woff2",
  "./css/fonts/spectral-300-latin-ext.woff2",
  "./css/fonts/spectral-300-latin.woff2",
  "./css/fonts/spectral-400-latin-ext.woff2",
  "./css/fonts/spectral-400-latin.woff2",
  "./css/fonts/spectral-500-latin-ext.woff2",
  "./css/fonts/spectral-500-latin.woff2",
  "./css/fonts/spectral-600-latin-ext.woff2",
  "./css/fonts/spectral-600-latin.woff2",
  "./js/app.js",
  "./js/content.js",
  "./manifest.webmanifest",
  "./assets/figures/takbir.png",
  "./assets/figures/qiyam.png",
  "./assets/figures/ruku.png",
  "./assets/figures/itidal.png",
  "./assets/figures/sujud.png",
  "./assets/figures/jalsa.png",
  "./assets/figures/sujud2.png",
  "./assets/figures/stand.png",
  "./assets/figures/tashahhud.png",
  "./assets/figures/final.png",
  "./assets/figures/salam_r.png",
  "./assets/figures/salam_l.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const { request } = e;
  if (request.method !== "GET") return;
  // cache-first for our own assets; network fallback for fonts/CDN
  e.respondWith(
    caches.match(request).then((hit) => {
      if (hit) return hit;
      return fetch(request).then((res) => {
        // opportunistically cache same-origin successes (e.g. google fonts CSS)
        const copy = res.clone();
        if (res.ok && request.url.startsWith(self.location.origin)) {
          caches.open(CACHE).then((c) => c.put(request, copy));
        }
        return res;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
