// Source for js/site.js. Rebuild only if you change this file (see README).
import 'swiper/css';
import Alpine from 'alpinejs';
import Swiper, { Navigation } from 'swiper';
import ScrollReveal from 'scrollreveal';
import 'fslightbox';

// Menu, sticky header and back-to-top button
window.Alpine = Alpine;
Alpine.start();

// Testimonials carousel (home page)
if (document.querySelector('.testimonial-01')) {
  new Swiper('.testimonial-01', {
    modules: [Navigation],
    loop: true,
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  });
}

// Fade-in animations
window.sr = ScrollReveal({ distance: '60px', duration: 2800, reset: false });
sr.reveal('.animate_top', { origin: 'top', interval: 100 });
sr.reveal('.animate_left', { origin: 'left', interval: 100 });
sr.reveal('.animate_right', { origin: 'right', interval: 100 });
