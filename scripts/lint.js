const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("Running lint checks...");

let failed = false;

// 1. Lint JavaScript files using node --check
const jsFiles = [
    'src/scripts/app.js',
    'src/scripts/dashboard.js'
];

jsFiles.forEach(file => {
    try {
        const fullPath = path.join(__dirname, '..', file);
        execSync(`node --check "${fullPath}"`);
        console.log(`✓ JavaScript syntax OK: ${file}`);
    } catch (err) {
        console.error(`✗ JavaScript syntax error in ${file}:`);
        console.error(err.toString());
        failed = true;
    }
});

// 2. Lint HTML files for basic structure
const htmlFiles = [
    'src/index.html',
    'src/todo.html',
    'src/dashboard.html',
    'src/about.html'
];

htmlFiles.forEach(file => {
    const fullPath = path.join(__dirname, '..', file);
    if (!fs.existsSync(fullPath)) {
        console.error(`✗ File missing: ${file}`);
        failed = true;
        return;
    }
    const content = fs.readFileSync(fullPath, 'utf8');
    const requiredTags = ['<!DOCTYPE html>', '<html', '<head>', '<body>', '<nav', '</body>', '</html>'];
    
    let fileOk = true;
    requiredTags.forEach(tag => {
        if (!content.toLowerCase().includes(tag.toLowerCase())) {
            console.error(`✗ HTML lint error in ${file}: Missing tag "${tag}"`);
            fileOk = false;
            failed = true;
        }
    });
    if (fileOk) {
        console.log(`✓ HTML structure OK: ${file}`);
    }
});

if (failed) {
    console.error("Lint checks failed!");
    process.exit(1);
} else {
    console.log("All lint checks passed successfully.");
    process.exit(0);
}
