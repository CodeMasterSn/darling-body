// === RENDRE LES CARDS PRODUITS CLIQUABLES ===
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne toutes les cards produits
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(function(card) {
        // Trouve le lien "Voir le produit" ou le bouton dans la card
        const link = card.querySelector('a[href*="produit-detail"]') || 
                     card.querySelector('.btn-primary[href]') ||
                     card.querySelector('.btn-product[href]') ||
                     card.querySelector('a.product-link');
        
        if (link) {
            // Rend toute la card cliquable
            card.style.cursor = 'pointer';
            
            // Au clic sur la card, navigue vers le lien
            card.addEventListener('click', function(e) {
                // Évite le double clic si on clique directement sur le lien/bouton
                if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON' && !e.target.closest('a') && !e.target.closest('button')) {
                    window.location.href = link.href;
                }
            });
            
            // Effet hover sur toute la card (desktop seulement)
            if (window.innerWidth > 767) {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            }
        }
    });
});

