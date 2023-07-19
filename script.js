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

const backToTop = () => {
  const backToTopBtn = document.querySelector(".top-arrow-btn");
  if (window.scrollY >= 100) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
};

window.addEventListener("scroll", backToTop);

function showMobileMenu() {
  const mobileMenu = document.querySelector(".menu-mobile");
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const menuIconSrc = mobileMenuIcon.getAttribute("src");

  if (menuIconSrc === "./assets/menu-icon.png") {
    mobileMenuIcon.setAttribute("src", "./assets/close-button.png");
    mobileMenu.style.maxHeight = "100vh";
    document.documentElement.style.overflow = "hidden";
  } else if (menuIconSrc === "./assets/close-button.png") {
    mobileMenuIcon.setAttribute("src", "./assets/menu-icon.png");
    mobileMenu.style.maxHeight = "0";
    document.documentElement.style.overflow = "auto";
  }
}

function showProperties() {
  const secundaryProperties = document.querySelectorAll(".secundary-property");
  const seeMoreBtn = document.querySelector(".see-more-btn");
  const windowWidth = window.innerWidth;

  if (windowWidth < 1010) {
    for (let i = 0; i < secundaryProperties.length; i++) {
      let property = secundaryProperties[i];
      const currentDisplay = property.style.display;

      if (currentDisplay === "none") {
        property.style.display = "flex";
        seeMoreBtn.textContent = "Ver Menos";
      } else {
        property.style.display = "none";
        seeMoreBtn.textContent = "Ver Mais";
      }
    }
  }
}
