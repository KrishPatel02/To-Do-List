const listContainer = document.querySelector(".ulsec");

// Add Task Function
const addTask = () => {
  const inputBox = document.querySelector(".additemsec");

  const inputValue = inputBox.value;

  if (inputValue === "") {
    alert("Please Enter Some Value");

    return;
  } else {
    const li = document.createElement("li");

    li.classList.add("lisec");

    const displayText =
      inputValue.length >= 55 ? inputValue.slice(0, 55) + "..." : inputValue;

    li.innerHTML = `
    
    <h2 class="itemheading">${displayText}</h2>
    
    <div>
    
    <button class="editbtn"><img class="editimg" src="Edit_Icon.png" width="20px"></button>
    
    <button class="removebtn"><img class="removeimg" src="Delete_Icon.png" width="20px"></button>
    
    </div>
    
    `;

    listContainer.appendChild(li);

    inputBox.value = "";
  }
};

// Edit Task Function

const editTask = (taskElement) => {
  const headingElement = taskElement.querySelector(".itemheading");

  const inputField = document.createElement("input");

  // Create Input Field

  inputField.type = "text";

  inputField.className = "inputfieldsec";

  inputField.value = headingElement.textContent;

  // Replace h2 to Input

  headingElement.replaceWith(inputField);

  const doneBtn = taskElement.querySelector(".editbtn");

  doneBtn.innerHTML = '<img class= "doneimg" src="Done_Icon.png" width="20px">';

  doneBtn.classList.remove("editbtn");

  doneBtn.classList.add("donebtn");
};

// Done Task Function

const doneTask = (taskElement) => {
  const inputField = taskElement.querySelector(".inputfieldsec");

  const newText = inputField.value;

  const displayText =
    newText.length >= 55 ? newText.slice(0, 55) + "..." : newText;

  // Create Heading 2

  const headingElement = document.createElement("h2");

  headingElement.textContent = displayText;

  headingElement.classList.add("itemheading");

  // Replace input to h2

  inputField.replaceWith(headingElement);

  const editBtn = taskElement.querySelector(".donebtn");

  editBtn.innerHTML = '<img class= "editimg" src="Edit_Icon.png" width="20px">';

  editBtn.classList.remove("donebtn");

  editBtn.classList.add("editbtn");
};

// Click Event Listener on List Container

listContainer.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("removeimg")) {
    const taskElement = target.closest("li");

    taskElement.remove();
  } else if (target.classList.contains("editimg")) {
    const taskElement = target.closest("li");

    editTask(taskElement);
  } else if (target.classList.contains("doneimg")) {
    const taskElement = target.closest("li");

    doneTask(taskElement);
  }
});

// Click Event Listener on Add Button

const addTaskBtn = document.querySelector(".addbtn");

addTaskBtn.addEventListener("click", addTask);
