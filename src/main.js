document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu-modal');
  const closeBtn = document.querySelector('.mobile-menu-btn-x');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-list .nav-link');
  const scrollToTopBtn = document.querySelector('.scroll-to-top');

if (scrollToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('is-open');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      mobileMenu.classList.remove('is-open');
    }
  });
});