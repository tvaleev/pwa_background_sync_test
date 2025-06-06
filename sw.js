self.addEventListener('install', event => {
  self.skipWaiting();
  console.log('[SW] Installed');
});

self.addEventListener('activate', event => {
  console.log('[SW] Activated');
});

self.addEventListener('sync', event => {
  if (event.tag === 'test-sync') {
    console.log('[SW] Sync event triggered');
    //event.waitUntil(
    //  self.registration.showNotification('✅ Background Sync Fired!', {
    //    body: 'Sync completed successfully!',
    //    icon: 'icon-512.png'
    //  })
    //);
  }
});
