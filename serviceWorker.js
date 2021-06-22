const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/pwa/",
  "/pwa/index.html",
  "/pwa/css/style.css",
  "/pwa/js/app.js",
  "/pwa/images/coffee.jpg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})