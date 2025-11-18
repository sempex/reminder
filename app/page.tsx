'use client';

import { useEffect, useState } from 'react';
import { subscribeUser, unsubscribeUser, sendNotificationToAll } from './actions';

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function Home() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default');
  const [message, setMessage] = useState('');
  const [testTitle, setTestTitle] = useState('Test Reminder');
  const [testBody, setTestBody] = useState('This is a test notification!');

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true);
      setNotificationPermission(Notification.permission);
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none',
      });

      console.log('Service Worker registered:', registration);

      // Check for existing subscription
      const existingSubscription = await registration.pushManager.getSubscription();
      if (existingSubscription) {
        setSubscription(existingSubscription);
        setIsSubscribed(true);
      }
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      setMessage('Failed to register service worker');
    }
  }

  async function requestNotificationPermission() {
    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);

      if (permission === 'granted') {
        setMessage('Notification permission granted!');
        await subscribeToPushNotifications();
      } else if (permission === 'denied') {
        setMessage('Notification permission denied');
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      setMessage('Failed to request permission');
    }
  }

  async function subscribeToPushNotifications() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;

      if (!publicKey) {
        throw new Error('VAPID public key not found');
      }

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
      });

      setSubscription(subscription);
      setIsSubscribed(true);

      // Send subscription to server
      const result = await subscribeUser(subscription.toJSON() as any);

      if (result.success) {
        setMessage('Successfully subscribed to notifications!');
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.error('Error subscribing to push notifications:', error);
      setMessage('Failed to subscribe to notifications');
    }
  }

  async function unsubscribeFromPushNotifications() {
    try {
      if (!subscription) {
        setMessage('No active subscription found');
        return;
      }

      await subscription.unsubscribe();

      // Notify server
      await unsubscribeUser(subscription.endpoint);

      setSubscription(null);
      setIsSubscribed(false);
      setMessage('Successfully unsubscribed from notifications');
    } catch (error) {
      console.error('Error unsubscribing:', error);
      setMessage('Failed to unsubscribe');
    }
  }

  async function sendTestNotification() {
    try {
      const result = await sendNotificationToAll(testTitle, testBody, {
        icon: '/pills-bottle256.png',
        url: '/',
        tag: 'test-notification',
        requireInteraction: false,
      });

      setMessage(result.message);
    } catch (error) {
      console.error('Error sending test notification:', error);
      setMessage('Failed to send test notification');
    }
  }

  if (!isSupported) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Not Supported</h1>
          <p className="text-gray-600">
            Push notifications are not supported in your browser.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Push Notifications
          </h1>
          <p className="text-gray-600">
            Manage your notification preferences
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-700">Status:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                isSubscribed
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {isSubscribed ? 'Subscribed' : 'Not Subscribed'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Permission:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                notificationPermission === 'granted'
                  ? 'bg-green-100 text-green-800'
                  : notificationPermission === 'denied'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {notificationPermission}
              </span>
            </div>
          </div>

          {notificationPermission === 'default' && (
            <button
              onClick={requestNotificationPermission}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Enable Notifications
            </button>
          )}

          {notificationPermission === 'granted' && !isSubscribed && (
            <button
              onClick={subscribeToPushNotifications}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Subscribe to Push Notifications
            </button>
          )}

          {isSubscribed && (
            <>
              <button
                onClick={unsubscribeFromPushNotifications}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Unsubscribe
              </button>

              <div className="border-t pt-4 mt-4">
                <h3 className="font-semibold text-gray-700 mb-3">
                  Send Test Notification
                </h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Notification title"
                    value={testTitle}
                    onChange={(e) => setTestTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Notification body"
                    value={testBody}
                    onChange={(e) => setTestBody(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={sendTestNotification}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Send Test
                  </button>
                </div>
              </div>
            </>
          )}

          {message && (
            <div className={`p-4 rounded-lg ${
              message.includes('success') || message.includes('Successfully')
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-blue-50 text-blue-800 border border-blue-200'
            }`}>
              {message}
            </div>
          )}

          {notificationPermission === 'denied' && (
            <div className="p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
              <p className="font-semibold mb-1">Permission Denied</p>
              <p className="text-sm">
                Please enable notifications in your browser settings to use this feature.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
