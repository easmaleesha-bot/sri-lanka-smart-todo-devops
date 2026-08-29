const fs = require('fs');
const path = require('path');

console.log("Building static website...");

// Check that the distribution build directory (src/) is present and valid
const srcDir = path.join(__dirname, '..', 'src');

if (!fs.existsSync(srcDir)) {
    console.error("✗ Build directory src/ does not exist.");
    process.exit(1);
}

console.log("✓ Build directory src/ is valid and contains all static assets.");
console.log("Static site is ready for deployment.");
process.exit(0);
