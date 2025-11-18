// Service Worker for Push Notifications
const CACHE_NAME = 'reminder-pwa-v1';

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  event.waitUntil(clients.claim());
});

// Push event - handle incoming push notifications
self.addEventListener('push', function (event) {
  console.log('Push notification received', event);

  if (event.data) {
    try {
      const data = event.data.json();
      const options = {
        body: data.body || 'You have a new notification',
        icon: data.icon || '/pills-bottle256.png',
        badge: '/pills-bottle128.png',
        vibrate: [200, 100, 200],
        tag: data.tag || 'reminder-notification',
        requireInteraction: data.requireInteraction || false,
        data: {
          url: data.url || '/',
          dateOfArrival: Date.now(),
          ...data.data
        },
        actions: data.actions || []
      };

      event.waitUntil(
        self.registration.showNotification(data.title || 'Reminder', options)
      );
    } catch (error) {
      console.error('Error parsing push notification:', error);
    }
  }
});

// Notification click event
self.addEventListener('notificationclick', function (event) {
  console.log('Notification click received.');
  event.notification.close();

  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((windowClients) => {
        // Check if there's already a window open
        for (let i = 0; i < windowClients.length; i++) {
          const client = windowClients[i];
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        // If no window is open, open a new one
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Handle notification close event
self.addEventListener('notificationclose', function (event) {
  console.log('Notification was closed', event);
});
