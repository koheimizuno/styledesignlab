new Swiper(".hero-swiper", {
  loop: true,
  effect: "fade",
  speed: 5000,
  autoplay: {
    delay: 2000,
  },
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

new Swiper(".contents-swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  centeredSlides: true,
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 100,
    },
  },
});

new Swiper(".works-swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  centeredSlides: false,
  spaceBetween: 30,
  slidesPerView: "auto",
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 100,
    },
  },
});

new Swiper(".topics-swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  centeredSlides: false,
  spaceBetween: 30,
  slidesPerView: "auto",
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 100,
    },
  },
});
