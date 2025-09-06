#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputLogo = path.join(__dirname, '../public/logo.png');
const outputDir = path.join(__dirname, '../public/logos');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = [
  { name: 'logo-16', size: 16 },
  { name: 'logo-32', size: 32 },
  { name: 'logo-40', size: 40 },
  { name: 'logo-56', size: 56 },
  { name: 'logo-80', size: 80 }, // 2x for footer retina
  { name: 'logo-112', size: 112 }, // 2x for header retina
  { name: 'logo-224', size: 224 }, // 2x for retina
  { name: 'logo-512', size: 512 },
  { name: 'logo-1024', size: 1024 }
];

async function optimizeLogo() {
  console.log('Starting logo optimization...');
  
  try {
    // Read the original logo
    const originalBuffer = fs.readFileSync(inputLogo);
    console.log(`Original logo size: ${(originalBuffer.length / 1024).toFixed(2)} KB`);
    
    for (const { name, size } of sizes) {
      console.log(`Generating ${name} (${size}x${size})...`);
      
      // Generate PNG version
      await sharp(originalBuffer)
        .resize(size, size, { 
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png({ 
          quality: 90,
          compressionLevel: 9,
          progressive: true
        })
        .toFile(path.join(outputDir, `${name}.png`));
      
      // Generate WebP version
      await sharp(originalBuffer)
        .resize(size, size, { 
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .webp({ 
          quality: 85,
          effort: 6
        })
        .toFile(path.join(outputDir, `${name}.webp`));
      
      // Generate AVIF version (for modern browsers)
      await sharp(originalBuffer)
        .resize(size, size, { 
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .avif({ 
          quality: 80,
          effort: 4
        })
        .toFile(path.join(outputDir, `${name}.avif`));
    }
    
    console.log('Logo optimization complete!');
    console.log('Generated files:');
    
    // List generated files with sizes
    const files = fs.readdirSync(outputDir);
    files.forEach(file => {
      const filePath = path.join(outputDir, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`  ${file}: ${sizeKB} KB`);
    });
    
  } catch (error) {
    console.error('Error optimizing logo:', error);
    process.exit(1);
  }
}

optimizeLogo();
