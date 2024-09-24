import Alpine from 'alpinejs';
import '../css/index.scss'; // Assuming this is your main CSS file

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
    }
  };
}

// Attach Alpine to the window object
window.Alpine = Alpine;
window.headerState = headerState; // Make the headerState function available globally

// Initialize Alpine
Alpine.start();