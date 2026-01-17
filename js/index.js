// === HERO SLIDESHOW AUTOMATIQUE ===
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    
    // Vérifie qu'il y a des slides
    if (slides.length === 0) {
        return;
    }
    
    let currentSlide = 0;
    
    // Fonction pour changer de slide
    function changeSlide() {
        // Retire la classe active de l'image actuelle
        slides[currentSlide].classList.remove('active');
        
        // Passe à la slide suivante (retour à 0 après la dernière)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Ajoute la classe active à la nouvelle image
        slides[currentSlide].classList.add('active');
    }
    
    // Change d'image toutes les 7 secondes (7000ms)
    setInterval(changeSlide, 7000);
    
    console.log('✓ Hero Slideshow activé - ' + slides.length + ' images');
});

