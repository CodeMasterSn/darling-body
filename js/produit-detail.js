// =============================================
// DARLING BODY - PRODUIT-DETAIL.JS
// Gestion dynamique des produits + formulaire WhatsApp
// =============================================

// ⚠️ IMPORTANT: Remplacer ce numéro par le vrai numéro WhatsApp
const WHATSAPP_NUMBER = '221774764717';

// Base de données des produits
const productsData = {
    'booster-metabolisme': {
        name: 'Booster Métabolisme',
        tagline: 'Énergie & Légèreté',
        price: 15000,
        format: '60 ml - Cure 30 jours',
        badge: 'Bestseller',
        rating: '47 avis',
        shortDescription: 'Brûleur de graisses liquide ultra-concentré qui active le métabolisme, réduit les ballonnements et favorise un ventre plat naturellement.',
        fullDescription: "<p>Le Booster de Métabolisme Darling Body associe 3 actifs puissants pour une action complète :</p><p><strong>Garcinia Cambogia (60% HCA)</strong> : brûleur de graisse reconnu, réduit l'appétit et bloque le stockage des graisses.</p><p><strong>Mangue Africaine</strong> : coupe-faim naturel qui régule les sensations de faim et favorise l'équilibre du métabolisme lipidique.</p><p><strong>Extrait de Framboise</strong> : apporte des antioxydants et un goût agréable pour une prise quotidienne facile.</p><p>Sa formule liquide concentrée garantit une assimilation optimale et des résultats rapides, sans frustration ni effet secondaire.</p>",
        benefits: [
            'Brûleur de graisse puissant',
            'Coupe-faim naturel',
            'Action ventre plat et digestion améliorée',
            '100% Naturel, Bio & Végan',
            'Sans sucre ajouté',
            'Sans conservateurs agressifs',
            'Fabrication avec soin et amour',
            'Résultats rapides et visibles'
        ],
        usage: "<p><strong>Mode d'emploi :</strong></p><p>Agiter avant emploi. Prendre 2 pressions (2 ml) chaque matin directement ou mélangé à une boisson chaude, un smoothie ou un jus naturel.</p><p><strong>Durée :</strong> Cure de 30 jours recommandée pour des résultats optimaux.</p>",
        precautions: "<p>Déconseillé aux enfants, femmes enceintes ou allaitantes sans avis médical. Ne pas dépasser la dose journalière recommandée. Ce produit ne se substitue pas à une alimentation variée et équilibrée.</p>",
        ingredients: "<p><strong>Composition :</strong></p><p>Eau purifiée, Glycérine végétale, Extrait de Garcinia Cambogia (60% HCA), Extrait de Mangue Africaine, Extrait de Framboise, Arômes naturels, Acide citrique, Potassium sorbate.</p>",
        images: ['fond-blanc/ventre-plat-1.jpg', 'fond-blanc/ventre-plat-2.jpg', 'Darling_Body15.png', 'Darling_Body16.png']
    },
    
    'creme-sculptante': {
        name: 'Crème Sculptante Ventre Plat',
        tagline: 'Effet Chauffant',
        price: 7000,
        format: '150 g (5.3 oz)',
        badge: 'Populaire',
        rating: '62 avis',
        shortDescription: 'Crème chauffante haute performance pour affiner la taille, raffermir le ventre et lisser la peau jour après jour.',
        fullDescription: "<p>La Crème Sculptante Ventre Plat Darling Body est formulée pour agir efficacement sur les zones rebelles du ventre et des hanches. Sa technologie chauffante stimule la circulation locale, favorise l'élimination des graisses stockées et raffermit visiblement la peau.</p><p>Grâce à sa texture onctueuse et son parfum délicat, chaque application devient un véritable rituel beauté minceur.</p><h4>Actifs stars et bienfaits :</h4><p><strong>Caféine</strong> : Déstocke les graisses localisées et raffermit</p><p><strong>Capsaïcine</strong> : Active la microcirculation et produit l'effet chauffant</p><p><strong>Gingembre</strong> : Draine, tonifie et favorise le métabolisme local</p><p><strong>Menthol</strong> : Effet tonique et fraîcheur immédiate</p>",
        benefits: [
            'Action chauffante ciblée ventre plat',
            'Réduction visible des rondeurs localisées',
            'Peau lissée et tonifiée',
            'Parfum agréable et texture fondante',
            'Soin quotidien complémentaire des routines minceur',
            'Formulé avec soin et amour',
            'Résultats visibles dès 2 semaines'
        ],
        usage: "<p><strong>Mode d'emploi :</strong></p><p>Appliquer matin et soir sur le ventre, les hanches ou toute zone ciblée. Masser par mouvements circulaires pendant 5 à 10 minutes jusqu'à absorption complète.</p><p><strong>Conseil :</strong> Pour des résultats optimaux, utiliser après la douche et avant de porter votre gaine Darling Body.</p>",
        precautions: "<p>Usage externe uniquement. Éviter le contact avec les yeux et muqueuses. Se laver les mains après application. Déconseillé aux femmes enceintes ou allaitantes sans avis médical. Tenir hors de portée des enfants.</p>",
        ingredients: "<p><strong>Formule enrichie en :</strong> Caféine, Capsaïcine, Extrait de Gingembre, Menthol, Huiles essentielles naturelles.</p>",
        images: ['fond-blanc/creme-sculptante-1.jpg', 'fond-blanc/creme-sculptante-2.jpg', 'fond-blanc/creme-sculptante-3.jpg']
    },
    
    'coupe-faim': {
        name: 'Coupe-Faim Naturel',
        tagline: 'Équilibre & Silhouette',
        price: 20000, // Prix par défaut (Formule Bien Dosée)
        format: '30 gélules',
        badge: 'Nouveau',
        rating: '31 avis',
        shortDescription: "Régule l'appétit, apaise les envies et soutient la perte de poids en douceur, sans frustration ni excitant.",
        fullDescription: "<p>Le Coupe-Faim Darling Body a été conçu pour accompagner chaque femme dans sa quête d'une silhouette affinée et d'un bien-être durable. Sa formule associe des actifs naturels puissants qui agissent en synergie sur plusieurs leviers :</p><ul><li>Régulation de l'appétit et des fringales émotionnelles</li><li>Réduction de l'absorption des sucres et des glucides</li><li>Équilibre hormonal et gestion du stress</li><li>Soutien de l'énergie et de l'humeur au quotidien</li></ul>",
        benefits: [
            "Formule 100% naturelle",
            "Agit sur l'appétit, le métabolisme et le stress",
            "Sans sucre ajouté",
            "Sans excitant (pas de caféine)",
            "Fabriqué avec soin et amour",
            "Idéal en accompagnement d'un rééquilibrage alimentaire",
            "Effets durables sans effet rebond"
        ],
        usage: "<p><strong>Mode d'emploi :</strong></p><p>Prendre 1 à 2 gélules par jour selon l'appétit, de préférence 30 minutes avant les repas avec un grand verre d'eau.</p><p>La posologie complète et personnalisée est fournie au moment de la livraison.</p>",
        precautions: "<p>Déconseillé aux enfants, femmes enceintes ou allaitantes. Ne pas dépasser la dose journalière recommandée. À utiliser dans le cadre d'une alimentation variée et équilibrée et d'un mode de vie sain.</p>",
        ingredients: "<p><strong>Ingrédients actifs par gélule :</strong></p><p>Vitamine D3 (25 µg / 1000 UI), Extrait de haricots blancs (300 mg), Extrait de thé vert décaféiné (100 mg), L-Théanine (150 mg), L-Tryptophane (50 mg), Extrait de mélisse officinale (75 mg), Extrait de Rhodiola rosea (100 mg, 3% rosavines).</p>",
        images: ['fond-blanc/coupe-faim-1.jpg', 'fond-blanc/coupe-faim-2.jpg', 'fond-blanc/coupe-faim-3.jpg', 'fond-blanc/coupe-faim-4.jpg']
    },
    
    'huile-sculptante': {
        name: "Huile Sculptante",
        tagline: "Anti-Cellulite & Drainage",
        price: 10000,
        format: "150 ml",
        badge: "Nouveau",
        rating: "15 avis",
        shortDescription: "Huile drainante anti-cellulite qui sculpte la silhouette, active le drainage et lisse la peau d'orange.",
        fullDescription: "<p>L'Huile Sculptante Darling Body est une formule concentrée d'actifs drainants et anti-cellulite pour affiner visiblement votre silhouette. Enrichie en guarana, caféine et plantes médicinales drainantes, cette huile stimule la microcirculation, favorise l'élimination des toxines et lutte efficacement contre la peau d'orange.</p><p>Sa texture légère et non grasse pénètre rapidement tout en laissant la peau douce, lisse et tonifiée. Idéale pour un massage tonique quotidien sur les zones ciblées.</p>",
        benefits: [
            "Active le drainage naturel de l'organisme",
            "Lutte contre l'aspect peau d'orange",
            "Favorise la microcirculation sanguine",
            "Affine visiblement la silhouette",
            "Laisse la peau douce, lisse et tonifiée",
            "Texture légère et non grasse",
            "Pénétration rapide",
            "Formule 100% naturelle"
        ],
        usage: "<p><strong>Mode d'emploi :</strong></p><p>Appliquer matin et/ou soir sur les zones concernées (cuisses, fesses, ventre, bras...). Masser de façon tonique pendant 5 à 10 minutes en mouvements circulaires. Utiliser en cure de 21 jours minimum pour des résultats optimaux.</p><p><strong>ASTUCE :</strong> À appliquer après la douche sur peau légèrement humide pour booster l'efficacité.</p>",
        precautions: "<p>Usage externe uniquement. Éviter le contact avec les yeux. Se laver les mains après application. Déconseillé aux femmes enceintes ou allaitantes. En cas de réaction cutanée, cesser l'utilisation.</p>",
        ingredients: "<p><strong>Composition :</strong></p><p>Guarana : stimule la microcirculation et tonifie la peau grâce à sa teneur en caféine naturelle. Caféine : favorise la dégradation des graisses localisées. Plantes médicinales drainantes (lierre, prêle, romarin) : aident à éliminer les toxines, réduisent la rétention d'eau. Huiles végétales nourrissantes (amande douce, tournesol) : assouplissent la peau et améliorent l'élasticité.</p>",
        images: ['Darling_Body32.png', 'Darling_Body33.png', 'Darling_Body34.png', 'Darling_Body35.png']
    }
};

// Mapping des IDs numériques vers les slugs de produits
const productIdMapping = {
    '1': 'booster-metabolisme',
    '2': 'creme-sculptante',
    '3': 'coupe-faim',
    '4': 'huile-sculptante'
};

// Fonction pour obtenir l'ID du produit depuis l'URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    // Si l'ID est numérique, le convertir en slug
    if (id && productIdMapping[id]) {
        return productIdMapping[id];
    }
    
    // Si c'est déjà un slug, le retourner tel quel
    if (id && productsData[id]) {
        return id;
    }
    
    // Par défaut, retourner le premier produit
    return 'booster-metabolisme';
}

// Fonction pour charger les données du produit
function loadProductData() {
    const productId = getProductIdFromURL();
    const product = productsData[productId];
    
    if (!product) {
        window.location.href = 'produits.html';
        return;
    }
    
    // Mise à jour du breadcrumb
    document.getElementById('breadcrumb-product').textContent = product.name;
    
    // Mise à jour du titre de la page
    document.title = `${product.name} - Darling Body`;
    
    // Mise à jour du badge
    document.getElementById('product-badge').textContent = product.badge;
    
    // Mise à jour du rating
    document.getElementById('rating-text').textContent = `(${product.rating})`;
    
    // Mise à jour des informations principales
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-tagline').textContent = product.tagline;
    document.getElementById('product-price').textContent = `${product.price.toLocaleString()} FCFA`;
    document.getElementById('product-format').innerHTML = `<strong>Format :</strong> ${product.format}`;
    document.getElementById('product-short-description').textContent = product.shortDescription;
    
    // Afficher le sélecteur de formule uniquement pour Coupe Faim
    const formulaSelector = document.getElementById('formula-selector');
    if (productId === 'coupe-faim') {
        formulaSelector.style.display = 'block';
        // Initialiser le prix avec la formule par défaut (20000)
        const defaultPrice = 20000;
        document.getElementById('product-price').textContent = `${defaultPrice.toLocaleString()} FCFA`;
        // Initialiser le calcul du total avec le prix de la formule
        initializeFormulaSelector(defaultPrice);
    } else {
        formulaSelector.style.display = 'none';
        // Initialiser le calcul du total avec le prix normal
        updateTotalPrice(product.price);
    }
    
    // Mise à jour des tabs
    document.getElementById('full-description').innerHTML = product.fullDescription;
    
    const benefitsList = document.getElementById('benefits-list');
    benefitsList.innerHTML = product.benefits.map(benefit => `<li>${benefit}</li>`).join('');
    
    document.getElementById('usage-instructions').innerHTML = product.usage;
    document.getElementById('precautions').innerHTML = '<h4>⚠️ Précautions d\'emploi</h4>' + product.precautions;
    document.getElementById('ingredients-list').innerHTML = product.ingredients;
    
    // Charger la galerie d'images
    loadGallery(product.images);
    
    // Charger les produits recommandés
    loadRelatedProducts(productId);
}

// Fonction pour charger la galerie d'images
function loadGallery(images) {
    const mainImage = document.getElementById('main-image');
    const thumbnailsContainer = document.getElementById('thumbnails');
    
    // Image principale
    mainImage.src = `img/${images[0]}`;
    mainImage.alt = document.getElementById('product-title').textContent;
    
    // Thumbnails
    thumbnailsContainer.innerHTML = images.map((img, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
            <img src="img/${img}" alt="Vue ${index + 1}">
        </div>
    `).join('');
    
    // Event listeners pour les thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            mainImage.src = `img/${images[index]}`;
            
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Fonction pour charger les produits recommandés
function loadRelatedProducts(currentProductId) {
    const container = document.getElementById('related-products');
    const otherProducts = Object.entries(productsData).filter(([id]) => id !== currentProductId);
    
    container.innerHTML = otherProducts.map(([id, product]) => `
        <div class="related-product-card">
            <div class="related-product-image">
                <img src="img/${product.images[0]}" alt="${product.name}">
            </div>
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString()} FCFA</p>
            <a href="produit-detail.html?id=${id}">Voir le produit</a>
        </div>
    `).join('');
}

// Fonction pour initialiser le sélecteur de formule (Coupe Faim)
function initializeFormulaSelector(defaultPrice) {
    const formulaSelect = document.getElementById('formula');
    const priceElement = document.getElementById('product-price');
    const quantitySelect = document.getElementById('quantity');
    const totalElement = document.getElementById('total-amount');
    
    // Variable pour stocker le prix actuel
    let currentPrice = defaultPrice;
    
    // Fonction pour mettre à jour le prix et le total
    function updatePriceAndTotal(newPrice) {
        currentPrice = newPrice;
        priceElement.textContent = `${newPrice.toLocaleString()} FCFA`;
        
        // Animation subtile
        priceElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            priceElement.style.transform = 'scale(1)';
        }, 200);
        
        // Mettre à jour le total
        const quantity = parseInt(quantitySelect.value);
        const total = newPrice * quantity;
        totalElement.textContent = `${total.toLocaleString()} FCFA`;
    }
    
    // Écouter le changement de formule
    formulaSelect.addEventListener('change', function() {
        const selectedPrice = parseInt(this.value);
        updatePriceAndTotal(selectedPrice);
    });
    
    // Écouter le changement de quantité
    quantitySelect.addEventListener('change', function() {
        const quantity = parseInt(this.value);
        const total = currentPrice * quantity;
        totalElement.textContent = `${total.toLocaleString()} FCFA`;
    });
    
    // Initialiser le total au chargement
    const quantity = parseInt(quantitySelect.value);
    const total = currentPrice * quantity;
    totalElement.textContent = `${total.toLocaleString()} FCFA`;
}

// Fonction pour mettre à jour le prix total (pour les autres produits)
function updateTotalPrice(unitPrice) {
    const quantitySelect = document.getElementById('quantity');
    const totalElement = document.getElementById('total-amount');
    
    quantitySelect.addEventListener('change', function() {
        const quantity = parseInt(this.value);
        const total = unitPrice * quantity;
        totalElement.textContent = `${total.toLocaleString()} FCFA`;
    });
    
    // Initialiser le total au chargement
    const quantity = parseInt(quantitySelect.value);
    const total = unitPrice * quantity;
    totalElement.textContent = `${total.toLocaleString()} FCFA`;
}

// Gestion des tabs
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        const targetTab = this.dataset.tab;
        
        // Mise à jour des boutons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Mise à jour des panels
        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
        document.getElementById(targetTab).classList.add('active');
    });
});

// Gestion du formulaire de commande WhatsApp
document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const productId = getProductIdFromURL();
    const product = productsData[productId];
    
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const address = document.getElementById('customer-address').value;
    const quantity = document.getElementById('quantity').value;
    
    // Récupérer le prix actuel (peut être modifié par la formule pour Coupe Faim)
    let unitPrice = product.price;
    let formulaInfo = '';
    
    // Si c'est le Coupe Faim, récupérer le prix de la formule sélectionnée
    if (productId === 'coupe-faim') {
        const formulaSelect = document.getElementById('formula');
        if (formulaSelect && formulaSelect.style.display !== 'none') {
            unitPrice = parseInt(formulaSelect.value);
            const formulaText = formulaSelect.options[formulaSelect.selectedIndex].text;
            formulaInfo = `📋 *Formule :* ${formulaText}\n`;
        }
    }
    
    const total = unitPrice * parseInt(quantity);
    
    // Construction du message WhatsApp
    const message = `🛍️ *NOUVELLE COMMANDE DARLING BODY*

📦 *Produit :* ${product.name}
${formulaInfo}💰 *Prix unitaire :* ${unitPrice.toLocaleString()} FCFA
🔢 *Quantité :* ${quantity}
💵 *Total :* ${total.toLocaleString()} FCFA

👤 *Client :*
Nom : ${name}
Téléphone : ${phone}
Adresse : ${address}

💳 Paiement à la livraison`;
    
    // Encodage du message pour l'URL
    const encodedMessage = encodeURIComponent(message);
    
    // Ouverture de WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', loadProductData);

console.log('✓ Darling Body Produit Detail - JavaScript chargé');