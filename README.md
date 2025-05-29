# pwa_background_sync_test
This PWA example demonstrates how to use the Background Sync API to defer tasks until stable connectivity is available, allowing a web app to register a sync event, perform background operations in a service worker, and notify the user upon completion.

# Test scenario
1. Install PWA
2. Open app, wait until service worker is ready
3. Disable network
4. Tap button to reg.sync.register("test-sync"). Important: Register the sync event while the app is still running (even offline).
5. Moves app to background and swipe away (kill app) from recent apps.
6. Turn network back ON. OS detects connection restored and wakes the service worker.
7. Background sync may not be instant, but it will fire soon after connectivity returns.
8. Browser show a notification.