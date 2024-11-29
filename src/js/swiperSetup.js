import Swiper from 'swiper'; // Main Swiper library
import { Navigation } from 'swiper/modules'; // Correct modular import for Swiper 11+
import 'swiper/css'; // General Swiper styles
import 'swiper/css/navigation'; // Navigation-specific styles

// Swiper Initialization
export function initializeSwiper() {
  return new Swiper('.swiper-container', {
    loop: true,
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Disable default active state for manual handling
    on: {
      slideChange: function () {
        // This triggers every time a slide changes
        document.dispatchEvent(new CustomEvent('swiper-slide-changed', {
          detail: { activeIndex: this.realIndex },
        }));
      },
    },
  });
}

export function sliderData() {
  return {
    currentIndex: 0,
    slides: [],
    swiper: null,

    init() {
      // Initialize Swiper
      this.swiper = initializeSwiper();

      // Collect slide data
      this.slides = Array.from(document.querySelectorAll('.swiper-slide')).map(slide => ({
        title: slide.dataset.title,
        location: slide.dataset.location,
      }));

      // Listen to slide changes
      document.addEventListener('swiper-slide-changed', (event) => {
        const activeIndex = event.detail.activeIndex;
        this.currentIndex = activeIndex;
        this.updateActiveSlide();
      });

      // Set initial active slide
      this.updateActiveSlide();
    },

    updateActiveSlide() {
      const allSlides = document.querySelectorAll('.swiper-slide');
      allSlides.forEach((slide, index) => {
        if (index === this.swiper.realIndex) {
          slide.classList.add('swiper-slide-active'); // Mark as active
          slide.style.opacity = '1'; // Set opacity
        } else {
          slide.classList.remove('swiper-slide-active'); // Remove active class
          slide.style.opacity = '0.2'; // Lower opacity
        }
      });
    },
  };
}