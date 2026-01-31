// 📍 enviar localização
document.getElementById("sendLocation").addEventListener("click", () => {
    if (!navigator.geolocation) return alert("Geolocalização não suportada");

    navigator.geolocation.getCurrentPosition(pos => {
        const link = `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;
        window.open(link, "_blank");
    });
});


// 🔌 service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}
