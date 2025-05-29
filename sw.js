// Called when the Service Worker is installed
self.addEventListener('install', () => {
  // Skip waiting so the new SW activates immediately
  self.skipWaiting();
});

// Called when the Service Worker is activated
self.addEventListener('activate', () => {
  // Claim control of all clients immediately
  self.clients.claim();
});

// Listen for 'sync' events registered from the page
self.addEventListener('sync', event => {
  // Check for a specific tag name (set from the page)
  if (event.tag === 'mySyncTag') {
    // Wait until the background task completes
    event.waitUntil(doBackgroundTask());
  }
});

// Simulated background task
async function doBackgroundTask() {
  console.log('Background sync triggered!');

  // Get all clients (open tabs/pages controlled by this SW)
  const clientsList = await self.clients.matchAll();

  // Send a message to each client
  for (const client of clientsList) {
    client.postMessage("Background Sync completed!");
  }
}
