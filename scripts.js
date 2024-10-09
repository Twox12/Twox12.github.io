document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const background = document.querySelector(".background-animation");

    const movementX = (x / window.innerWidth) * 10 - 5; // Ajustement du mouvement
    const movementY = (y / window.innerHeight) * 10 - 5; // Ajustement du mouvement

    background.style.backgroundPosition = `${movementX}px ${movementY}px`;
});

function downloadCyberSim() {
    // Lien relatif au fichier dans le dossier 'downloads'
    const link = document.createElement('a');
    link.href = './downloads/CyberSim.zip'; // Chemin relatif au fichier
    link.download = 'CyberSim.zip'; // Nom du fichier téléchargé
    link.click();
}
