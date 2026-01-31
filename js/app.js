const btnLocation = document.getElementById("sendLocation");

btnLocation.addEventListener("click", () => {

    if (!navigator.geolocation) {
        alert("Geolocalização não suportada.");
        return;
    }

    btnLocation.textContent = "Obtendo localização...";

    navigator.geolocation.getCurrentPosition(
        (pos) => {

            const { latitude, longitude } = pos.coords;

            const mapsLink = `https://maps.google.com/?q=${latitude},${longitude}`;

            const message = encodeURIComponent(
                `Olá! Estou compartilhando a localização atual do Lorenzo:\n${mapsLink}`
            );

            const phone = "5582999036836"; // 👈 seu número (sem +, sem espaços)

            const whatsappURL = `https://wa.me/${phone}?text=${message}`;

            window.location.href = whatsappURL;



            btnLocation.textContent = "📍 Enviar localização";
        },

        () => {
            alert("Não foi possível obter a localização.");
            btnLocation.textContent = "📍 Enviar localização";
        },

        {
            enableHighAccuracy: true,
            timeout: 10000
        }
    );
});
