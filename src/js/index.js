import Alpine from 'alpinejs';
import '../css/index.scss';
import { initializeSwiper, sliderData } from './swiperSetup'; // Import both functions from swiperSetup.js

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Swiper globally
  initializeSwiper();
});

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
Alpine.data('sliderData', sliderData);
Alpine.start();