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

## 8. Git Branching & Collaboration
The repository utilizes a structured branch model for clean collaboration:
* **`main`**: The production branch. Direct pushes are blocked on GitHub; updates must be merged via Pull Requests. It automatically triggers the continuous deployment (CD) Pages build runner.
* **`develop`**: The integration branch. All developers merge their feature work here first to verify project builds and run test suites before release integration.
* **`feature/*`**: Individual feature branches used by developers to work in isolation (e.g. `feature/todo-core`, `feature/devops-enhancements`, `feature/todo-persistence`).
* **Pull Requests & Code Reviews**: Used to request reviews, inspect diffs, run validation checks on Actions, and merge branch lines safely. Commits use standard conventional commit prefixes (`feat:`, `fix:`, `docs:`, `ci:`, `test:`, `chore:`).

## 9. Deployment
The production application is continuously deployed to GitHub Pages:
👉 **Live URL:** [https://easmaleesha-bot.github.io/sri-lanka-smart-todo-devops/](https://easmaleesha-bot.github.io/sri-lanka-smart-todo-devops/)

## 10. Team Members

| Student Name | Student ID | Role |
| :--- | :--- | :--- |
| E.A.S. Malisha | ITBIN-2313-0060 | DevOps and CI/CD |
| I.M.D.A. Ilankoon | ITBIN-2313-0041 | Application Development |

## 11. Individual Contributions
Each team member has contributed to the project repository through logical commits:

### E.A.S. Malisha (ITBIN-2313-0060)
* **`ca86b41`**: `chore: initialize project structure` (Setup baseline layout structure)
* **`7beb32c`**: `chore: add gitignore configuration` (Ignore local dependency directories)
* **`efd0c95`**: `docs: add project documentation` (Define baseline README outlines)
* **`853292d` / `8a100cc`**: `feat: persist todo tasks in local storage` (Implement offline persistence in task list)
* **`b748378` / `3455bd3`**: `docs: improve todo application usage guide` (Add instructions in README)
* **`15b2724`**: `ci: add validation scripts and update CI/CD pipelines` (Configure package.json, test/lint files, and workflows)
* **`3c4cce1`**: `feat: implement clean responsive multi-page redesign` (Implement Home, Todo, Dashboard, and About page splits)
* **`0c0834c`**: `fix: resolve CI and GitHub Pages deployment` (Remove setup-node caching flag to resolve runner lockfile failure)

### I.M.D.A. Ilankoon (ITBIN-2313-0041)
* **`a8f0540` / `f222bbb`**: `feat: add smart todo application interface` (Add HTML inputs, toggles, deletion list buttons, and storage methods)
* **`738d5b2` / `6e9a57e`**: `feat: add task creation timestamps` (Implement timestamp capture logic inside tasks array)

## 12. Merge Conflict Resolution
A real merge conflict occurred and was manually resolved during branch integration:
* **Conflict Context**: Merging branch `feature/devops-enhancements` into the `develop` integration branch.
* **Conflict Files**: [`src/scripts/app.js`](file:///c:/Users/shohani/Desktop/sri-lanka-smart-todo-devops/src/scripts/app.js) and [`README.md`](file:///c:/Users/shohani/Desktop/sri-lanka-smart-todo-devops/README.md).
* **Cause**: Parallel edits in `app.js` (conflicting task counter format styles) and `README.md` (overlapping baseline documentation blocks).
* **Resolution**: The conflicts were manually resolved on the `develop` branch by choosing the updated code structure from the feature branch to preserve DOM selector safety checks (`if (addTaskBtn)`) and modern README sections.
* **Resolution Commit**: **`7fc2451`** (merged into `develop`) and integrated into `main` via production merge **`721c42c`**.

## 13. How to Run Locally
To run the website locally on your system, you can open the static index file directly or spin up a simple background server:

### Option A: Open directly in browser
Open the entry file in your browser:
`src/index.html`

### Option B: Run a local static server
If Python is installed on your terminal, run the following command in the project root:
```bash
python -m http.server 8080 --directory src
```
Navigate to `http://localhost:8080` in your web browser.

## 14. Project Purpose
The primary purpose of this project is to demonstrate key DevOps principles in action. By collaborating on a simple frontend workspace, the team practices version control branch isolation, code reviews via Pull Requests, automated continuous quality checks (CI), and automated deployments (CD) to production.

## 15. Conclusion
This project successfully combines static web design best-practices with modern DevOps delivery tools. Through automated pipelines and Git branching rules, it shows how software development and operations can be coordinated to deliver clean, responsive, and verified web applications rapidly and reliably.
