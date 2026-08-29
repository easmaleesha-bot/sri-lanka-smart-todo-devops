# Sri Lanka Smart Todo

[![CI Pipeline](https://github.com/easmaleesha-bot/sri-lanka-smart-todo-devops/actions/workflows/ci.yml/badge.svg)](https://github.com/easmaleesha-bot/sri-lanka-smart-todo-devops/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/easmaleesha-bot/sri-lanka-smart-todo-devops/actions/workflows/deploy.yml/badge.svg)](https://github.com/easmaleesha-bot/sri-lanka-smart-todo-devops/actions/workflows/deploy.yml)

## 1. Project Title
**Sri Lanka Smart Todo**

## 2. Project Overview
Sri Lanka Smart Todo is a clean, simple, and professional task management web application designed and developed as a collaborative university **DevOps Team Assignment**. It serves as a practical demonstration of integrating static frontend web engineering with automated DevOps delivery pipelines.

## 3. Key Features
* **Add Tasks:** Quickly add new tasks (empty inputs are validated and blocked).
* **Complete/Uncomplete Tasks:** Toggle completion checkboxes to track progress.
* **Delete Tasks:** Remove unwanted or completed tasks instantly from the workspace.
* **Filter Tasks:** Segment tasks dynamically into **All**, **Active**, and **Completed** lists.
* **Task Creation Timestamps:** Logs and displays the exact date and time for when each task was created.
* **Browser localStorage Persistence:** Keeps task lists intact and saved across page refreshes and browser restarts.
* **Productivity Dashboard:** Dynamically calculates total/active/completed task numbers, completion percentages, completion progress bars, donut charts, and recent activity logs.
* **Responsive Multi-Page Web Interface:** Provides a consistent header, navigation, and footer layout optimized for Desktop, Tablet, and Mobile screens.

## 4. Technologies Used
* **HTML5:** Semantic document structuring.
* **CSS3:** Responsive visual styling, grid layouts, transitions, and theme color controls.
* **Vanilla JavaScript (ES6):** Client-side scripting, localStorage persistence, and dynamic stats updates.
* **Browser localStorage:** Offline persistent browser-client task storage.
* **Git and GitHub:** Version control and distributed collaboration platform.
* **GitHub Actions:** Continuous Integration lint checking, testing workflows, and automated Pages build actions.
* **GitHub Pages:** Production static hosting platform.

## 5. Application Pages
* **Home:** The landing page displaying the tagline, project overview, checklists illustration, and feature summary cards.
* **Todo:** The task manager workspace containing task inputs, filters, task count, and individual task cards.
* **Dashboard:** The productivity analytics dashboard displaying numeric cards, progress bars, task donut ratio charts, and activity logs.
* **About:** The project details page displaying feature sets, tech stack badges, DevOps pipelines, and team assignment details.

## 6. Data Storage
All task records are stored directly inside the user's browser **localStorage** under a single persistent key. Task data is loaded automatically on launch and remains safely preserved after reloading the page or closing the web browser.

## 7. DevOps / CI-CD
The project operates under a continuous integration and continuous deployment release workflow:
```
Developer changes ➜ GitHub repository ➜ GitHub Actions CI validation ➜ GitHub Pages deployment
```
* **Linting & Testing (CI):** Triggers automatically on pushes and PRs to compile JavaScript syntaxes and verify semantic HTML files structure.
* **Production Deploy (CD):** Merges to the main production branch trigger the pages deployment workflow to publish the site files.

## 8. Git Workflow
The repository utilizes a structured branch model for clean collaboration:
* **`main`**: The protected production branch. Direct pushes are blocked; updates must be merged via Pull Requests (PRs).
* **`develop`**: The integration branch where developer contributions are compiled and tested.
* **`feature/*`**: Dedicated developer branches used to build specific features in isolation (e.g. `feature/dashboard`).
* **Pull Requests (PRs):** Used to request code reviews, run automated CI tests, and merge feature work safely into development/main branches.

## 9. Deployment
The production application is continuously deployed to GitHub Pages:
👉 **Live URL:** [https://easmaleesha-bot.github.io/sri-lanka-smart-todo-devops](https://easmaleesha-bot.github.io/sri-lanka-smart-todo-devops)

## 10. Team Members

| Student Name | Student ID | Role |
| :--- | :--- | :--- |
| E.A.S. Malisha | ITBIN-2313-0060 | DevOps and CI/CD |
| I.M.D.A. Ilankoon | ITBIN-2313-0041 | Application Development |

## 11. How to Run Locally
To run the website locally on your system, you can open the static index file directly or spin up a simple background server:

### Option A: Open directly in browser
Double-click or open the entry file in your browser:
`src/index.html`

### Option B: Run a local static server
If Python is installed on your terminal, run the following command in the project root:
```bash
python -m http.server 8080 --directory src
```
Navigate to `http://localhost:8080` in your web browser.

## 12. Project Purpose
The primary purpose of this project is to demonstrate key DevOps principles in action. By collaborating on a simple frontend workspace, the team practices version control branch isolation, code reviews via Pull Requests, automated continuous quality checks (CI), and automated deployments (CD) to production.

## 13. Conclusion
This project successfully combines static web design best-practices with modern DevOps delivery tools. Through automated pipelines and Git branching rules, it shows how software development and operations can be coordinated to deliver clean, responsive, and verified web applications rapidly and reliably.
