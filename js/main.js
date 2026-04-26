/* ============================================================
   LOCATION MAROC — Main JavaScript
   Features: i18n (FR/EN), navbar scroll, mobile menu,
             fade-in animations, gallery, form handling
   ============================================================ */

/* ── Translations ── */
const translations = {
  fr: {
    // NAV
    nav_home:      'Accueil',
    nav_parc:      'Parc Automobile',
    nav_about:     'À Propos',
    nav_contact:   'Contact',
    nav_reserve:   'Réserver',

    // HERO
    hero_tag:      'Agence de Location au Maroc',
    hero_title:    'Voyagez avec <em>style</em> à travers le Maroc',
    hero_sub:      'Des véhicules haut de gamme pour explorer les routes du Royaume. Service premium, prix transparents.',
    hero_cta1:     'Réserver via WhatsApp',
    hero_cta2:     'Voir le Parc',
    hero_scroll:   'Défiler',
    hero_stat1_n:  '50+',
    hero_stat1_l:  'Véhicules',
    hero_stat2_n:  '5★',
    hero_stat2_l:  'Service',
    hero_stat3_n:  '24/7',
    hero_stat3_l:  'Disponible',

    // FEATURED
    feat_tag:      'Sélection Premium',
    feat_title:    'Nos véhicules phares',
    feat_sub:      'Une sélection soigneuse de véhicules pour tous vos besoins de déplacement.',
    feat_more:     'Voir tout le parc',
    per_day:       '/ jour',
    see_details:   'Voir détails',

    // WHY
    why_tag:       'Pourquoi nous choisir',
    why_title:     'Un service d\'exception',
    why_sub:       'Nous mettons tout en œuvre pour que votre expérience soit parfaite.',
    why1_h:        'Flotte récente',
    why1_p:        'Tous nos véhicules sont récents, entretenus et contrôlés régulièrement.',
    why2_h:        'Prix transparents',
    why2_p:        'Aucun frais caché. Le prix affiché est le prix final.',
    why3_h:        'Assistance 24/7',
    why3_p:        'Notre équipe est disponible à tout moment pour vous accompagner.',
    why4_h:        'Livraison incluse',
    why4_p:        'Livraison et récupération du véhicule à votre adresse dans tout le Maroc.',

    // CTA BAND
    cta_title:     'Prêt à prendre la route ?',
    cta_sub:       'Contactez-nous maintenant via WhatsApp pour une réservation rapide et simple.',
    cta_btn:       'Réserver via WhatsApp',

    // PARC PAGE
    parc_tag:      'Nos Véhicules',
    parc_title:    'Parc Automobile',
    parc_sub:      'Découvrez notre sélection de véhicules disponibles à la location.',
    filter_all:    'Tous',
    filter_eco:    'Économique',
    filter_comp:   'Compacte',
    filter_suv:    'SUV',
    filter_lux:    'Prestige',

    // ABOUT PAGE
    about_tag:     'Notre Histoire',
    about_title:   'À Propos de Nous',
    about_sub:     'Une agence de confiance au cœur du Maroc.',
    about_p1:      'Location Maroc est une agence de location de voitures fondée avec une vision simple : offrir un service de qualité européenne au cœur du Royaume. Basée à Marrakech, nous couvrons l\'ensemble du territoire national.',
    about_p2:      'Depuis notre création, nous avons accompagné des milliers de clients — touristes, hommes d\'affaires et résidents — dans leurs déplacements à travers le Maroc. Notre flotte est renouvelée régulièrement pour vous offrir toujours le meilleur.',
    about_p3:      'Notre équipe parle français, arabe et anglais pour vous accueillir dans les meilleures conditions.',
    about_v1_h:    'Excellence',
    about_v1_p:    'Chaque véhicule est soigneusement entretenu.',
    about_v2_h:    'Confiance',
    about_v2_p:    'Transparence et honnêteté dans chaque transaction.',
    about_v3_h:    'Proximité',
    about_v3_p:    'Une équipe locale à votre écoute 24h/24.',
    about_v4_h:    'Flexibilité',
    about_v4_p:    'Formules adaptées à tous les besoins.',

    // CONTACT PAGE
    contact_tag:   'Nous Trouver',
    contact_title: 'Contactez-Nous',
    contact_sub:   'Nous répondons rapidement. WhatsApp est le moyen le plus rapide.',
    c_address_h:   'Adresse',
    c_address_v:   '47 Avenue Mohammed V, Guéliz, Marrakech, Maroc',
    c_phone_h:     'Téléphone',
    c_email_h:     'Email',
    c_hours_h:     'Horaires',
    c_hours_v:     'Lun – Sam : 8h – 20h\nDimanche : 9h – 18h',
    form_name:     'Nom complet',
    form_email:    'Adresse email',
    form_phone:    'Téléphone',
    form_vehicle:  'Véhicule souhaité',
    form_msg:      'Message',
    form_submit:   'Envoyer le message',
    form_success:  'Votre message a été envoyé ! Nous vous contactons sous 24h.',
    form_vehicle_select: 'Sélectionner un véhicule',

    // FOOTER
    footer_desc:   'Votre partenaire de confiance pour la location de véhicules au Maroc.',
    footer_links:  'Liens rapides',
    footer_fleet:  'Notre Flotte',
    footer_contact:'Contact',
    footer_rights: 'Tous droits réservés.',

    // DETAIL PAGE
    detail_back:   '← Retour au parc',
    detail_book:   'Réserver via WhatsApp',
    detail_call:   'Appeler maintenant',
    detail_specs:  'Caractéristiques',
    detail_tag:    'Disponible à la location',
    spec_fuel:     'Carburant',
    spec_trans:    'Transmission',
    spec_seats:    'Places',
    spec_ac:       'Climatisation',
    spec_doors:    'Portes',
    spec_luggage:  'Bagages',
    spec_power:    'Puissance',
    spec_cons:     'Consommation',
    wa_pretext:    'Bonjour, je suis intéressé(e) par la location de votre ',
    wa_posttext:   '. Pouvez-vous me donner plus d\'informations sur les disponibilités et les tarifs ? Merci.',
  },

  en: {
    // NAV
    nav_home:      'Home',
    nav_parc:      'Our Fleet',
    nav_about:     'About',
    nav_contact:   'Contact',
    nav_reserve:   'Book Now',

    // HERO
    hero_tag:      'Car Rental Agency in Morocco',
    hero_title:    'Travel in <em>style</em> across Morocco',
    hero_sub:      'Premium vehicles to explore the roads of the Kingdom. First-class service, transparent pricing.',
    hero_cta1:     'Book via WhatsApp',
    hero_cta2:     'See Our Fleet',
    hero_scroll:   'Scroll',
    hero_stat1_n:  '50+',
    hero_stat1_l:  'Vehicles',
    hero_stat2_n:  '5★',
    hero_stat2_l:  'Service',
    hero_stat3_n:  '24/7',
    hero_stat3_l:  'Available',

    // FEATURED
    feat_tag:      'Premium Selection',
    feat_title:    'Our Featured Vehicles',
    feat_sub:      'A careful selection of vehicles for all your travel needs.',
    feat_more:     'View all vehicles',
    per_day:       '/ day',
    see_details:   'View details',

    // WHY
    why_tag:       'Why Choose Us',
    why_title:     'An exceptional service',
    why_sub:       'We go above and beyond to make your experience perfect.',
    why1_h:        'Recent Fleet',
    why1_p:        'All our vehicles are new, maintained and regularly inspected.',
    why2_h:        'Transparent Pricing',
    why2_p:        'No hidden fees. The displayed price is the final price.',
    why3_h:        '24/7 Support',
    why3_p:        'Our team is available at all times to assist you.',
    why4_h:        'Delivery Included',
    why4_p:        'Vehicle delivery and pickup at your address across Morocco.',

    // CTA BAND
    cta_title:     'Ready to hit the road?',
    cta_sub:       'Contact us now via WhatsApp for a quick and easy booking.',
    cta_btn:       'Book via WhatsApp',

    // PARC PAGE
    parc_tag:      'Our Vehicles',
    parc_title:    'Our Fleet',
    parc_sub:      'Discover our selection of vehicles available for rental.',
    filter_all:    'All',
    filter_eco:    'Economy',
    filter_comp:   'Compact',
    filter_suv:    'SUV',
    filter_lux:    'Premium',

    // ABOUT PAGE
    about_tag:     'Our Story',
    about_title:   'About Us',
    about_sub:     'A trusted agency at the heart of Morocco.',
    about_p1:      'Location Maroc is a car rental agency founded with a simple vision: to offer European-quality service at the heart of the Kingdom. Based in Marrakech, we cover the entire national territory.',
    about_p2:      'Since our inception, we have accompanied thousands of clients — tourists, business travelers and residents — in their journeys across Morocco. Our fleet is regularly renewed to always offer you the best.',
    about_p3:      'Our team speaks French, Arabic and English to welcome you in the best conditions.',
    about_v1_h:    'Excellence',
    about_v1_p:    'Each vehicle is carefully maintained.',
    about_v2_h:    'Trust',
    about_v2_p:    'Transparency and honesty in every transaction.',
    about_v3_h:    'Proximity',
    about_v3_p:    'A local team available for you 24/7.',
    about_v4_h:    'Flexibility',
    about_v4_p:    'Solutions tailored to every need.',

    // CONTACT PAGE
    contact_tag:   'Find Us',
    contact_title: 'Contact Us',
    contact_sub:   'We respond quickly. WhatsApp is the fastest way to reach us.',
    c_address_h:   'Address',
    c_address_v:   '47 Avenue Mohammed V, Guéliz, Marrakech, Morocco',
    c_phone_h:     'Phone',
    c_email_h:     'Email',
    c_hours_h:     'Hours',
    c_hours_v:     'Mon – Sat: 8am – 8pm\nSunday: 9am – 6pm',
    form_name:     'Full name',
    form_email:    'Email address',
    form_phone:    'Phone number',
    form_vehicle:  'Desired vehicle',
    form_msg:      'Message',
    form_submit:   'Send message',
    form_success:  'Your message has been sent! We will contact you within 24 hours.',
    form_vehicle_select: 'Select a vehicle',

    // FOOTER
    footer_desc:   'Your trusted partner for vehicle rental in Morocco.',
    footer_links:  'Quick Links',
    footer_fleet:  'Our Fleet',
    footer_contact:'Contact',
    footer_rights: 'All rights reserved.',

    // DETAIL PAGE
    detail_back:   '← Back to fleet',
    detail_book:   'Book via WhatsApp',
    detail_call:   'Call now',
    detail_specs:  'Specifications',
    detail_tag:    'Available for rental',
    spec_fuel:     'Fuel',
    spec_trans:    'Transmission',
    spec_seats:    'Seats',
    spec_ac:       'Air Conditioning',
    spec_doors:    'Doors',
    spec_luggage:  'Luggage',
    spec_power:    'Power',
    spec_cons:     'Consumption',
    wa_pretext:    'Hello, I am interested in renting your ',
    wa_posttext:   '. Could you please give me more information about availability and pricing? Thank you.',
  }
};

/* ── State ── */
let currentLang = localStorage.getItem('lang') || 'fr';

/* ── Apply translations ── */
function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.getAttribute('data-i18n-html')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  // Update WhatsApp links on detail pages
  document.querySelectorAll('[data-wa-car]').forEach(link => {
    const car = link.getAttribute('data-wa-car');
    const msg = encodeURIComponent(t.wa_pretext + car + t.wa_posttext);
    link.href = `https://wa.me/212600000000?text=${msg}`;
  });
  // Update per_day labels
  document.querySelectorAll('[data-i18n="per_day"]').forEach(el => {
    el.textContent = t.per_day;
  });
  document.documentElement.lang = lang;
}

/* ── Language Toggle ── */
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  applyTranslations(lang);
}

function initLangToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });
  // set initial state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
  applyTranslations(currentLang);
}

/* ── Navbar scroll ── */
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile Menu ── */
function initMobileMenu() {
  const hamburger   = document.querySelector('.hamburger');
  const mobileMenu  = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  /* Create overlay element dynamically */
  let overlay = document.querySelector('.mobile-menu-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    document.body.appendChild(overlay);
  }

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  /* Close via X button inside panel */
  const closeBtn = document.getElementById('mobile-menu-close');
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  /* Close when clicking the overlay */
  overlay.addEventListener('click', closeMenu);

  /* Close when a nav link is tapped */
  mobileMenu.querySelectorAll('.mobile-nav-links a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  /* Close on Escape key */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
  });
}

/* ── Fade-in on scroll ── */
function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ── Staggered children ── */
function initStagger() {
  document.querySelectorAll('.stagger-children').forEach(parent => {
    Array.from(parent.children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.1}s`;
      child.classList.add('fade-in');
    });
  });
}

/* ── Gallery (detail pages) ── */
function initGallery() {
  const mainImg = document.getElementById('gallery-main-img');
  const thumbs  = document.querySelectorAll('.gallery-thumb');
  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImg.style.opacity = '0';
      setTimeout(() => {
        mainImg.src = thumb.querySelector('img').src;
        mainImg.style.opacity = '1';
      }, 200);
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}

/* ── Parc filter ── */
function initFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.car-card[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      cards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = '';
          setTimeout(() => card.classList.add('visible'), 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ── Contact Form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const successMsg = document.getElementById('form-success');
    if (successMsg) {
      successMsg.style.display = 'block';
      form.reset();
      setTimeout(() => successMsg.style.display = 'none', 6000);
    }
  });
}

/* ── Active nav link ── */
function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href === current || (current === '' && href === 'index.html'));
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initLangToggle();
  initFadeIn();
  initStagger();
  initGallery();
  initFilter();
  initContactForm();
  setActiveNav();
});

/* ── Hero BG pan animation trigger ── */
document.addEventListener('DOMContentLoaded', () => {
  const heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
  }
});
