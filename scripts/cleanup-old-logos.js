const fs = require('fs');
const path = require('path');

// List of old logo files that can be safely removed
const oldLogoFiles = [
  '/public/flagguesser.png', // Original large logo
  '/public/logo.png', // Generic logo
  '/public/logo.svg', // Old SVG
];

function cleanupOldLogos() {
  console.log('🧹 Cleaning up old logo files...');
  
  let removedCount = 0;
  
  for (const filePath of oldLogoFiles) {
    const fullPath = path.join(__dirname, '..', filePath);
    
    if (fs.existsSync(fullPath)) {
      try {
        fs.unlinkSync(fullPath);
        console.log(`✅ Removed: ${filePath}`);
        removedCount++;
      } catch (error) {
        console.error(`❌ Error removing ${filePath}:`, error.message);
      }
    } else {
      console.log(`ℹ️  File not found: ${filePath}`);
    }
  }
  
  console.log(`\n🎉 Cleanup complete! Removed ${removedCount} old logo files.`);
  console.log('📁 New logos are available in /public/logos/ directory.');
}

// Only run if explicitly called
if (require.main === module) {
  cleanupOldLogos();
}

module.exports = { cleanupOldLogos }; 