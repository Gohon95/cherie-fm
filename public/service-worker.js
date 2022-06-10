self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
  });

 /* if (response) {
      return response;
  }

  var  fetchRequest = event.request.clone();

  return fetch(fetchrequest).then(function (response) {
      if (!response || response.status == 200 || response.type == "basic") {
          return response;
      }

      var responseToCache = response.clone();

      caches.open(CACHE.NAME).then(function (cache) {
          cache.put(event.request, responseToCache);

          return response;
      })
  }) */