const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTaskButton = document.getElementById("addTaskButton");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Please write something!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = inputBox.value; 

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "&#10006;"; 
  deleteBtn.classList.add("delete-btn"); 
  li.appendChild(deleteBtn); 

  listContainer.appendChild(li);

  inputBox.value = "";

  li.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") {
      li.classList.toggle("checked");
    }
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
}

addTaskButton.addEventListener("click", addTask);
