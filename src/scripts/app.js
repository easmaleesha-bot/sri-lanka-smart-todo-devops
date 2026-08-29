const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

// Load saved tasks from browser storage
let tasks = JSON.parse(localStorage.getItem("smartTodoTasks")) || [];
let currentFilter = "all";

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("smartTodoTasks", JSON.stringify(tasks));
}

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date().toLocaleString()
    };

    tasks.push(task);
    saveTasks();

    taskInput.value = "";

    renderTasks();
}

// Complete/uncomplete a task
function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );

    saveTasks();
    renderTasks();
}

// Delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);

    saveTasks();
    renderTasks();
}

// Update task counter to match: "X tasks total • Y remaining"
function updateTaskCount() {
    const total = tasks.length;
    const remaining = tasks.filter(task => !task.completed).length;

    taskCount.textContent =
        `${total} task${total !== 1 ? "s" : ""} total • ${remaining} remaining`;
}

// Display tasks
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
                <div>
                    <span>${task.text}</span>
                    <small>Created: ${task.createdAt || "Previously added"}</small>
                </div>
            </div>
            <button class="delete-btn">Delete</button>
        `;

        const checkbox = li.querySelector("input");
        const deleteButton = li.querySelector(".delete-btn");

        checkbox.addEventListener("change", () => {
            toggleTask(task.id);
        });

        deleteButton.addEventListener("click", () => {
            deleteTask(task.id);
        });

        taskList.appendChild(li);
    });

    updateTaskCount();
}

// Add task using button
if (addTaskBtn) {
    addTaskBtn.addEventListener("click", addTask);
}

// Add task using Enter key
if (taskInput) {
    taskInput.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            addTask();
        }
    });
}

// Filter tasks
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

// Display saved tasks when application starts
renderTasks();