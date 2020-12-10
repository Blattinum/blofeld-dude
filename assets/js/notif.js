// NOTIFICATIONS

console.log("%c💢 hello from notif.js 💢", "color: hotpink; font-family:sans-serif; font-size: 32px");

Notification.requestPermission(function (status) {
    console.log('Notification permission status:', status);
});