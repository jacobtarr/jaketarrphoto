import Alpine from 'alpinejs';
import persist from '@alpinejs/persist'
import intersect from '@alpinejs/intersect'
import '../css/index.scss';

function headerState() {
  return {
    open: false,
    darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,

    init() {
      document.documentElement.classList.toggle('u-dark-mode', this.darkMode);

      this.$watch('open', value => {
        document.body.classList.toggle('mobile-menu-is-active', value);
      });
    },

    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
      document.documentElement.classList.toggle('u-dark-mode', this.darkMode);
    },

    isActive(page) {
      return window.location.pathname.includes(page);
    },
  };
}

// Attach Alpine.js components to the window object
window.Alpine = Alpine;
window.headerState = headerState;

// Initialize Alpine.js
document.addEventListener('DOMContentLoaded', async () => {
  Alpine.data('headerState', headerState);
  Alpine.plugin(intersect);
  Alpine.plugin(persist);

  if (document.querySelector('.c-slider')) {
    const { sliderData } = await import('./flickitySetup');
    Alpine.data('sliderData', sliderData);
  }

  if (document.querySelector('.has-lightbox-gallery')) {
    const { initializePageGalleryComponent } = await import('./pageGalleryComponent');
    initializePageGalleryComponent();
  }

  Alpine.start();
});
