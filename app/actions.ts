'use server';

import webpush from 'web-push';

// Configure web-push with VAPID details
const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;
const vapidEmail = process.env.VAPID_EMAIL || 'mailto:your-email@example.com';

if (vapidPublicKey && vapidPrivateKey) {
  webpush.setVapidDetails(
    vapidEmail,
    vapidPublicKey,
    vapidPrivateKey
  );
}

// In-memory storage for subscriptions (replace with database in production)
const subscriptions = new Map<string, webpush.PushSubscription>();

export async function subscribeUser(subscription: webpush.PushSubscription) {
  try {
    if (!vapidPublicKey || !vapidPrivateKey) {
      throw new Error('VAPID keys are not configured');
    }

    // Store the subscription (in production, save to database)
    const key = subscription.endpoint;
    subscriptions.set(key, subscription);

    console.log('User subscribed:', subscription.endpoint);

    return {
      success: true,
      message: 'Successfully subscribed to notifications'
    };
  } catch (error) {
    console.error('Error subscribing user:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to subscribe'
    };
  }
}

export async function unsubscribeUser(endpoint: string) {
  try {
    subscriptions.delete(endpoint);
    console.log('User unsubscribed:', endpoint);

    return {
      success: true,
      message: 'Successfully unsubscribed from notifications'
    };
  } catch (error) {
    console.error('Error unsubscribing user:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to unsubscribe'
    };
  }
}

export async function sendNotification(
  endpoint: string,
  title: string,
  body: string,
  options?: {
    icon?: string;
    url?: string;
    tag?: string;
    requireInteraction?: boolean;
    data?: Record<string, unknown>;
  }
) {
  try {
    if (!vapidPublicKey || !vapidPrivateKey) {
      throw new Error('VAPID keys are not configured');
    }

    const subscription = subscriptions.get(endpoint);
    if (!subscription) {
      throw new Error('Subscription not found');
    }

    const payload = JSON.stringify({
      title,
      body,
      icon: options?.icon || '/pills-bottle256.png',
      url: options?.url || '/',
      tag: options?.tag,
      requireInteraction: options?.requireInteraction,
      data: options?.data
    });

    await webpush.sendNotification(subscription, payload);

    console.log('Notification sent successfully');

    return {
      success: true,
      message: 'Notification sent successfully'
    };
  } catch (error) {
    console.error('Error sending notification:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send notification'
    };
  }
}

export async function sendNotificationToAll(
  title: string,
  body: string,
  options?: {
    icon?: string;
    url?: string;
    tag?: string;
    requireInteraction?: boolean;
    data?: Record<string, unknown>;
  }
) {
  try {
    if (!vapidPublicKey || !vapidPrivateKey) {
      throw new Error('VAPID keys are not configured');
    }

    const payload = JSON.stringify({
      title,
      body,
      icon: options?.icon || '/pills-bottle256.png',
      url: options?.url || '/',
      tag: options?.tag,
      requireInteraction: options?.requireInteraction,
      data: options?.data
    });

    const sendPromises = Array.from(subscriptions.values()).map(subscription =>
      webpush.sendNotification(subscription, payload).catch(error => {
        console.error('Failed to send to subscription:', error);
        return null;
      })
    );

    await Promise.all(sendPromises);

    console.log(`Sent notification to ${subscriptions.size} subscribers`);

    return {
      success: true,
      message: `Notification sent to ${subscriptions.size} subscribers`
    };
  } catch (error) {
    console.error('Error sending notifications:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send notifications'
    };
  }
}

export async function getSubscriptionCount() {
  return subscriptions.size;
}
