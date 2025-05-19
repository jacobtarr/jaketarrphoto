import Alpine from 'alpinejs';
import '../css/index.scss';
import { initializeFlickity, sliderData } from './flickitySetup';

function headerState() {
  return {
    darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
    init() {
      // Ensure the class is applied correctly on page load
      document.documentElement.classList.toggle('u-dark-mode', this.darkMode);
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
  Alpine.start();
});
