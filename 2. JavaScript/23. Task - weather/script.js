const weatherInp = document.querySelector(".weather__inp--inp");

const weatherContent = document.querySelector(".weather__content");
const weatherVideo = document.querySelector(".weather__video");
// FUNCTION
const createCart = (datas) => {
  changeVideos(datas.weather[0].main);

  weatherContent.innerHTML = `
   <p class="weather__content--title">${datas.name} <span>${datas.sys.country}</span></p>
          <p class="weather__content--degre">${Math.round(datas.main.temp)}°C</p>
          <p class="weather__content--description">${datas.weather[0].description}</p>
          <img class="weather__content--icon" src="https://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png" alt="weather icon" />
  `;
};
const changeVideos = (condition) => {
  let src = "./assets/default.mp4";

  if (condition === "Clear") {
    src = "./assets/clearSky.mp4";
  } else if (condition === "Rain" || condition === "Drizzle") {
    src = "./assets/rain.mp4";
  } else if (condition === "Clouds") {
    src = "./assets/cloud.mp4";
  } else if (condition === "Snow") {
    src = "./assets/snow.mp4";
  } else if (
    condition === "Mist" ||
    condition === "Fog" ||
    condition === "Haze"
  ) {
    src = "./assets/mist.mp4";
  }

  if (!weatherVideo.getAttribute("src").includes(src)) {
    weatherVideo.src = src;
  }
};
async function addCity(city) {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${CONFIG.API_KEY}&units=metric&lang=az`,
    );
    if (!res.ok) {
      throw new Error(`Server xətası:${res.status}`);
    }
    let datas = await res.json();
    console.log(datas);
    createCart(datas);
  } catch (error) {
    console.log(`Xəta:${error.message}`);
    weatherContent.innerHTML = `<p style="color: #ff7675;">Şəhər tapılmadı. Yenidən yoxlayın.</p>`;
  }
}

// EVENTS
weatherInp.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && weatherInp.value.trim() !== "") {
    addCity(weatherInp.value.trim());
    weatherInp.value = "";
  }
});
