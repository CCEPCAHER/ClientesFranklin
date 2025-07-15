// Nombre y versión del caché
const CACHE_NAME = 'rutas-app-cache-v1';

// Archivos que se guardarán en el caché para que la app funcione sin conexión
const archivosACachear = [
  '/',
  'index.php',
  'login.php',
  'registro.php',
  'app.html',
  'styles.css',
  'app.js',
  'images/icons/icon-192x192.png',
  'images/icons/icon-512x512.png'
];

// Evento "install": se dispara cuando el service worker se instala.
// Aquí guardamos los archivos principales en el caché.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caché abierto');
        return cache.addAll(archivosACachear);
      })
  );
});

// Evento "fetch": se dispara cada vez que la app pide un recurso (una imagen, un css, etc.)
// Intentamos servir desde el caché para que funcione sin conexión.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si el recurso está en el caché, lo devolvemos.
        if (response) {
          return response;
        }
        // Si no, lo pedimos a la red y lo devolvemos.
        return fetch(event.request);
      })
  );
});
