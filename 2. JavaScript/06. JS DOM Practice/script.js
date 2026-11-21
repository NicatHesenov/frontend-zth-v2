// 🔹HTML-də bir kvadrat qutu (div) düzəlt – ölçüsü məsələn 200x200 px olsun. Əvvəlcə rəngi ağ olsun.

// 3 dənə button əlavə et: Qırmızı, Yaşıl, Mavi.

// JavaScript-də:
// Eyni zamanda qutunun içində həmin rəngin adı mətndə görünsün (məs: “Qırmızı”).
// Hər bir button-a klik olanda həmin rəng qutunun fonuna (backgroundColor) yazılsın.
// İstifadəçi hansı rəngə klik edirsə, qutu həm rəngini dəyişəcək, həm də içində həmin rəngin adı yazılacaq.
const box = document.querySelector(".box");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
red.addEventListener("click", (e) => {
  box.style.backgroundColor = "red";
  box.textContent = "red";
  box.style.color = "white";
  box.style.textAlign = "center";
});
green.addEventListener("click", (e) => {
  box.style.backgroundColor = "green";
  box.textContent = "green";
  box.style.color = "white";
  box.style.textAlign = "center";
});
blue.addEventListener("click", (e) => {
  box.style.backgroundColor = "blue";
  box.textContent = "blue";
  box.style.color = "white";
  box.style.textAlign = "center";
});
///////////////////////////////////////////////////////////////////////////
// 🔹HTML-də bir paragraf (p) olsun, məsələn: “Salam, mən görünürəm!”

// Bir button olsun: “Gizlət/Göstər” yazılı.

// JavaScript-də:

// İstifadəçi button-a klik edəndə:
// əgər paragraf görünürsə → gizlənsin
// əgər paragraf gizlidirsə → yenidən görünsün
// Düyməyə hər dəfə basanda mətn bir dəfə gizlənəcək, bir dəfə görünəcək.
const task_two_text = document.querySelector(".taskTwoText");
const task_two_btn = document.querySelector(".taskTwoBtn");
task_two_btn.addEventListener("click", () => {
  task_two_text.classList.toggle("hidden");

  if (task_two_text.classList.contains("hidden")) {
    task_two_btn.textContent = "Göstər";
  } else {
    task_two_btn.textContent = "Gizlət";
  }
});
///////////////////////////////////////////////////////////////////////////
// 🔹HTML-də bir div olsun: “🎈” emojisi ilə balon təsviri.

// Bir button əlavə et: “Şişir”.
// JavaScript-də:
// Düyməyə klik edəndə div-in ölçüləri (style.width və style.height) bir az artsın.
// Div-in içindəki emoji (innerText) mərkəzdə qalsın.
// İstifadəçi button-a hər klik etdikcə qırmızı balon böyüyəcək, vizual olaraq balon şişmiş kimi görünəcək.
const balon = document.querySelector(".balon");
const balonBtn = document.querySelector(".şişir");
let balonŞişir = 20;
balonBtn.addEventListener("click", () => {
  balonŞişir++;
  balon.style.fontSize = balonŞişir + "px";
});
///////////////////////////////////////////////////////////////////////////
// 🔹Bir <span> və iki button (“+1”, “-1”).
// Button-lara klik ediləndə span içindəki sayı artır və ya azalır (innerText).
// İstifadəçi kliklərlə sayğacı idarə edir.
const plus = document.querySelector(".plus");
const countHtml = document.querySelector(".count");
const minus = document.querySelector(".minus");
let count = 0;
plus.addEventListener("click", () => {
  count++;
  countHtml.innerText = count;
});
minus.addEventListener("click", () => {
  count--;
  countHtml.innerText = count;
});
///////////////////////////////////////////////////////////////////////////
// 🔹Div və iki button (“Sağa”, “Sola”).
// Button-lar klik edildikdə div marginLeft və ya marginRight dəyişir.
// Qutu kliklə sağa və sola hərəkət edir.
const taskFiveDiv = document.querySelector(".taskFive-div");
const taskFiveRight = document.querySelector(".taskFive-right");
const taskFiveLeft = document.querySelector(".taskFive-left");
let currenPosition = 0;
taskFiveRight.addEventListener("click", () => {
  currenPosition += 40;
  taskFiveDiv.style.marginLeft = currenPosition + "px";
});
taskFiveLeft.addEventListener("click", () => {
  currenPosition -= 40;
  taskFiveDiv.style.marginLeft = currenPosition + "px";
});
