/* ============================================================
   LOCATION MAROC — Shared Components
   Injects: Navbar, Footer, Floating WhatsApp button
   ============================================================ */

const WA_NUMBER = '212600000000'; // Replace with real WhatsApp number
const WA_DEFAULT_MSG_FR = 'Bonjour, je souhaite obtenir des informations sur vos véhicules disponibles. Merci.';
const WA_DEFAULT_MSG_EN = 'Hello, I would like to get information about your available vehicles. Thank you.';

function getWaLink(msg) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ── Determine path prefix (for pages in subdirectories) ── */
function getRoot() {
  const depth = window.location.pathname.split('/').filter(Boolean).length;
  // If inside /cars/ folder, go up one level
  if (window.location.pathname.includes('/cars/')) return '../';
  return '';
}

/* ── Navbar HTML ── */
function buildNavbar(opts = {}) {
  const root = getRoot();
  const darkClass = opts.dark ? 'dark-nav' : '';
  return `
  <nav class="navbar ${darkClass}" id="navbar">
    <div class="nav-inner">
      <a href="${root}index.html" class="nav-logo">
        <span class="logo-main">Location<span style="color:var(--accent)">Maroc</span></span>
        <span class="logo-sub">Location de Voitures</span>
      </a>

      <ul class="nav-links">
        <li><a href="${root}index.html" data-i18n="nav_home">Accueil</a></li>
        <li><a href="${root}parc.html" data-i18n="nav_parc">Parc Automobile</a></li>
        <li><a href="${root}about.html" data-i18n="nav_about">À Propos</a></li>
        <li><a href="${root}contact.html" data-i18n="nav_contact">Contact</a></li>
      </ul>

      <div class="nav-right">
        <div class="lang-toggle">
          <button class="lang-btn" data-lang="fr">FR</button>
          <button class="lang-btn" data-lang="en">EN</button>
        </div>
        <!-- Desktop-only WA button: hidden on mobile via CSS, no inline style override -->
        <a href="${getWaLink(WA_DEFAULT_MSG_FR)}" target="_blank" class="btn btn-primary nav-cta" id="nav-wa-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          <span data-i18n="nav_reserve">Réserver</span>
        </a>
        <!-- Hamburger: mobile only -->
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu overlay -->
  <div class="mobile-menu" id="mobile-menu">
    <button class="mobile-menu-close" id="mobile-menu-close" aria-label="Fermer">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <nav class="mobile-nav-links">
      <a href="${root}index.html" data-i18n="nav_home">Accueil</a>
      <a href="${root}parc.html" data-i18n="nav_parc">Parc Automobile</a>
      <a href="${root}about.html" data-i18n="nav_about">À Propos</a>
      <a href="${root}contact.html" data-i18n="nav_contact">Contact</a>
    </nav>
    <div class="mobile-menu-footer">
      <div class="lang-toggle">
        <button class="lang-btn" data-lang="fr">FR</button>
        <button class="lang-btn" data-lang="en">EN</button>
      </div>
      <a href="${getWaLink(WA_DEFAULT_MSG_FR)}" target="_blank" class="mobile-wa-btn" id="mobile-wa-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        <span data-i18n="nav_reserve">Réserver via WhatsApp</span>
      </a>
    </div>
  </div>`;
}

/* ── Footer HTML ── */
function buildFooter() {
  const root = getRoot();
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo-main">Location<span style="color:var(--accent)">Maroc</span></div>
          <div class="logo-sub">Location de Voitures</div>
          <p data-i18n="footer_desc">Votre partenaire de confiance pour la location de véhicules au Maroc.</p>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer_links">Liens rapides</h5>
          <a href="${root}index.html" data-i18n="nav_home">Accueil</a>
          <a href="${root}parc.html" data-i18n="nav_parc">Parc Automobile</a>
          <a href="${root}about.html" data-i18n="nav_about">À Propos</a>
          <a href="${root}contact.html" data-i18n="nav_contact">Contact</a>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer_fleet">Notre Flotte</h5>
          <a href="${root}cars/dacia-sandero.html">Dacia Sandero</a>
          <a href="${root}cars/volkswagen-polo.html">Volkswagen Polo</a>
          <a href="${root}cars/duster-4x4.html">Dacia Duster 4×4</a>
          <a href="${root}cars/mercedes-classe-c.html">Mercedes Classe C</a>
          <a href="${root}parc.html">Voir plus →</a>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer_contact">Contact</h5>
          <p>📍 47 Av. Mohammed V<br>Guéliz, Marrakech</p>
          <p style="margin-top:10px;">📞 <a href="tel:+212600000000">+212 600 000 000</a></p>
          <p style="margin-top:6px;">✉️ <a href="mailto:contact@locationmaroc.ma">contact@locationmaroc.ma</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span id="year"></span> LocationMaroc. <span data-i18n="footer_rights">Tous droits réservés.</span></span>
        <span>Made with ♡ au Maroc</span>
      </div>
    </div>
  </footer>`;
}

/* ── Floating WhatsApp ── */
function buildFloatingWA() {
  return `
  <div class="wa-float">
    <div class="wa-float-tooltip">Réserver via WhatsApp</div>
    <a href="${getWaLink(WA_DEFAULT_MSG_FR)}" target="_blank" class="wa-float-btn" id="wa-float-link" aria-label="WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    </a>
  </div>`;
}

/* ── SVG Icons Helper ── */
const icons = {
  fuel: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 22V6a2 2 0 012-2h8a2 2 0 012 2v16M3 22h14M3 10h14M19 10l2 2v7a1 1 0 01-1 1h-2v-7l-2-2"/></svg>`,
  gearbox: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M2 12h2m16 0h2M18.66 5.34l-1.41 1.41M5.34 5.34L3.93 3.93M4.93 19.07l-1.41 1.41M19.07 19.07l1.41 1.41"/></svg>`,
  seat: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.5 17H8v-5.5a4 4 0 018 0V13h4.5a1 1 0 010 2h-1v2zm0 0l1 3.5M8 17l-1 3.5M6 7a2 2 0 100-4 2 2 0 000 4zm0 0v4"/></svg>`,
  ac: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M4.22 4.22l15.56 15.56M2 12h20M4.22 19.78L19.78 4.22M12 6a6 6 0 010 12"/></svg>`,
  door: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="2" width="18" height="20" rx="2"/><circle cx="15" cy="12" r="1"/></svg>`,
  luggage: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="7" width="14" height="13" rx="2"/><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="9.5" y1="13.5" x2="14.5" y2="13.5"/></svg>`,
  power: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  cons: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12a7 7 0 1014 0A7 7 0 005 12zm7-3v4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2"/></svg>`,
  wa: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`,
};

/* ── Inject on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  // Inject navbar
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) {
    const dark = navPlaceholder.getAttribute('data-dark') === 'true';
    navPlaceholder.outerHTML = buildNavbar({ dark });
  }
  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = buildFooter();
  }
  // Inject floating WA
  const waPlaceholder = document.getElementById('wa-placeholder');
  if (waPlaceholder) {
    waPlaceholder.outerHTML = buildFloatingWA();
  }
  // Set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Update floating WA link based on lang
  function updateWaFloatLink() {
    const lang = localStorage.getItem('lang') || 'fr';
    const link = document.getElementById('wa-float-link');
    if (link) {
      const msg = lang === 'en' ? WA_DEFAULT_MSG_EN : WA_DEFAULT_MSG_FR;
      link.href = getWaLink(msg);
    }
  }
  setTimeout(updateWaFloatLink, 100);
  document.addEventListener('langchange', updateWaFloatLink);

  /* Also update mobile WA button on lang change */
  function updateMobileWaLink() {
    const lang = localStorage.getItem('lang') || 'fr';
    const mobileWaLink = document.getElementById('mobile-wa-btn');
    if (mobileWaLink) {
      const msg = lang === 'en' ? WA_DEFAULT_MSG_EN : WA_DEFAULT_MSG_FR;
      mobileWaLink.href = getWaLink(msg);
    }
    const navWaLink = document.getElementById('nav-wa-btn');
    if (navWaLink) {
      const msg = lang === 'en' ? WA_DEFAULT_MSG_EN : WA_DEFAULT_MSG_FR;
      navWaLink.href = getWaLink(msg);
    }
  }
  setTimeout(updateMobileWaLink, 150);
});

// Export icons for use in car pages
window.carIcons = icons;
window.getWaLink = getWaLink;
window.WA_NUMBER = WA_NUMBER;
