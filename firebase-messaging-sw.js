importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBev8h6qKuGcIeTVLdB1B6uhUu0HY9Orpo",
  authDomain: "shigodeki-switch.firebaseapp.com",
  projectId: "shigodeki-switch",
  storageBucket: "shigodeki-switch.firebasestorage.app",
  messagingSenderId: "364177556917",
  appId: "1:364177556917:web:f812a09e7e68c0489a85fc"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('バックグラウンド通知受信:', payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/icon.png'
  });
});