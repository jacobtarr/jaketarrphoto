import Alpine from 'alpinejs';
import persist from '@alpinejs/persist'
import intersect from '@alpinejs/intersect'

function headerState() {
  return {
    open: false,
    darkMode: false,

    init() {
      const stored = localStorage.getItem('darkMode');
      this.darkMode = stored !== null
        ? JSON.parse(stored)
        : window.matchMedia('(prefers-color-scheme: dark)').matches;

      // This won't flicker because we pass the boolean
      document.documentElement.classList.toggle('u-dark-mode', this.darkMode);

      this.$watch('open', v => {
        document.body.classList.toggle('mobile-menu-is-active', v);
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
    const { sliderData } = await import('../../templates/_blocks/slider/index.js');
    Alpine.data('sliderData', sliderData);
  }

  if (document.querySelector('.has-lightbox-gallery')) {
    const { initializePageGalleryComponent } = await import('../../templates/_blocks/gallery/index.js');
    initializePageGalleryComponent();
  }

  Alpine.start();
});
