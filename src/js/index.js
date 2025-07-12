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

function breadcrumbBar({
  backTarget = '/',
  backText = 'Back',
  refMatch = backTarget,
  swapTextOnScroll = false,
  photoTitle = ''
} = {}) {
  return {
    backHref: '',
    backText,
    scrollPercent: 0,
    showPhotoTitle: false,
    hasInteracted: false,
    photoTitle,

    init() {
      const referrer = document.referrer;
      const shouldUseHistory = referrer.includes(refMatch);
      this.backHref = shouldUseHistory ? 'javascript:history.back()' : backTarget;

      this.updateScroll();
      window.addEventListener('scroll', this.updateScroll.bind(this));

      if (swapTextOnScroll) {
        const titleEl = document.querySelector('[data-photo-title-trigger]');
        if (titleEl) {
          const observer = new IntersectionObserver(([entry]) => {
            this.hasInteracted = true;
            this.showPhotoTitle = !entry.isIntersecting;

            // Add class to DOM to enable transitions
            this.$el.classList.add('has-interacted');
          }, { threshold: 0 });

          observer.observe(titleEl);

          requestAnimationFrame(() => {
            const rect = titleEl.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) {
              this.hasInteracted = false;
              this.showPhotoTitle = true;
              this.$el.classList.remove('has-interacted');
            }
          });
        }
      }
    },

    updateScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      this.scrollPercent = Math.min((scrollTop / scrollHeight) * 100, 100).toFixed(1);
    }
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
  Alpine.data('breadcrumbBar', breadcrumbBar);

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
