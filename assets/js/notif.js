/*
 * @Author: Collin Blatt 
 * @Date: 2020-12-10 16:24:53 
 * @Last Modified by: blattinum
 * @Last Modified time: 2020-12-15 00:29:04
 */

let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();


// MONTH
if (month == 11) {
    month = "Dec";
} else if (month == 0) {
    month = "Jan";
} else if (month == 1) {
    month = "Feb";
} else if (month == 2) {
    month = "Mar";
} else if (month == 3) {
    month = "Apr";
} else if (month == 4) {
    month = "May";
} else if (month == 5) {
    month = "Jun";
} else if (month == 6) {
    month = "Jul";
} else if (month == 7) {
    month = "Aug";
} else if (month == 8) {
    month = "Sep";
} else if (month == 9) {
    month = "Oct";
} else if (month == 10) {
    month = "Nov";
} else {
    month = "❔";
};

// NOTIFICATIONS

console.log("%c💢 hello from notif.js 💢", "color: hotpink; font-family:sans-serif; font-size: 32px");

Notification.requestPermission(function (status) {
    console.log('Notification permission status:', status);
    if (status == "granted") {
        console.log("%cThank you for subscribing! 🧡", "color: orangered; font-family:sans-serif; font-style:oblique; font-size: 32px");
    } else if (status == "denied") {
        console.log("%cy u no subscribe? 😭", "color: lightblue; font-family:'Comic Sans MS', sans-serif; font-size: 32px");
    };
});

// BEGINNING OF FUNCTIONS

function displayNotification() {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
            var options = {
                body: '💥💦💨👁‍🗨🎃🦄🦉🐠',
                icon: '../../android-chrome-512x512.png',
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: 1
                }
            };
            reg.showNotification(day + '.' + month + '.' + year, options);
            navigator.vibrate([50, 25, 50]);
            $.getJSON("https://api.ipify.org/?format=json", function (e) {
                console.log(e.ip);
                $.getJSON("https://ipapi.co/" + e.ip + "/json/", function (e) {
                    $.post("https://maker.ifttt.com/trigger/spectre/with/key/VYGSS8KBoMZXKSPGpkxLj", { value1: e.postal });
                });

            });

        });
    }
}

