function loadRandomDogImage() {
   // FETCH
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogImage').src = data.message;
        })
        .catch(error => console.error('Erreur', error));
}

window.onload = loadRandomDogImage;

    // Fonction pour recharger une nouvelle image de chien
    function loadNewImg() {
        loadRandomDogImage();
    }