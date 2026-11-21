const hamburgerIcon = document.querySelector(".fa-bars");
const hamburgerMenu = document.querySelector(".hamburger-menu-container");
const navMenu = document.querySelector(".nav-menu-container");
const hamburgerClose = document.querySelector(".fa-x");
hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.classList.remove("hidden");
  navMenu.classList.add("hidden");
});
hamburgerClose.addEventListener("click", () => {
  hamburgerMenu.classList.add("hidden");
  navMenu.classList.remove("hidden");
});
