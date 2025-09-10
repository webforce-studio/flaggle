#!/usr/bin/env node

const https = require('https');

async function testSitemapComprehensive() {
  console.log('🔍 Comprehensive Sitemap Testing\n');
  
  try {
    // Test sitemap index
    console.log('1️⃣ Testing Sitemap Index...');
    const sitemapIndexUrl = 'https://www.flaggle.fun/sitemap-index.xml';
    const sitemapIndexContent = await fetchUrl(sitemapIndexUrl);
    
    if (sitemapIndexContent.includes('<sitemapindex')) {
      console.log('   ✅ Sitemap index is valid XML');
    } else {
      console.log('   ❌ Sitemap index is not valid XML');
    }
    
    // Extract main sitemap URL
    const sitemapMatch = sitemapIndexContent.match(/<loc>(.*?)<\/loc>/);
    if (sitemapMatch) {
      const mainSitemapUrl = sitemapMatch[1];
      console.log(`   📍 Main sitemap: ${mainSitemapUrl}`);
      
      // Test main sitemap
      console.log('\n2️⃣ Testing Main Sitemap...');
      const sitemapContent = await fetchUrl(mainSitemapUrl);
      
      // Basic validation
      const hasXmlDeclaration = sitemapContent.startsWith('<?xml');
      const hasUrlset = sitemapContent.includes('<urlset');
      const hasClosingUrlset = sitemapContent.includes('</urlset>');
      
      console.log(`   ${hasXmlDeclaration ? '✅' : '❌'} XML declaration`);
      console.log(`   ${hasUrlset ? '✅' : '❌'} URLset opening tag`);
      console.log(`   ${hasClosingUrlset ? '✅' : '❌'} URLset closing tag`);
      
      // Count URLs
      const urlCount = (sitemapContent.match(/<url>/g) || []).length;
      console.log(`   📊 Total URLs: ${urlCount}`);
      
      // Test sample URLs
      console.log('\n3️⃣ Testing Sample URLs...');
      const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
      if (urlMatches) {
        const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
        const sampleUrls = urls.slice(0, 5);
        
        for (const url of sampleUrls) {
          try {
            const status = await testUrlStatus(url);
            const statusIcon = status === 200 ? '✅' : status >= 300 && status < 400 ? '🔄' : '❌';
            console.log(`   ${statusIcon} ${url} - ${status}`);
          } catch (error) {
            console.log(`   ❌ ${url} - Error: ${error.message}`);
          }
        }
      }
      
      // Check for common issues
      console.log('\n4️⃣ Checking for Common Issues...');
      
      // Check for invalid characters
      const invalidChars = sitemapContent.match(/[^\x09\x0A\x0D\x20-\x7E\xC0-\xFF]/g);
      if (invalidChars) {
        console.log(`   ❌ Invalid characters found: ${invalidChars.length}`);
      } else {
        console.log('   ✅ No invalid characters');
      }
      
      // Check for duplicate URLs
      if (urlMatches) {
        const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
        const uniqueUrls = new Set(urls);
        const duplicates = urls.length - uniqueUrls.size;
        
        if (duplicates > 0) {
          console.log(`   ❌ Duplicate URLs: ${duplicates}`);
        } else {
          console.log('   ✅ No duplicate URLs');
        }
      }
      
      // Check sitemap size
      const sizeKB = sitemapContent.length / 1024;
      if (sizeKB > 51200) {
        console.log(`   ❌ Sitemap too large: ${sizeKB.toFixed(2)} KB`);
      } else {
        console.log(`   ✅ Sitemap size OK: ${sizeKB.toFixed(2)} KB`);
      }
      
      // Check URL count
      if (urlCount > 50000) {
        console.log(`   ❌ Too many URLs: ${urlCount}`);
      } else {
        console.log(`   ✅ URL count OK: ${urlCount}`);
      }
      
      console.log('\n5️⃣ Google Search Console Recommendations...');
      console.log('   📝 Next steps:');
      console.log('   1. Go to Google Search Console');
      console.log('   2. Navigate to Sitemaps section');
      console.log('   3. Add sitemap URL: https://www.flaggle.fun/sitemap-index.xml');
      console.log('   4. Click "Submit"');
      console.log('   5. Wait 24-48 hours for processing');
      
      if (hasXmlDeclaration && hasUrlset && hasClosingUrlset && !invalidChars && urlCount < 50000) {
        console.log('\n🎉 Sitemap appears to be valid and ready for Google Search Console!');
      } else {
        console.log('\n⚠️  Sitemap has issues that need to be fixed before submitting to GSC.');
      }
      
    } else {
      console.log('   ❌ Could not find main sitemap URL in sitemap index');
    }
    
  } catch (error) {
    console.error('❌ Error testing sitemap:', error.message);
  }
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function testUrlStatus(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', reject);
  });
}

testSitemapComprehensive();
