/* ============================================================
   Equanimity Advisory — script.js
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Nav — add .scrolled border after 40px scroll
     ---------------------------------------------------------- */
  const nav = document.getElementById('nav');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case page is pre-scrolled

  /* ----------------------------------------------------------
     Mobile hamburger / overlay
     ---------------------------------------------------------- */
  const hamburger     = document.querySelector('.hamburger');
  const overlay       = document.getElementById('mobileOverlay');
  const overlayClose  = document.querySelector('.overlay-close');
  const overlayLinks  = overlay.querySelectorAll('a');

  function openMenu() {
    overlay.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  overlayClose.addEventListener('click', closeMenu);

  // Close on link click and let smooth scroll do its thing
  overlayLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.getAttribute('aria-hidden') === 'false') {
      closeMenu();
    }
  });

})();
