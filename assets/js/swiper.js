document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".hero-swiper", {
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 2000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
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
});
