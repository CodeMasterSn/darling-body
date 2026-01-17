// === FIX IMAGES LOADING BUG ===
// Force le recalcul du layout après le chargement des images

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne toutes les images produits
    const productImages = document.querySelectorAll('.product-image img, .product-image-wrapper img');
    
    // Si aucune image trouvée, on sort
    if (productImages.length === 0) {
        return;
    }
    
    // Compte le nombre d'images chargées
    let imagesLoaded = 0;
    const totalImages = productImages.length;
    
    // Fonction qui se déclenche quand une image est chargée
    function imageLoaded() {
        imagesLoaded++;
        
        // Quand toutes les images sont chargées
        if (imagesLoaded === totalImages) {
            // Force un reflow pour recalculer les positions
            setTimeout(function() {
                productImages.forEach(function(img) {
                    // Force le navigateur à recalculer
                    img.style.display = 'none';
                    void img.offsetHeight; // Trigger reflow
                    img.style.display = '';
                });
            }, 100); // Petit délai de 100ms
        }
    }
    
    // Attache l'événement load à chaque image
    productImages.forEach(function(img) {
        if (img.complete) {
            // Image déjà chargée (cache)
            imageLoaded();
        } else {
            // Image pas encore chargée
            img.addEventListener('load', imageLoaded);
            img.addEventListener('error', imageLoaded); // Gère aussi les erreurs
        }
    });
    
    // Fallback : Force le recalcul après 2 secondes si pas encore fait
    setTimeout(function() {
        productImages.forEach(function(img) {
            img.style.display = 'none';
            void img.offsetHeight;
            img.style.display = '';
        });
    }, 2000);
});

