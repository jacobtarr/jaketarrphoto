import Flickity from 'flickity';
import 'flickity/css/flickity.css';

// Flickity Initialization
export function initializeFlickity() {
  const flickityInstance = new Flickity('.c-slider', {
    cellAlign: 'left',
    contain: false,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: true,
    lazyLoad: 5
  });

  // Dispatch a custom event on slide change
  flickityInstance.on('change', (index) => {
    const activeCell = flickityInstance.selectedElement;
    const activeTitle = activeCell.dataset.title;
    const activeLocation = activeCell.dataset.location;

    document.dispatchEvent(new CustomEvent('flickity-slide-changed', {
      detail: { index, activeTitle, activeLocation },
    }));
  });

  return flickityInstance;
}

// Alpine.js state for Flickity
export function sliderData() {
  return {
    currentIndex: 0,
    slides: [],
    flickity: null,

    init() {
      // Initialize Flickity
      this.flickity = initializeFlickity();

      // Collect slide data
      this.slides = Array.from(document.querySelectorAll('.c-slide')).map((cell) => ({
        title: cell.dataset.title,
        location: cell.dataset.location,
        url: cell.dataset.url, // Include URL for each slide
      }));

      // Listen to slide change events
      document.addEventListener('flickity-slide-changed', (event) => {
        const { index } = event.detail;
        this.currentIndex = index;
        this.updateActiveContent();
      });

      // Set initial content
      this.updateActiveContent();
    },

    updateActiveContent() {
      const activeSlide = this.slides[this.currentIndex];
      document.querySelector('.c-active-title').innerText = activeSlide.title;
      document.querySelector('.c-active-location').innerText = activeSlide.location;
    },
  };
}
