const nameInput = document.querySelector(".name-input");
const authorInput = document.querySelector(".author-input");
const checkInput = document.querySelector(".check-input");
const libraryBtn = document.querySelector(".library-btn");
const cardContainer = document.querySelector(".card__container");
function Book(title, author, isRead) {
  this.id = Date.now();
  this.title = title;
  this.author = author;
  this.isRead = isRead;
}
let Books = [];

const renderFn = () => {
  cardContainer.innerHTML = "";
  Books.forEach((book) => {
    // create content
    const cardContent = document.createElement("div");
    cardContent.className = "card__content";
    cardContent.innerHTML = `
            <h2>${book.title}</h2>
            <p>Müəllif: ${book.author}</p>
            <p>Status: ${book.isRead ? "Oxunub" : "Oxunmayıb"}</p>
  `;
    cardContainer.appendChild(cardContent);
  });
};
libraryBtn.addEventListener("click", () => {
  const nameInputValue = nameInput.value.trim();
  const authorInputValue = authorInput.value.trim();
  const isChecked = checkInput.checked;
  if (!nameInputValue || !authorInputValue) return;
  const newBook = new Book(nameInputValue, authorInputValue, isChecked);
  Books.push(newBook);
  renderFn();
  nameInput.value = "";
  authorInput.value = "";
  checkInput.checked = false;
});
