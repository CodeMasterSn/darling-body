// === MENU BURGER ===
document.addEventListener('DOMContentLoaded', function() {
    // Détecter la structure du header (navbar ou nav)
    const navbar = document.querySelector('.navbar .container') || document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links') || document.querySelector('.nav-menu');
    
    if (!navbar || !navLinks) {
        return;
    }
    
    if (!document.querySelector('.menu-toggle')) {
        // Créer le bouton burger
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.setAttribute('aria-label', 'Toggle menu');
        menuToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        // Créer l'overlay
        const menuOverlay = document.createElement('div');
        menuOverlay.className = 'menu-overlay';
        
        // Ajouter au DOM
        navbar.appendChild(menuToggle);
        document.body.appendChild(menuOverlay);
        
        // Déplacer le bouton "Commander" dans le menu mobile
        const commanderBtn = document.querySelector('.navbar .btn-primary') || document.querySelector('.nav .btn-primary');
        if (commanderBtn && window.innerWidth < 1024) {
            // Vérifier si le bouton n'est pas déjà dans le menu
            if (!navLinks.querySelector('.btn-primary')) {
                const clonedBtn = commanderBtn.cloneNode(true);
                navLinks.appendChild(clonedBtn);
            }
        }
        
        // Toggle menu
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
        
        // Fermer le menu en cliquant sur l'overlay
        menuOverlay.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Fermer le menu en cliquant sur un lien
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    console.log('✓ Menu Burger activé');
});

