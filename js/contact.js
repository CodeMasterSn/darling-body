// =============================================
// DARLING BODY - CONTACT.JS
// Formulaire de contact vers WhatsApp
// =============================================

console.log('📞 Script contact.js chargé avec succès !');

// Numéro WhatsApp
const WHATSAPP_NUMBER = '221774764717';

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Construction du message WhatsApp
    const whatsappMessage = '💌 *NOUVEAU MESSAGE - DARLING BODY*\n\n' +
        '👤 *Nom :* ' + name + '\n' +
        '📧 *Email :* ' + email + '\n' +
        '📞 *Téléphone :* ' + phone + '\n' +
        '📋 *Sujet :* ' + subject + '\n\n' +
        '💬 *Message :*\n' + message;
    
    // Encodage du message pour l'URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Ouverture de WhatsApp
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodedMessage, '_blank');
    
    // Message de confirmation (optionnel)
    alert('Votre message va être envoyé sur WhatsApp !');
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

// Animer les éléments au scroll
document.querySelectorAll('.info-card, .faq-item').forEach((element, index) => {
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

console.log('✓ Darling Body Contact - Formulaire WhatsApp activé');