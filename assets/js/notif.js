// NOTIFICATIONS

console.log("%c💢 hello from notif.js 💢", "color: hotpink; font-family:sans-serif; font-size: 32px");

Notification.requestPermission(function (status) {
    console.log('Notification permission status:', status);
});

function displayNotification() {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
            reg.showNotification('Hello world!');
        });
    }
}