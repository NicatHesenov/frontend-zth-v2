const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");

const setTimeoutFn = () => {
  setTimeout(() => {
    red.style.backgroundColor = "red";
    green.style.backgroundColor = "white";
    setTimeout(() => {
      yellow.style.backgroundColor = "yellow";
      red.style.backgroundColor = "white";
      setTimeout(() => {
        green.style.backgroundColor = "green";
        yellow.style.backgroundColor = "white";
        setTimeoutFn();
      }, 3000);
    }, 1000);
  }, 3000);
};
setTimeoutFn();
