document
  .getElementsByClassName("hamburger-btn")[0]
  .addEventListener("click", () => {
    document.querySelector(".hamburger-sec").style.transform = "translateX(0)";
  });

document
  .getElementsByClassName("close-btn")[0]
  .addEventListener("click", () => {
    document.querySelector(".hamburger-sec").style.transform =
      "translateX(100%)";
  });

// Works Page
document
  .getElementsByClassName("category-header")[0]
  ?.addEventListener("click", () => {
    document.querySelector(".category").classList.toggle("active");
    document.querySelector(".category ul").classList.toggle("change");
    document.querySelector(".category-btn").classList.toggle("change");
  });
