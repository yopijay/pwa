$(window).on('load', function() {

  if('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {

      if(registrations == 0) {
        // console.log('No registered service worker yet!');
        navigator.serviceWorker.register('service-worker.js')
            .then((reg) => console.log('Service worker successfully registered!'))
            .catch((err) => console.log('Service worker registration failed!', err));
      }
      else {
        // console.log('Already have a service worker!');
        for (let registration of registrations) {
          registration.unregister();
    
          if(registration.unregister()) {
            navigator.serviceWorker.register('service-worker.js')
              .then((reg) => console.log('Service worker successfully registered!'))
              .catch((err) => console.log('Service worker registration failed!', err));
          }
        }
      }
    });
  }
});