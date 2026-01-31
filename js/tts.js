document.getElementById("speakBtn").addEventListener("click", () => {
    const msg = new SpeechSynthesisUtterance(
        "Olá. Eu sou autista. Por favor, ligue para minha mãe."
    );

    msg.lang = "pt-BR";
    speechSynthesis.speak(msg);
});
