// A script runs in the background and can intercept & handle network requests. manage the cache, or send push notifications.

const bigProject = "bigProject-v1"
// Assets stored in the cache.
const assets = [
  "/it202-big-project/",
  "/it202-big-project/index.html",
  "/it202-big-project/css-style.css",
  "https://unpkg.com/material-components-web@v4.0.0/dist/material-components-web.min.js",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
	"/it202-big-project/js-app.js",
	"/it202-big-project/manifest.json",
	"/it202-big-project/images/BPICON.png"
]

// Self refers to the service worker. Enables user to listen to life cycle events and do something in return.
// Install event gets triggered as soon as the worker exectutes, and is called only oncer per SW.
// 
// Because caching something on the browser takes time, waitUntil() is used.
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
	  // When the cache API is ready, we can run the open() method and create the cache.
    caches.open(bigProject).then(cache => {
		console.log("Cache opened.");
		// The promise that is returned is helpful for storing assets.
      cache.addAll(assets)
    })
  )
})

// The accomplishment is that the service worker will handle the request and fetch the cache if we are offline.
// 
// 
// Fetch the cache.
// 
self.addEventListener("fetch", fetchEvent => {
	// respondWith prevents browser's default response.
	// Returns a promise.
  fetchEvent.respondWith(
	  //fetchEvent.request = array of assets.
	  // Checking if whatever's in the cache matches the request.
    caches.match(fetchEvent.request).then(res => {
		// Return the result if it exists or not.
      return (res || fetch(fetchEvent.request))
    })
  )
})

// this all makes the app available offline.