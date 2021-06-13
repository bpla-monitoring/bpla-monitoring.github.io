'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","index.css",
"prognoz.html"


]);

toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/icons/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
