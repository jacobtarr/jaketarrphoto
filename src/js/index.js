import Alpine from 'alpinejs';
import persist from '@alpinejs/persist'
import intersect from '@alpinejs/intersect'
import '../css/index.scss';
import { sliderData } from './flickitySetup';
import { initializePageGalleryComponent } from './pageGalleryComponent';

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
window.sliderData = sliderData;

// Initialize Alpine.js
document.addEventListener('DOMContentLoaded', () => {
  Alpine.data('headerState', headerState);
  Alpine.data('sliderData', sliderData);
  Alpine.plugin(intersect);
  Alpine.plugin(persist);
  Alpine.start();
  initializePageGalleryComponent();
});
