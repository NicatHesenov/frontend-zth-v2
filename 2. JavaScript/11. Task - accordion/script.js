const accordionItems = document.querySelectorAll(".item");
accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    accordionItems.forEach((el) => el.classList.remove("active"));
    item.classList.toggle("active");
  });
});
