/*
Sekilde gonderilen taska nezer yetirin. Ekranda bir button yerlesdirin buttona klik ederken bu modal acilmalidir.
Elave funksionalliqlar:
1. Modal acildiqdan sonra gorunen x buttonuna click edersek modal baglanmalidir
2. Modal acildiqdan sonra gorunen "No cancel" buttonuna click edersek modal baglanmalidir
3. Modal acilir ve input doldurulduqdan sonra gorunen "Yes, Confirm" buttonuna click edersek modal baglanmalidir ve inputun deyerini consola yaz ve ya alert olaraq ekranda goster
*/
const modalOpen = document.querySelector(".modal-open");
const modlaConainer = document.querySelector(".modla-conainer");
const closeX = document.querySelector("i");
const closeCansel = document.querySelector(".modal-cancel");
const confirmBtn = document.querySelector(".modal-confirm");
const input = document.querySelector(".input");
modalOpen.addEventListener("click", () => {
  modlaConainer.classList.remove("hidden");
  modalOpen.classList.add("hidden");
});
closeX.addEventListener("click", () => {
  modlaConainer.classList.add("hidden");
  modalOpen.classList.remove("hidden");
});
closeCansel.addEventListener("click", () => {
  modlaConainer.classList.add("hidden");
  modalOpen.classList.remove("hidden");
});
confirmBtn.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue.trim() === "") {
    alert("Inputu doldurun");
    return;
  }
  alert("Dəyər:" + inputValue);
  inputValue = "";
  modlaConainer.classList.add("hidden");
  modalOpen.classList.remove("hidden");
});
