const input = document.querySelector("input");
const addBtn = document.querySelector(".todoApp__input--addBtn");
const todoList = document.querySelector(".todoApp__list");
const pendingCount = document.querySelector(".pendingCount");
const clearAllBtn = document.querySelector(".todoApp__summer--clearAll");
let todos = JSON.parse(localStorage.getItem("todos")) || [];
const saveToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
const updateCount = () => {
  pendingCount.textContent = todos.length;
};
const createTodoElement = (taskText) => {
  const todoApp__item = document.createElement("div");
  todoApp__item.className = "todoApp__item";
  const p = document.createElement("p");
  const deletBtn = document.createElement("button");
  deletBtn.className = "todoApp__item--deletBtn";
  const i = document.createElement("i");
  i.className = "fa-solid fa-trash";
  p.textContent = taskText;
  deletBtn.addEventListener("click", () => {
    todoApp__item.remove();
    todos = todos.filter((item) => item !== taskText);
    saveToLocalStorage();
    updateCount();
  });
  todoList.appendChild(todoApp__item);
  todoApp__item.appendChild(p);
  todoApp__item.appendChild(deletBtn);
  deletBtn.appendChild(i);
};
const addTheTask = () => {
  const inputValue = input.value.trim();
  if (inputValue === "") return;

  todos.push(inputValue);
  saveToLocalStorage();
  createTodoElement(inputValue);

  input.value = "";
  updateCount();
};
todos.forEach((task) => {
  createTodoElement(task);
});
updateCount();
addBtn.addEventListener("click", addTheTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTheTask();
  }
});
clearAllBtn.addEventListener("click", () => {
  todoList.innerHTML = "";
  todos = [];
  saveToLocalStorage();
  updateCount();
  input.value = "";
});
