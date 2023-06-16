let currentIndex = 1;

function changeImage() {
  const sliderImage = document.getElementById("slider-image");
  let nextImagePath = "./assets/slider" + currentIndex + ".png";

  sliderImage.src = nextImagePath;
  currentIndex++;

  if (currentIndex > 5) {
    currentIndex = 1;
  }
}

setInterval(changeImage, 6000);

// const sliderImages = document.querySelector(".slider-section");
// const sliderImage = document.querySelectorAll(".slider-section #slider-image");

// let idx = 0;

// function slider() {
//   idx++;

//   if (idx > sliderImage.lenght - 1) {
//     idx = 0;
//   }

//   sliderImages.style.transform = `translateX(${-idx * 500}px)`;
// }

// setInterval(slider, 1800);
