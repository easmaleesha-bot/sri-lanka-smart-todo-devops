const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let tasks = [];
let currentFilter = "all";

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    taskInput.value = "";

    renderTasks();
}

function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );

    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function updateTaskCount() {
    const remaining = tasks.filter(task => !task.completed).length;

    taskCount.textContent =
        `${remaining} task${remaining !== 1 ? "s" : ""} remaining`;
}

function renderTasks() {
    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "active") {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    filteredTasks.forEach(task => {
        const li = document.createElement("li");

        li.className = task.completed
            ? "task-item completed"
            : "task-item";

        li.innerHTML = `
            <div class="task-left">
                <input type="checkbox" ${task.completed ? "checked" : ""}>
                <span>${task.text}</span>
            </div>
            <button class="delete-btn">Delete</button>
        `;

        const checkbox = li.querySelector("input");
        const deleteButton = li.querySelector(".delete-btn");

        checkbox.addEventListener("change", () => toggleTask(task.id));
        deleteButton.addEventListener("click", () => deleteTask(task.id));

        taskList.appendChild(li);
    });

    updateTaskCount();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        addTask();
    }
});

document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        renderTasks();
    });
});

renderTasks();