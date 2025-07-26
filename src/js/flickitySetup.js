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

    async init() {
      const { default: Flickity } = await import('flickity');
      await import('flickity/css/flickity.css');

      this.flickity = new Flickity('.c-slider', {
        cellAlign: 'left',
        contain: false,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        lazyLoad: 5,
      });

      this.slides = [...document.querySelectorAll('.c-slide')].map(el => ({
        title: el.dataset.title,
        content: el.dataset.content,
        linkUrl: el.dataset.linkUrl,
        linkText: el.dataset.linkText,
      }));

      this.updateActiveContent();

      this.flickity.on('change', (index) => {
        this.currentIndex = index;
        this.updateActiveContent();
      });
    },

    updateActiveContent() {
      const active = this.slides[this.currentIndex];
      document.querySelector('.c-active-title').textContent = active?.title || '';
      document.querySelector('.c-active-content').textContent = active?.content || '';
    },
  };
}
