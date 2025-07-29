const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define logo sizes for different use cases
const logoSpecs = [
  // Favicon sizes
  { name: 'favicon-16x16.png', width: 16, height: 16, format: 'png' },
  { name: 'favicon-32x32.png', width: 32, height: 32, format: 'png' },
  { name: 'favicon-48x48.png', width: 48, height: 48, format: 'png' },
  
  // Apple touch icons
  { name: 'apple-touch-icon-180x180.png', width: 180, height: 180, format: 'png' },
  { name: 'apple-touch-icon-152x152.png', width: 152, height: 152, format: 'png' },
  { name: 'apple-touch-icon-120x120.png', width: 120, height: 120, format: 'png' },
  
  // Android icons
  { name: 'android-chrome-192x192.png', width: 192, height: 192, format: 'png' },
  { name: 'android-chrome-512x512.png', width: 512, height: 512, format: 'png' },
  
  // Header logo (smaller, optimized for header)
  { name: 'logo-header.png', width: 120, height: 40, format: 'png' },
  { name: 'logo-header@2x.png', width: 240, height: 80, format: 'png' },
  
  // Footer logo (medium size)
  { name: 'logo-footer.png', width: 150, height: 50, format: 'png' },
  { name: 'logo-footer@2x.png', width: 300, height: 100, format: 'png' },
  
  // Social media and sharing
  { name: 'og-image.png', width: 1200, height: 630, format: 'png' },
  { name: 'twitter-card.png', width: 1200, height: 600, format: 'png' },
  
  // ICO format for favicon
  { name: 'favicon.ico', width: 32, height: 32, format: 'ico' },
  
  // SVG versions (scalable)
  { name: 'logo.svg', width: 200, height: 67, format: 'svg' },
  { name: 'logo-header.svg', width: 120, height: 40, format: 'svg' },
  { name: 'logo-footer.svg', width: 150, height: 50, format: 'svg' },
];

async function generateLogos() {
  const inputPath = path.join(__dirname, '../public/flagguesser.png');
  const outputDir = path.join(__dirname, '../public/logos');
  
  // Create logos directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🎨 Generating logo variations...');
  
  for (const spec of logoSpecs) {
    try {
      const outputPath = path.join(outputDir, spec.name);
      
      if (spec.format === 'svg') {
        // For SVG, we'll create a simple SVG wrapper around the PNG
        // In a real scenario, you'd want the original SVG source
        const svgContent = `<svg width="${spec.width}" height="${spec.height}" viewBox="0 0 ${spec.width} ${spec.height}" xmlns="http://www.w3.org/2000/svg">
  <image href="/flagguesser.png" width="${spec.width}" height="${spec.height}" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
        fs.writeFileSync(outputPath, svgContent);
        console.log(`✅ Generated ${spec.name}`);
      } else if (spec.format === 'ico') {
        // Generate ICO file (32x32 PNG embedded in ICO format)
        await sharp(inputPath)
          .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
          .png()
          .toFile(outputPath.replace('.ico', '.png'));
        
        // Note: Creating true ICO files requires additional libraries
        // For now, we'll create a 32x32 PNG that can be used as favicon
        console.log(`✅ Generated ${spec.name.replace('.ico', '.png')} (ICO alternative)`);
      } else {
        // Generate PNG files
        await sharp(inputPath)
          .resize(spec.width, spec.height, { 
            fit: 'contain', 
            background: { r: 255, g: 255, b: 255, alpha: 0 } 
          })
          .png({ quality: 90 })
          .toFile(outputPath);
        console.log(`✅ Generated ${spec.name}`);
      }
    } catch (error) {
      console.error(`❌ Error generating ${spec.name}:`, error.message);
    }
  }
  
  console.log('\n🎉 Logo generation complete!');
  console.log(`📁 Logos saved to: ${outputDir}`);
  console.log('\n📋 Next steps:');
  console.log('1. Update your layout.tsx to use the new logo paths');
  console.log('2. Update header.tsx and footer.tsx components');
  console.log('3. Test favicon display in different browsers');
}

// Run the script
generateLogos().catch(console.error); 