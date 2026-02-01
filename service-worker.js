const CACHE = "emergency-v2";

const ASSETS = [
    "./",
    "./index.html",
    "./css/styles.css",
    "./js/app.js",
    "./js/tts.js",
    "./assets/img/autism-bg.png",
    "./assets/img/child.jpg",
    "./assets/docs/laudo.pdf",
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
