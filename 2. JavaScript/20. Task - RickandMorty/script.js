const input = document.querySelector("input");
const container = document.querySelector(".characters");
const btn = document.querySelector("button");
let page = 1;
async function fetchCharacters(pageNumber) {
  try {
    if (pageNumber === 1) {
      container.innerHTML = "<p>Yüklənir...</p>";
    }
    let response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${pageNumber}`,
    );

    if (!response.ok) {
      throw new Error(`Server Xətası:${response.status} `);
    }
    let datas = await response.json();

    let characters = datas.results;

    if (pageNumber === 1) {
      container.innerHTML = "";
    }
    let htmlContent = characters
      .map((charact) => {
        return `
        <div class="characters__box">
          <img src="${charact.image}" alt="" />
          <h2>${charact.name}</h2>
          <p>${charact.gender}</p>
        </div>
      `;
      })
      .join("");

    container.innerHTML += htmlContent;
    if (datas.info.next === null) {
      btn.style.display = "none";
    } else {
      btn.style.display = "block";
    }
  } catch (error) {
    container.innerHTML = `<p class="not-found">Nəticə tapılmadı ❌</p>`;
    btn.style.display = "none";
  }
}
fetchCharacters(page);
btn.addEventListener("click", () => {
  page++;
  fetchCharacters(page);
});

async function searchCharacters(name) {
  try {
    btn.style.display = "none";
    container.innerHTML = "<p>Yüklənir...</p>";
    let response = await fetch(
      `https://rickandmortyapi.com/api/character?name=${name}`,
    );
    if (!response.ok) {
      throw new Error(`Server Xətası:${response.status} `);
    }
    if (response.status === 404) {
      container.innerHTML = "<p>Nəticə tapılmadı</p>";
      return;
    }
    let datas = await response.json();
    let characters = datas.results;

    let htmlContent = characters
      .map((charact) => {
        return `
        <div class="characters__box">
          <img src="${charact.image}" alt="" />
          <h2>${charact.name}</h2>
          <p>${charact.gender}</p>
        </div>
      `;
      })
      .join("");

    container.innerHTML = htmlContent;
  } catch (error) {
    container.innerHTML = `<p class="not-found">Nəticə tapılmadı ❌</p>`;
  }
}
input.addEventListener("input", (e) => {
  let value = e.target.value.trim();

  if (value === "") {
    page = 1;
    fetchCharacters(page);
  } else {
    searchCharacters(value);
  }
});
