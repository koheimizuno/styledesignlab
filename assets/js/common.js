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
  });
});
