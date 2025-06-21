// let addBtn = document.getElementById("addBtn");
// let taskInput = document.getElementById("taskInput");
// let taskList = document.getElementById("taskList");

// addBtn.addEventListener("click", function(){
//     console.log("Click")
//     let task = taskInput.value.trim();
//     if( task !== ""){
//         let li = document.createElement("li");
//         li.textContent = task;
//         taskList.appendChild(li);
//         taskInput.value = "";
//     }

// });

// let addBtn = document.getElementById("addBtn");
// let taskInput = document.getElementById("taskInput");
// let taskList = document.getElementById("taskList");

// addBtn.addEventListener("click", function () {
//   let task = taskInput.value.trim();
//   if (task !== "") {
//     let li = document.createElement("li");

//     // ✅ Task text
//     let span = document.createElement("span");
//     span.textContent = task;
//     span.classList.add("task-text");

//     // ✅ Complete Button
//     let completeBtn = document.createElement("button");
//     completeBtn.textContent = "✔";
//     completeBtn.classList.add("complete-btn");

//     // ✅ Delete Button
//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "🗑️";
//     deleteBtn.classList.add("delete-btn");

//     // ✅ Add to <li> and then to the list
//     li.appendChild(span);
//     li.appendChild(completeBtn);
//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);

//     taskInput.value = "";

//     // ✔ Mark complete: toggle class
//     completeBtn.addEventListener("click", function () {
//       span.classList.toggle("completed");
//     });

//     // ❌ Delete task
//     deleteBtn.addEventListener("click", function () {
//       taskList.removeChild(li);
//     });
//   }
// });

let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 🔄 Load existing tasks on page load
window.onload = function () {
  tasks.forEach(task => renderTask(task));
};

// ➕ Add New Task
addBtn.addEventListener("click", function () {
  let taskText = taskInput.value.trim();
  if (taskText !== "") {
    let task = { text: taskText, completed: false };
    tasks.push(task);
    saveTasks();
    renderTask(task);
    taskInput.value = "";
  }
});

// 🧩 Render Task Function
function renderTask(task) {
  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = task.text;
  span.classList.add("task-text");
  if (task.completed) span.classList.add("completed");

  let completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.classList.add("complete-btn");

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.classList.add("delete-btn");

  // ✔ Toggle complete
  completeBtn.addEventListener("click", function () {
    task.completed = !task.completed;
    span.classList.toggle("completed");
    saveTasks();
  });

  // ❌ Delete task
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
    tasks = tasks.filter(t => t !== task);
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// 💾 Save to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
