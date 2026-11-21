// const { use } = require("react");

const onlineShopBtn = document.querySelectorAll("button");
const container = document.querySelector(".onlineShop__cards");
async function fetchProducts(category = "") {
  container.innerHTML = "<p>Yüklənir...</p>";
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : `https://fakestoreapi.com/products`;
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Server xətası:${response.status}`);
    }
    let products = await response.json();
    container.innerHTML = products
      .map((product) => {
        return `
        <div class="onlineShop__card">

       <img src="${product.image}" alt="" />
                <h3>${product.title}</h3>
                <p>${product.price}</p>
        </div>

        `;
      })
      .join("");
  } catch (error) {
    container.innerHTML = `<p class="error">Xəta baş verdi: ${error.message}</p>`;
  }
}
onlineShopBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.target.dataset.category;
    if (category === "allProducts") {
      fetchProducts();
    } else {
      fetchProducts(category);
    }
  });
});
fetchProducts();
