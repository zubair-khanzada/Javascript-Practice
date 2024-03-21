const taskField = document.getElementById("input");
const taskList = document.getElementById("taskList");

function add() {
    if (taskField.value === "") {
        alert("Please Enter Task");
    } else {
        let newElement = document.createElement("li");
        newElement.innerHTML=`
            <span class="task-text">${taskField.value}</span>
            <img class="edit-task" src="images/edit.svg" alt="edit">
            <img class="delete-task" src="images/delete.svg" alt="delete">
        `;
        const firstTask = taskList.firstChild;
        taskList.insertBefore(newElement, firstTask);
        taskField.value = "";
        const deleteButton = newElement.querySelector(".delete-task");
        const editButton = newElement.querySelector(".edit-task");
        deleteButton.addEventListener("click", remove);
        editButton.addEventListener("click", edit);
    }
}

function remove() {
    const listItem = this.parentNode;
    listItem.remove();
}

function edit() {
    const listItem = this.parentNode;
    const taskTextElement = listItem.querySelector(".task-text");
    const newText = prompt("Edit Task", taskTextElement.textContent);
    if (newText !== null) {
        taskTextElement.textContent = newText;
    }
}