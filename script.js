document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("messageButton");
    const message = document.getElementById("message");
    const roseEmoji = document.getElementById("roseEmoji");
    const roseContainer = document.getElementById("roseContainer");

    button.addEventListener("click", function() {
        message.classList.toggle("hidden");
        setTimeout(function() {
            message.style.opacity = message.style.opacity === '1' ? '0' : '1';
        }, 10);
    });

    roseEmoji.addEventListener("click", function() {
        createRoseRain();
    });

    function createRoseRain() {
        for (let i = 0; i < 30; i++) {
            const rose = document.createElement("div");
            rose.className = "rose";
            rose.textContent = "🌹";
            rose.style.left = `${Math.random() * 100}vw`;
            rose.style.animationDuration = `${Math.random() * 3 + 2}s`;
            roseContainer.appendChild(rose);
        }

        setTimeout(function() {
            roseContainer.innerHTML = "";
        }, 5000);
    }
});
