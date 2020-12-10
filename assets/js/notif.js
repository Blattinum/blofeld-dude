// NOTIFICATIONS

console.log("%c💢 hello from notif.js 💢", "color: hotpink; font-family:sans-serif; font-size: 32px");

Notification.requestPermission(function (status) {
    console.log('Notification permission status:', status);
    if (status === "granted") {
        console.log("%cThank you for subscribing! 🧡", "color: orangered; font-family:sans-serif; font-style:oblique; font-size: 32px");
    };
});

// BEGINNING OF FUNCTIONS

function displayNotification() {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
            var options = {
                body: '💥💦💨👁‍🗨🎃🦄🦉🐠',
                icon: '../../android-chrome-512x512.png',
                vibrate: [100, 50, 100],
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: 1
                }
            };
            reg.showNotification('Hello world!', options);
        });
    }
}