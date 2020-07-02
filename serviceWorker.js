
const personalCounter = "personalCounter-v1"
// Assets stored in the cache.
const assets = [
  "/customer-counter/",
  "/customer-counter/index.html",
  "https://unpkg.com/material-components-web@v4.0.0/dist/material-components-web.min.js",
	"https://fonts.googleapis.com/icon?family=Material+Icons","https://unpkg.com/material-components-web@v4.0.0/dist/material-components-web.min.css",
	"https://fonts.googleapis.com/css2?family=Roboto&display=swap",
	"/customer-counter/js-app.js",
	"/customer-counter/manifest.json",
	"/customer-counter/images/BPICON.png"
]

// Install event gets triggered as soon as the worker exectutes, and is called only oncer per SW.
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
	  // When the cache API is ready, we can run the open() method and create the cache.
    caches.open(personalCounter).then(cache => {
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
