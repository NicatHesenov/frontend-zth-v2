const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

const showSlide = (index) => {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentIndex].classList.add("active");
};
btnLeft.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

btnRight.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});
