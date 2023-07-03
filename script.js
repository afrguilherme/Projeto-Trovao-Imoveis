document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: "boolean",
    },
    keyboard: true,
  });
});
