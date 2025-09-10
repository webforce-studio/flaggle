#!/usr/bin/env node

const https = require('https');

async function checkSitemap() {
  console.log('🔍 Checking sitemap for common issues...\n');
  
  try {
    const sitemapUrl = 'https://www.flaggle.fun/sitemap.xml';
    const sitemapContent = await fetchSitemap(sitemapUrl);
    
    console.log(`📊 Sitemap Stats:`);
    console.log(`   Size: ${(sitemapContent.length / 1024).toFixed(2)} KB`);
    console.log(`   Lines: ${sitemapContent.split('\n').length}`);
    
    const urlCount = (sitemapContent.match(/<url>/g) || []).length;
    console.log(`   URLs: ${urlCount}`);
    
    console.log(`\n🔍 Checking for issues:`);
    
    // Check for invalid characters
    const invalidChars = sitemapContent.match(/[^\x09\x0A\x0D\x20-\x7E\xC0-\xFF]/g);
    if (invalidChars) {
      console.log(`   ❌ Invalid characters found: ${invalidChars.length} instances`);
      console.log(`   First few char codes: ${invalidChars.slice(0, 10).map(c => c.charCodeAt(0)).join(', ')}`);
    } else {
      console.log(`   ✅ No invalid characters`);
    }
    
    // Check for proper XML structure
    const hasXmlDeclaration = sitemapContent.startsWith('<?xml');
    const hasUrlset = sitemapContent.includes('<urlset');
    const hasClosingUrlset = sitemapContent.includes('</urlset>');
    
    console.log(`   ${hasXmlDeclaration ? '✅' : '❌'} XML declaration`);
    console.log(`   ${hasUrlset ? '✅' : '❌'} URLset opening tag`);
    console.log(`   ${hasClosingUrlset ? '✅' : '❌'} URLset closing tag`);
    
    // Check for duplicate URLs
    const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
    if (urlMatches) {
      const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
      const uniqueUrls = new Set(urls);
      const duplicates = urls.length - uniqueUrls.size;
      
      if (duplicates > 0) {
        console.log(`   ❌ Duplicate URLs found: ${duplicates}`);
      } else {
        console.log(`   ✅ No duplicate URLs`);
      }
    }
    
    // Check for problematic URLs
    const problematicUrls = [];
    if (urlMatches) {
      urlMatches.forEach(match => {
        const url = match.replace(/<\/?loc>/g, '');
        if (url.includes(' ')) {
          problematicUrls.push(`URL with spaces: ${url}`);
        }
        if (url.length > 2048) {
          problematicUrls.push(`URL too long: ${url.substring(0, 50)}...`);
        }
        if (!url.startsWith('https://www.flaggle.fun/')) {
          problematicUrls.push(`Non-canonical URL: ${url}`);
        }
      });
    }
    
    if (problematicUrls.length > 0) {
      console.log(`   ❌ Problematic URLs found:`);
      problematicUrls.slice(0, 5).forEach(issue => console.log(`      ${issue}`));
      if (problematicUrls.length > 5) {
        console.log(`      ... and ${problematicUrls.length - 5} more`);
      }
    } else {
      console.log(`   ✅ No problematic URLs`);
    }
    
    // Check sitemap size limits
    const sizeKB = sitemapContent.length / 1024;
    if (sizeKB > 51200) { // 50MB limit
      console.log(`   ❌ Sitemap too large: ${sizeKB.toFixed(2)} KB (max 50MB)`);
    } else if (sizeKB > 10240) { // 10MB warning
      console.log(`   ⚠️  Sitemap large: ${sizeKB.toFixed(2)} KB (consider splitting)`);
    } else {
      console.log(`   ✅ Sitemap size OK: ${sizeKB.toFixed(2)} KB`);
    }
    
    // Check URL count
    if (urlCount > 50000) {
      console.log(`   ❌ Too many URLs: ${urlCount} (max 50,000)`);
    } else {
      console.log(`   ✅ URL count OK: ${urlCount}`);
    }
    
    // Check for common sitemap issues
    console.log(`\n🔍 Common sitemap issues:`);
    
    // Check if sitemap ends properly
    const trimmed = sitemapContent.trim();
    if (!trimmed.endsWith('</urlset>')) {
      console.log(`   ❌ Sitemap doesn't end with </urlset>`);
      console.log(`   Last 50 chars: ${trimmed.slice(-50)}`);
    } else {
      console.log(`   ✅ Sitemap ends properly`);
    }
    
    // Check for missing required elements
    const hasLoc = sitemapContent.includes('<loc>');
    const hasLastmod = sitemapContent.includes('<lastmod>');
    const hasChangefreq = sitemapContent.includes('<changefreq>');
    const hasPriority = sitemapContent.includes('<priority>');
    
    console.log(`   ${hasLoc ? '✅' : '❌'} Has <loc> elements`);
    console.log(`   ${hasLastmod ? '✅' : '❌'} Has <lastmod> elements`);
    console.log(`   ${hasChangefreq ? '✅' : '❌'} Has <changefreq> elements`);
    console.log(`   ${hasPriority ? '✅' : '❌'} Has <priority> elements`);
    
    console.log(`\n🎯 Key recommendations:`);
    
    if (sizeKB > 10240 || urlCount > 10000) {
      console.log(`   • Sitemap is large - consider splitting into multiple sitemaps`);
      console.log(`   • Create a sitemap index file`);
    }
    
    if (invalidChars || problematicUrls.length > 0) {
      console.log(`   • Fix invalid characters and problematic URLs`);
    }
    
    console.log(`   • Test all URLs in sitemap return 200 status codes`);
    console.log(`   • Verify robots.txt properly references sitemap`);
    console.log(`   • Submit sitemap to Google Search Console manually`);
    console.log(`   • Check for any server-side errors when Googlebot crawls`);
    
    // Test a few URLs from the sitemap
    console.log(`\n🔍 Testing sample URLs:`);
    if (urlMatches) {
      const sampleUrls = urls.slice(0, 3);
      for (const url of sampleUrls) {
        try {
          const status = await testUrl(url);
          console.log(`   ${status === 200 ? '✅' : '❌'} ${url} - ${status}`);
        } catch (error) {
          console.log(`   ❌ ${url} - Error: ${error.message}`);
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Error checking sitemap:', error.message);
  }
}

function fetchSitemap(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function testUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', reject);
  });
}

checkSitemap();
