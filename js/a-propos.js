// =============================================
// DARLING BODY - A-PROPOS.JS
// Script pour la page À Propos
// =============================================

console.log('🎨 Script a-propos.js chargé avec succès !');

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animer les sections au scroll
document.querySelectorAll('.transformation-card, .value-card').forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = 'all 0.6s ease ' + (index * 0.1) + 's';
    observer.observe(element);
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('✓ Darling Body À Propos - Animations activées');