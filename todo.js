const taskField = document.getElementById("input");
const taskList = document.getElementById("taskList");

function add() {
    if (taskField.value == "") {
        alert("Please Enter Task");
    } else {
        let newElement = document.createElement("li");
        newElement.innerHTML=`${taskField.value}<img src="images/delete.svg" alt="delete">`;
        taskList.appendChild(newElement);
        taskField.value = "";
        newElement.querySelector("img").addEventListener("click", remove);
        function remove() {
            newElement.remove();
        }
    }
}