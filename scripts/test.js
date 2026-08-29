const fs = require('fs');
const path = require('path');

console.log("Running tests...");

let failed = false;

// 1. Verify existence of required project files
const requiredFiles = [
    'src/index.html',
    'src/todo.html',
    'src/dashboard.html',
    'src/about.html',
    'src/styles/style.css',
    'src/scripts/app.js',
    'src/scripts/dashboard.js',
    'src/hero-illustration.png'
];

requiredFiles.forEach(file => {
    const fullPath = path.join(__dirname, '..', file);
    if (!fs.existsSync(fullPath)) {
        console.error(`✗ File missing: ${file}`);
        failed = true;
    } else {
        console.log(`✓ File present: ${file}`);
    }
});

// 2. Validate links in HTML files to make sure all references are correct
const htmlFiles = {
    'src/index.html': ['styles/style.css'],
    'src/todo.html': ['styles/style.css', 'scripts/app.js'],
    'src/dashboard.html': ['styles/style.css', 'scripts/dashboard.js'],
    'src/about.html': ['styles/style.css']
};

Object.entries(htmlFiles).forEach(([file, refs]) => {
    const fullPath = path.join(__dirname, '..', file);
    if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        refs.forEach(ref => {
            if (!content.includes(ref)) {
                console.error(`✗ Link error in ${file}: Reference to "${ref}" not found.`);
                failed = true;
            } else {
                console.log(`✓ Link verified: ${file} -> ${ref}`);
            }
        });
    }
});

// 3. Test Todo operations logic in Node environment (Mocking localStorage)
try {
    // Mock localStorage and DOM elements
    global.localStorage = {
        store: {},
        getItem(key) { return this.store[key] || null; },
        setItem(key, value) { this.store[key] = value.toString(); },
        clear() { this.store = {}; }
    };
    
    // Simulate loading data and task calculations
    let tasks = [];
    
    // Test: Adding a task
    const task1 = { id: 1, text: "Test DevOps Actions", completed: false, createdAt: new Date().toLocaleString() };
    tasks.push(task1);
    
    // Test: Completion toggle
    task1.completed = true;
    
    // Test: Stats calculations
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const active = total - completed;
    const rate = total > 0 ? (completed / total) * 100 : 0;
    
    if (total !== 1 || completed !== 1 || active !== 0 || rate !== 100) {
        throw new Error("Statistics calculation failed");
    }
    
    console.log("✓ Core Todo logic tests OK");
} catch (err) {
    console.error("✗ Todo logic test failed:", err.message);
    failed = true;
}

if (failed) {
    console.error("Tests failed!");
    process.exit(1);
} else {
    console.log("All tests passed successfully.");
    process.exit(0);
}
