var cachename = 'cache-' + new Date().getTime() + '-1';

function getCacheName(){
    return 'cache-' + new Date().getTime() + '-1';
}

//Install Service Worker
self.addEventListener('install', evt => {
    
    this.skipWaiting();
    evt.waitUntil(
        caches.open(cachename).then(cache => {
            
        })
    );
});

//zxczxc

//Activate Service Worker
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(keys
                .filter(key => key.startsWith('cache-'))
                .filter(key => key !== cachename)
                .map(key => caches.delete(key))
            );
        })
    );
});

//Fetch Service Worker
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(cachename).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                })
            });
        })
    );
});