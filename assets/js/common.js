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

  gsap.registerPlugin(ScrollTrigger);
});
