// Load tasks from localStorage
const tasks = JSON.parse(localStorage.getItem("smartTodoTasks")) || [];

function renderDashboard() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const active = total - completed;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    // 1. Update metric numbers
    const totalEl = document.getElementById("totalTasksCount");
    const activeEl = document.getElementById("activeTasksCount");
    const completedEl = document.getElementById("completedTasksCount");
    const percentTextEl = document.getElementById("completionPercentageText");
    const progressBarPercentTextEl = document.getElementById("progressBarPercentageText");
    const progressBarEl = document.getElementById("completionProgressBar");

    if (totalEl) totalEl.textContent = total;
    if (activeEl) activeEl.textContent = active;
    if (completedEl) completedEl.textContent = completed;
    if (percentTextEl) percentTextEl.textContent = `${percentage}%`;
    if (progressBarPercentTextEl) progressBarPercentTextEl.textContent = `${percentage}%`;
    if (progressBarEl) progressBarEl.style.width = `${percentage}%`;

    // 2. Render Donut Chart
    const donutChart = document.getElementById("donutChart");
    const legendActiveCount = document.getElementById("legendActiveCount");
    const legendCompletedCount = document.getElementById("legendCompletedCount");

    if (legendActiveCount) legendActiveCount.textContent = active;
    if (legendCompletedCount) legendCompletedCount.textContent = completed;

    if (donutChart) {
        if (total === 0) {
            // Draw a fully empty gray circle if no tasks
            donutChart.style.background = `conic-gradient(#cbd5e1 0% 100%)`;
        } else {
            // Completed is green (#10b981) from 0 to percentage, active is gray (#cbd5e1) for the rest
            donutChart.style.background = `conic-gradient(#10b981 0% ${percentage}%, #cbd5e1 ${percentage}% 100%)`;
        }
    }

    // 3. Render Recent Activity (up to 5 most recent tasks, based on ID which is timestamp)
    const activityList = document.getElementById("activityList");
    if (activityList) {
        if (total === 0) {
            activityList.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem; text-align: center; padding: 2rem 0;">No recent activity</p>`;
            return;
        }

        // Sort tasks descending by ID (which is Date.now())
        const recentTasks = [...tasks].sort((a, b) => b.id - a.id).slice(0, 5);

        activityList.innerHTML = "";

        recentTasks.forEach(task => {
            const item = document.createElement("div");
            item.className = "activity-item";

            const badgeClass = task.completed ? "activity-badge completed" : "activity-badge active";
            const badgeIcon = task.completed ? "✓" : "○";
            const statusLabel = task.completed ? "Completed" : "Active";

            item.innerHTML = `
                <div class="${badgeClass}">${badgeIcon}</div>
                <div class="activity-details">
                    <span class="activity-title">${task.text}</span>
                    <span class="activity-time">${statusLabel} • Created: ${task.createdAt || "Previously added"}</span>
                </div>
            `;

            activityList.appendChild(item);
        });
    }
}

// Run dashboard renderer on page load
document.addEventListener("DOMContentLoaded", renderDashboard);
