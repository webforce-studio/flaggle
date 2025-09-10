#!/usr/bin/env node

const https = require('https');
const { DOMParser } = require('xmldom');

async function validateSitemap() {
  console.log('🔍 Validating sitemap...\n');
  
  try {
    // Fetch the sitemap
    const sitemapUrl = 'https://www.flaggle.fun/sitemap.xml';
    const sitemapContent = await fetchSitemap(sitemapUrl);
    
    console.log(`📊 Sitemap Stats:`);
    console.log(`   Size: ${(sitemapContent.length / 1024).toFixed(2)} KB`);
    console.log(`   Lines: ${sitemapContent.split('\n').length}`);
    console.log(`   URLs: ${(sitemapContent.match(/<url>/g) || []).length}`);
    
    // Check for common issues
    console.log(`\n🔍 Checking for issues:`);
    
    // Check for invalid characters
    const invalidChars = sitemapContent.match(/[^\x09\x0A\x0D\x20-\x7E\xC0-\xFF]/g);
    if (invalidChars) {
      console.log(`   ❌ Invalid characters found: ${invalidChars.length} instances`);
      console.log(`   First few: ${invalidChars.slice(0, 10).map(c => c.charCodeAt(0)).join(', ')}`);
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
    
    // Check for URLs that might be problematic
    const problematicUrls = [];
    const urlMatches2 = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
    if (urlMatches2) {
      urlMatches2.forEach(match => {
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
    
    // Try to parse as XML
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(sitemapContent, 'application/xml');
      const parseErrors = doc.getElementsByTagName('parsererror');
      
      if (parseErrors.length > 0) {
        console.log(`   ❌ XML parsing errors found`);
        console.log(`   Error: ${parseErrors[0].textContent}`);
      } else {
        console.log(`   ✅ Valid XML structure`);
      }
    } catch (xmlError) {
      console.log(`   ❌ XML parsing failed: ${xmlError.message}`);
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
    const urlCount = (sitemapContent.match(/<url>/g) || []).length;
    if (urlCount > 50000) {
      console.log(`   ❌ Too many URLs: ${urlCount} (max 50,000)`);
    } else {
      console.log(`   ✅ URL count OK: ${urlCount}`);
    }
    
    console.log(`\n🎯 Recommendations:`);
    
    if (sizeKB > 10240 || urlCount > 10000) {
      console.log(`   • Consider splitting into multiple sitemaps`);
      console.log(`   • Create sitemap index file`);
    }
    
    if (invalidChars || problematicUrls.length > 0) {
      console.log(`   • Fix invalid characters and problematic URLs`);
    }
    
    console.log(`   • Ensure all URLs return 200 status codes`);
    console.log(`   • Verify robots.txt references sitemap correctly`);
    console.log(`   • Submit sitemap to Google Search Console manually`);
    
  } catch (error) {
    console.error('❌ Error validating sitemap:', error.message);
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

validateSitemap();
