document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    document.querySelector("button").addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});
