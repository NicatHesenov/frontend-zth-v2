const btn = document.querySelector("button");
const minute = document.querySelector("#minute");
const timeBox = document.querySelector(".time-box");
let count = 10;
btn.addEventListener("click", () => {
  btn.disabled = true;
  let timer = setInterval(() => {
    count--;
    minute.textContent = count;
    if (count <= 3 && count > 0) {
      timeBox.style.backgroundColor = "orange";
    }
    if (count === 0) {
      clearInterval(timer);
      timeBox.style.backgroundColor = "red";
      timeBox.innerHTML = "Time's up";
    }
  }, 1000);
});
