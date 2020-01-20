$(window).on('load', function() {
  //  if(!checkState())
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then((reg) => console.log('service worker registered!'))
            .catch((err) => console.log('service worker not registered!', err));
    }



    // if('serviceWorker' in navigator) {
    //     navigator.serviceWorker.getRegistrations(function(registrations) {
    //         for(let registration of registrations) {
    //             registration.unregister().then(function() {
    //                 navigator.serviceWorker.register('service-worker.js')
    //                     .then((reg) => console.log('Service worker registered!'))
    //                     .catch((err) => console.log('Service worker registration failed!', err));
    //             });
    //         }
    //     }).catch(function(err) {
    //         console.log('Service worker registration failed: ' . err);
    //     });
    // }
});