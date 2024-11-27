let header = $("header");

$(document).ready(function () {
  $(".hamburger-btn").click(() => {
    $(".hamburger-sec").css("transform", "translateX(0)");
  });

  $(".close-btn").click(() => {
    $(".hamburger-sec").css("transform", "translateX(100%)");
  });

  $(".category-header").click(() => {
    $(".category").toggleClass("active");
    $(".category ul").toggleClass("change");
    $(".category-btn").toggleClass("change");
  });

  // Hero Image Animation
  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    let windowHeight = $(window).height();

    if (scrollTop !== 0) {
      if ($(window).width() > 768) {
        gsap.to(header.find("nav"), { padding: "24px 0 18px", duration: 0.5 });
      } else {
        gsap.to(header.find("nav"), {
          padding: "16px 16px 12px",
          duration: 0.5,
        });
        gsap.to(header.find(".logo"), {
          height: "50px",
          duration: 0.5,
        });
      }
    } else {
      if ($(window).width() > 768) {
        gsap.to(header.find("nav"), { padding: "80px 0 64px", duration: 0.5 });
      } else {
        gsap.to(header.find("nav"), {
          padding: "24px 16px 18px",
          duration: 0.5,
        });
        gsap.to(header.find(".logo"), {
          height: "70px",
          duration: 0.5,
        });
      }
    }

    // Main Visual Animation
    let topHeroTxtOffset = $(".main-visual-txt").offset().top;

    if (scrollTop > topHeroTxtOffset - windowHeight) {
      gsap.to(".main-visual-txt", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(".main-visual-txt", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });
    }

    // Fade Up Animation
    let fadeUpElements = $(".fade-up");

    fadeUpElements.each(function () {
      let elementOffset = $(this).offset().top;
      if (scrollTop + windowHeight > elementOffset) {
        gsap.to($(this), {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          stagger: 1,
        });
      } else {
        gsap.to($(this), {
          opacity: 0,
          y: 50,
          duration: 2,
          ease: "power2.out",
        });
      }
    });
  });
});
