document.addEventListener('DOMContentLoaded', () => {
      const burgerBtn = document.querySelector('.mobile-menu-btn');
      const mobileMenu = document.querySelector('.mobile-menu-modal');
      const closeBtn = document.querySelector('.mobile-menu-btn-x'); // optional

      if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('is-open');
          console.log('Burger button clicked');
        });
      }

      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          mobileMenu.classList.remove('is-open');
          console.log('Close button clicked');
        });
      }

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          mobileMenu.classList.remove('is-open');
          console.log('Escape key pressed');
        }
      });
    });