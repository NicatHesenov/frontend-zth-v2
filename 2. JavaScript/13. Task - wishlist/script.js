// DATAS
let datas = [
  {
    id: 1,
    img: "product1.jpeg",
    title: "Headphones",
    qiymet: 1200,
    stok: 15,
    button: "primary",
  },
  {
    id: 2,
    img: "product2.jpeg",
    title: "Photograph",
    qiymet: 2500,
    stok: 7,
    button: "secondary",
  },
  {
    id: 3,
    img: "product3.jpeg",
    title: "Watch",
    qiymet: 150,
    stok: 50,
    button: "third",
  },
];
// DOMS
const productsContainer = document.querySelector(".wishlist__products");
const fovariteContainer = document.querySelector(".wishlist__favorites");
const button = document.querySelectorAll("button");
// FAVORİ ARRAY
const favorites = [];

// RENDERPRODUCST
const renderProducsts = () => {
  productsContainer.innerHTML = "";
  datas.forEach((product) => {
    const isFav = favorites.some((fav) => fav.id === product.id);

    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
     <div class="wishlist__products--card">
            <img src="./assets/${product.img} " alt="" />
            <h1 class="title">${product.title}</h1>
            <p class="price">Price: ${product.qiymet}</p>
            <p class="stok">Stok: ${product.stok}</p>
            <button class="${product.button} favBtn "data-id="${product.id}">${isFav ? "Added" : "Add To Cart"}</button>
          </div>
    `;
    productsContainer.appendChild(productCard);
  });

  addToCart();
};
const renderFavorites = () => {
  fovariteContainer.innerHTML = "";

  favorites.forEach((product) => {
    const productCard = document.createElement("div");

    productCard.className = "product-card";

    productCard.innerHTML = `

     <div class="wishlist__favorites--card">

            <img src="./assets/${product.img} " alt="" />

            <h1 class="title">${product.title}</h1>

            <p class="price">Price: ${product.qiymet}</p>

            <p class="stok">Stok: ${product.stok}</p>

            <button class="${product.button} remove-btn" data-id="${product.id}">Remove</button>

          </div>

    `;

    fovariteContainer.appendChild(productCard);
  });
  removeFromCart();
};
const addToCart = () => {
  const favBtn = document.querySelectorAll(".favBtn");
  favBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const producId = Number(e.target.getAttribute("data-id"));

      const productToFav = datas.find((p) => p.id === producId);

      const index = favorites.findIndex((fav) => fav.id === producId);
      if (index === -1) {
        favorites.push(productToFav);
      } else {
        favorites.splice(index, 1);
      }

      console.log("Favoritlər siyahısı:", favorites);
      renderProducsts();
      renderFavorites();
    });
  });
};

const removeFromCart = () => {
  const removeBtn = document.querySelectorAll(".remove-btn");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const producId = Number(e.target.getAttribute("data-id"));
      const index = favorites.findIndex((p) => p.id === producId);

      if (index !== -1) {
        favorites.splice(index, 1);
      }
      renderFavorites();
      renderProducsts();
    });
  });
};
renderProducsts();
