document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("messageButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function() {
        message.classList.toggle("hidden");
        setTimeout(function() {
            message.style.opacity = message.style.opacity === '1' ? '0' : '1';
        }, 10);
    });
});
