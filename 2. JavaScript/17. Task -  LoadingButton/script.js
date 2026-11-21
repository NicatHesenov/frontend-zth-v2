const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.disabled = true;
  btn.textContent = "Adding To Cart...";
  btn.style.backgroundColor = "red";
  setTimeout(() => {
    btn.textContent = "Added To Cart";
    btn.style.backgroundColor = "green";
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "Add To Cart";
      btn.style.backgroundColor = "";
    }, 2000);
  }, 3000);
});
