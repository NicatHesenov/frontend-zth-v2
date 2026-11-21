// DOMLAR
const fullNameInput = document.querySelector(".fullName");
const ageInput = document.querySelector(".age");
const positionInput = document.querySelector(".position");
const experienceİnput = document.querySelector(".experience");
const skillsSelect = document.querySelector("#skills");
const startDateInput = document.querySelector(".startDate");
const btn = document.querySelector(".workerManagerSystem--btn");
const tableBody = document.querySelector(".table-body"); // tbody-ni seçirik

// WORKER FUNCTION CONSTRUCTOR
function Worker(fullName, age, position, experience, skills, startDate) {
  this.id = Date.now();
  this.fullName = fullName;
  this.age = age;
  this.position = position;
  this.experience = experience;
  this.skills = skills;
  this.startDate = startDate;
}
// WORKERS ARRAY
let workers = [];
let editIndex = null;

// RENDER FUNCTION
const renderFn = () => {
  tableBody.innerHTML = "";

  workers.forEach((worker, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${worker.fullName}</td>
      <td>${worker.age}</td>
      <td>${worker.position}</td>
      <td>${worker.experience}</td>
      <td>${worker.skills}</td>
      <td>${worker.startDate}</td>
      <td>
        <button class="primary edit-btn" data-id="${worker.id}">Düzəliş</button>
        <button class="secondary remove-btn" data-id="${worker.id}">Sil</button>
      </td>
    `;

    tableBody.appendChild(tr);
  });
};

// BUTTON CLICK
btn.addEventListener("click", () => {
  let fullNameInputValue = fullNameInput.value.trim();
  let ageInputValue = ageInput.value.trim();
  let positionInputValue = positionInput.value.trim();
  let experienceInputValue = experienceİnput.value.trim();
  let skillsInputValue = skillsSelect.value;
  let startDateInputValue = startDateInput.value;
  if (
    !fullNameInputValue ||
    !ageInputValue ||
    !positionInputValue ||
    !experienceInputValue ||
    !skillsInputValue ||
    !startDateInputValue
  )
    return;

  if (editIndex !== null) {
    workers[editIndex].fullName = fullNameInputValue;
    workers[editIndex].age = ageInputValue;
    workers[editIndex].position = positionInputValue;
    workers[editIndex].experience = experienceInputValue;
    workers[editIndex].skills = skillsInputValue;
    workers[editIndex].startDate = startDateInputValue;
  } else {
    let newWorker = new Worker(
      fullNameInputValue,
      ageInputValue,
      positionInputValue,
      experienceInputValue,
      skillsInputValue,
      startDateInputValue,
    );
    workers.push(newWorker);
  }

  renderFn();

  fullNameInput.value = "";
  ageInput.value = "";
  positionInput.value = "";
  experienceİnput.value = "";
  skillsSelect.selectedIndex = 0;
  startDateInput.value = "";
  editIndex = null;
});

// REMOVE FROM
tableBody.addEventListener("click", ({ target }) => {
  const deletBtn = target.closest(".remove-btn");
  if (!deletBtn) return;
  const workerId = Number(target.getAttribute("data-id"));
  const index = workers.findIndex((p) => p.id === workerId);

  if (index !== -1) {
    workers.splice(index, 1);

    renderFn();
  }
});
// EDIT
tableBody.addEventListener("click", ({ target }) => {
  const editBtn = target.closest(".edit-btn");
  if (!editBtn) return;
  const workerId = Number(editBtn.getAttribute("data-id"));
  const index = workers.findIndex((p) => p.id === workerId);
  if (index !== -1) {
    const worker = workers[index];
    fullNameInput.value = worker.fullName;
    ageInput.value = worker.age;
    positionInput.value = worker.position;
    experienceİnput.value = worker.experience;
    skillsSelect.value = worker.skills;
    startDateInput.value = worker.startDate;
    editIndex = index;
  }
});
// REAL-TIME VALIDATION
fullNameInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  const nameRegex = /^[a-zA-ZçÇəƏğĞıİöÖşŞüÜ\s]+$/;

  if (value.length < 3 || value.length > 50 || !nameRegex.test(value)) {
    fullNameInput.style.backgroundColor = "red";
  } else {
    fullNameInput.style.backgroundColor = "";
  }
});
ageInput.addEventListener("input", (e) => {
  const value = Number(e.target.value.trim());
  if (value === "") {
    ageInput.style.backgroundColor = "";
    return;
  }
  if (value < 18 || value > 65) {
    ageInput.style.backgroundColor = "red";
  } else {
    ageInput.style.backgroundColor = "";
  }
});
positionInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  const nameRegex = /^[a-zA-ZçÇəƏğĞıİöÖşŞüÜ\s]+$/;

  if (value.length < 2 || value.length > 30 || !nameRegex.test(value)) {
    positionInput.style.backgroundColor = "red";
  } else {
    positionInput.style.backgroundColor = "";
  }
});
experienceİnput.addEventListener("input", (e) => {
  const experienceVal = Number(e.target.value.trim());
  const ageVal = Number(ageInput.value.trim());
  if (experienceVal === "") {
    experienceİnput.style.backgroundColor = "";
    return;
  }
  const maxExperience = ageVal ? ageVal - 18 : 18;
  if (experienceVal < 0 || experienceVal > maxExperience) {
    experienceİnput.style.backgroundColor = "red";
  } else {
    experienceİnput.style.backgroundColor = "";
  }
});
startDateInput.addEventListener("input", (e) => {
  const selectedDate = new Date(e.target.value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedDate >= today) {
    startDateInput.style.backgroundColor = "red";
  } else {
    startDateInput.style.backgroundColor = "";
  }
});
