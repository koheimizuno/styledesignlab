let lastScrollTop = 0;
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

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
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
    } else if (scrollTop < lastScrollTop) {
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
    lastScrollTop = scrollTop;

    let topHeroTxtOffset = $(".top-hero-txt").offset().top;
    let windowHeight = $(window).height();

    if (scrollTop > topHeroTxtOffset - windowHeight) {
      gsap.to(".top-hero-txt", {
        transform: "translateY(-50%)",
        opacity: "1",
        duration: 2,
        ease: "power2.out",
      });
    } else {
      gsap.to(".top-hero-txt", {
        transform: "translateY(0)",
        opacity: "0",
        duration: 2,
        ease: "power2.out",
      });
    }
  });
});
