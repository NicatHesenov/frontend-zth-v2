const addBtn = document.querySelector(".add-btn");
const input = document.getElementById("input");
const toDoListTask = document.querySelector(".toDoList__task");
const toDoList = () => {
  let inputValue = input.value.trim();
  if (inputValue === "") return;
  //toDoList__item
  const toDoListItem = document.createElement("div");
  toDoListItem.className = "toDoList__item";

  // p
  const p = document.createElement("p");
  p.textContent = inputValue;
  // close-btn
  const closeBtn = document.createElement("span");
  closeBtn.className = "close-btn";
  closeBtn.textContent = "X";
  closeBtn.addEventListener("click", () => {
    toDoListItem.remove();
  });
  //   appendchild
  toDoListTask.appendChild(toDoListItem);
  toDoListItem.appendChild(p);
  toDoListItem.appendChild(closeBtn);
  input.value = "";
};

addBtn.addEventListener("click", toDoList);
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    toDoList();
  }
});
