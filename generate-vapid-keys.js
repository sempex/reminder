const webpush = require('web-push');

const vapidKeys = webpush.generateVAPIDKeys();

console.log('Generated VAPID Keys:');
console.log('===================');
console.log('\nPublic Key:');
console.log(vapidKeys.publicKey);
console.log('\nPrivate Key:');
console.log(vapidKeys.privateKey);
console.log('\n\nAdd these to your .env file:');
console.log('NEXT_PUBLIC_VAPID_PUBLIC_KEY=' + vapidKeys.publicKey);
console.log('VAPID_PRIVATE_KEY=' + vapidKeys.privateKey);
