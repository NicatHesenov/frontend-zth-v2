// DOM
const searchingInp = document.querySelector(".container__searchings--input");
const searchingSelc = document.querySelector(".container__searchings--select");
const nameInp = document.querySelector(".container__inputContainer--name");
const surnameInp = document.querySelector(
  ".container__inputContainer--surname",
);
const groupInp = document.querySelector(".container__inputContainer--group");
const addBtn = document.querySelector(".addBtn");
const containerTasks = document.querySelector(".container__tasks");
const body = document.querySelector("body");
const sunBtn = document.querySelector(".fa-sun");
const moonBtn = document.querySelector(".fa-moon");

// FUNCTİON CONS
function Student(name, surname, group) {
  this.id = Date.now();
  this.name = name;
  this.surname = surname;
  this.group = group;
}
// LOCALSTORAGE
let mod = localStorage.getItem("theme") || "light";
if (mod === "dark") {
  sunBtn.classList.remove("hidden");
  moonBtn.classList.add("hidden");
  body.style.backgroundColor = "black";
}

let students = JSON.parse(localStorage.getItem("students")) || [];
const saveToLocalStorage = () => {
  localStorage.setItem("students", JSON.stringify(students));
};

// FUNCTİONS
const createStudentElement = (studentObj) => {
  ////////////////////////////////////////////////////
  const task = document.createElement("div");
  task.className = "container__task";
  const p = document.createElement("p");
  const button = document.createElement("button");

  ///////////////////////////////////////////////////////////////
  button.addEventListener("click", () => {
    task.remove();
    students = students.filter((item) => item.id !== studentObj.id);
    saveToLocalStorage();
  });
  ////////////////////////////////////////////////////
  button.textContent = "Sil";
  p.textContent = `${studentObj.name} ${studentObj.surname} ${studentObj.group}`;
  containerTasks.appendChild(task);
  task.appendChild(p);
  task.appendChild(button);
};
const addTask = () => {
  const nameInpVal = nameInp.value.trim();
  const surnameInpVal = surnameInp.value.trim();
  const groupInpVal = groupInp.value.trim();
  if (nameInpVal === "" || surnameInpVal === "" || groupInpVal === "") return;

  const newStudent = new Student(nameInpVal, surnameInpVal, groupInpVal);

  renderStudents();
  students.push(newStudent);
  saveToLocalStorage();
  ///////////////////////////////////////
  nameInp.value = "";
  surnameInp.value = "";
  groupInp.value = "";
};

const renderStudents = () => {
  const searchingInpVal = searchingInp.value.trim().toLowerCase();
  const sortVal = searchingSelc.value;
  containerTasks.innerHTML = "";
  let filteredStudents = students.filter(
    (item) =>
      item.name.toLowerCase().includes(searchingInpVal) ||
      item.surname.toLowerCase().includes(searchingInpVal) ||
      item.group.toLowerCase().includes(searchingInpVal),
  );
  if (sortVal === "name") {
    filteredStudents.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortVal === "surname") {
    filteredStudents.sort((a, b) => a.surname.localeCompare(b.surname));
  } else if (sortVal === "group") {
    filteredStudents.sort((a, b) => a.group - b.group);
  }
  filteredStudents.forEach((item) => createStudentElement(item));
};

// EVENTS
searchingInp.addEventListener("input", renderStudents);
searchingSelc.addEventListener("change", renderStudents);
addBtn.addEventListener("click", (e) => {
  addTask();
});
moonBtn.addEventListener("click", () => {
  mod = "dark";
  localStorage.setItem("theme", mod);
  sunBtn.classList.remove("hidden");
  moonBtn.classList.add("hidden");
  body.style.backgroundColor = "black";
});
sunBtn.addEventListener("click", () => {
  mod = "light";
  localStorage.setItem("theme", mod);
  sunBtn.classList.add("hidden");
  moonBtn.classList.remove("hidden");
  body.style.backgroundColor = "white";
});
renderStudents();
