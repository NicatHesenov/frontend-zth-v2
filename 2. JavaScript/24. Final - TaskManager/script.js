// DOM
const lightMode = document.querySelector(".fa-sun");
const darkMode = document.querySelector(".fa-moon");
const themeToggleBtn = document.querySelector(".taskManager__header__right");
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const prioritySelect = document.querySelector("#prioritySelect");
const submitBtn = document.querySelector("#submitBtn");
const taskList = document.querySelector("#taskList");
const taskManagerEmpty = document.querySelector(".taskManager__empty");
// count
const totalCount = document.querySelector("#totalCount");
const activeCount = document.querySelector("#activeCount");
const completedCount = document.querySelector("#completedCount");
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Localstorage
let theme = localStorage.getItem("theme") || "light";
let toDo = JSON.parse(localStorage.getItem("toDo")) || [];
const saveToLocalStorage = () => {
  localStorage.setItem("toDo", JSON.stringify(toDo));
};
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// OBJECTS
const PRIORITY_CONFIG = {
  low: { label: "Aşağı", modifier: "taskManager__item-badge--low" },
  medium: { label: "Orta", modifier: "taskManager__item-badge--medium" },
  high: { label: "Yüksək", modifier: "taskManager__item-badge--high" },
};
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Function
const applyTheme = (theme) => {
  const isDark = theme === "dark";
  darkMode.classList.toggle("hidden", isDark);
  lightMode.classList.toggle("hidden", !isDark);
  document.body.classList.toggle("dark", isDark);

  localStorage.setItem("theme", theme);
};
const createElement = (task) => {
  // li
  const taskManagerItem = document.createElement("li");
  taskManagerItem.className = "taskManager__item";
  taskManagerItem.dataset.id = task.id;
  if (task.completed) {
    taskManagerItem.classList.add("taskManager__item--completed");
  }
  //   left
  const taskManagerItemLeft = document.createElement("div");
  taskManagerItemLeft.className = "taskManager__item-left";

  const taskManagerItemCheckbox = document.createElement("input");
  taskManagerItemCheckbox.type = "checkbox";
  taskManagerItemCheckbox.className = "taskManager__item-checkbox";
  taskManagerItemCheckbox.checked = task.completed;
  const taskManagerİtemText = document.createElement("span");
  taskManagerİtemText.className = "taskManager__item-text";
  taskManagerİtemText.textContent = task.text;
  //   ||||||||||||||||||||||||||||||||||||||||||||||||||||
  // RIGHT
  const priorityInfo = PRIORITY_CONFIG[task.priority] || PRIORITY_CONFIG.medium;
  const taskManagerItemRight = document.createElement("div");
  taskManagerItemRight.className = "taskManager__item-right";

  const taskManagerİtemBadge = document.createElement("span");
  taskManagerİtemBadge.className = `taskManager__item-badge ${priorityInfo.modifier}`;
  taskManagerİtemBadge.textContent = priorityInfo.label;

  const taskManagerBtnEdit = document.createElement("button");
  taskManagerBtnEdit.type = "button";
  taskManagerBtnEdit.className =
    "taskManager__item-btn taskManager__item-btn--edit";
  taskManagerBtnEdit.title = "Redaktə et";
  const editIcon = document.createElement("i");
  editIcon.className = "fa-solid fa-pen";
  taskManagerBtnEdit.appendChild(editIcon);

  const taskManagerBtnDelet = document.createElement("button");
  taskManagerBtnDelet.type = "button";
  taskManagerBtnDelet.className =
    "taskManager__item-btn taskManager__item-btn--delete";
  taskManagerBtnDelet.title = "Sil";
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-regular fa-trash-can";
  taskManagerBtnDelet.appendChild(deleteIcon);
  // |||||||||||||||||||||||||||||||||||||||||||||||||||
  //   appenchild
  taskList.appendChild(taskManagerItem);
  //   li container
  taskManagerItem.appendChild(taskManagerItemLeft);
  taskManagerItem.appendChild(taskManagerItemRight);
  //   taskManager__item-left
  taskManagerItemLeft.appendChild(taskManagerItemCheckbox);
  taskManagerItemLeft.appendChild(taskManagerİtemText);
  //   taskManager__item-right
  taskManagerItemRight.appendChild(taskManagerİtemBadge);
  taskManagerItemRight.appendChild(taskManagerBtnEdit);
  taskManagerItemRight.appendChild(taskManagerBtnDelet);
};

const addTask = () => {
  const text = taskInput.value.trim();
  if (!text) return false;
  const newTask = {
    id: Date.now().toString(),
    text,
    priority: prioritySelect.value,
    completed: false,
  };
  toDo.push(newTask);
  saveToLocalStorage();

  taskInput.value = "";
  prioritySelect.value = "medium";
  return true;
};

const renderFn = () => {
  taskList.innerHTML = "";
  toDo.forEach((item) => {
    createElement(item);
  });
  updateState();
  if (toDo.length === 0) {
    taskManagerEmpty.style.display = "flex";
  } else {
    taskManagerEmpty.style.display = "none";
  }
};

const updateState = () => {
  const total = toDo.length;
  const completed = toDo.filter((task) => task.completed).length;
  const active = total - completed;

  totalCount.textContent = total;
  activeCount.textContent = active;
  completedCount.textContent = completed;
};
const checkFn = (e) => {
  if (!e.target.classList.contains("taskManager__item-checkbox")) return;
  const taskItem = e.target.closest(".taskManager__item");
  const taskId = taskItem?.dataset.id;
  if (!taskId) return;
  const targetTask = toDo.find((task) => task.id == taskId);
  if (!targetTask) return;
  targetTask.completed = e.target.checked;
  saveToLocalStorage();
  renderFn();
};
const deletFn = (e) => {
  const deletBtn = e.target.closest(".taskManager__item-btn--delete");
  if (!deletBtn) return;
  const taskİtem = deletBtn.closest(".taskManager__item");
  const taskId = taskİtem?.dataset.id;
  if (!taskId) return;
  toDo = toDo.filter((task) => task.id != taskId);
  saveToLocalStorage();
  renderFn();
};
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// EVENTS
themeToggleBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  applyTheme(theme);
});
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (addTask()) {
    renderFn();
  }
});
taskList.addEventListener("change", checkFn);
taskList.addEventListener("click", deletFn);
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// FUNCTION CALL
applyTheme(theme);
renderFn();
