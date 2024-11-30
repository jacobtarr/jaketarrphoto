import Alpine from 'alpinejs';
import '@preline/select';
import '../css/index.scss';
import { initializeFlickity, sliderData } from './flickitySetup';

// Define your Alpine.js state for the header
function headerState() {
  return {
    darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
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
  Alpine.data('sliderData', sliderData);
  Alpine.start();
});
