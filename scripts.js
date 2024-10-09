document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const background = document.querySelector(".background-animation");

    const movementX = (x / window.innerWidth) * 10 - 5; // Ajustement du mouvement
    const movementY = (y / window.innerHeight) * 10 - 5; // Ajustement du mouvement

    background.style.backgroundPosition = `${movementX}px ${movementY}px`;
});
