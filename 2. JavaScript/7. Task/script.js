// Light/Dark Mode
//     1.    HTML-də iki ədəd ikon yerləşdir (günəş və ay).
//     2.    Səhifə açılarkən light mode aktiv olsun.
//     3.    Günəş ikonuna klik ediləndə səhifə dark mode-a keçsin və yalnız ay ikonu görünsün.
//     4.    Ay ikonuna klik ediləndə səhifə yenidən light mode-a keçsin və yalnız günəş ikonu görünsün.

// Nəticədə:
//     •    Light mode → ağ fon, qara yazı, yalnız günəş ikonu görünür.
//     •    Dark mode → qara fon, ağ yazı, yalnız ay ikonu görünür.
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const body = document.querySelector("body");
sun.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  body.style.color = "white";

  sun.classList.add("hidden");
  moon.classList.remove("hidden");
});
moon.addEventListener("click", () => {
  body.style.backgroundColor = "white";
  body.style.color = "black";

  moon.classList.add("hidden");
  sun.classList.remove("hidden");
});
