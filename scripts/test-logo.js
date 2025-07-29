const fs = require('fs');
const path = require('path');

function testLogoFiles() {
  console.log('🔍 Testing logo file accessibility...\n');
  
  const testFiles = [
    '/public/flagguesser.png',
    '/public/logos/logo-header.png',
    '/public/logos/logo-footer.png',
    '/public/logos/favicon-32x32.png'
  ];
  
  for (const filePath of testFiles) {
    const fullPath = path.join(__dirname, '..', filePath);
    
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      console.log(`✅ ${filePath} - ${stats.size} bytes`);
    } else {
      console.log(`❌ ${filePath} - NOT FOUND`);
    }
  }
  
  console.log('\n📋 Next steps:');
  console.log('1. Check if the development server is running');
  console.log('2. Clear browser cache and refresh');
  console.log('3. Check browser developer tools for network errors');
}

testLogoFiles(); 