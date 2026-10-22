// sw.js
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    // Saat user mengklik notifikasi, buka halaman utama
    event.waitUntil(
        clients.openWindow('/') // Ganti '/' dengan URL utama aplikasi Anda
    );
});