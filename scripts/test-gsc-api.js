#!/usr/bin/env node

/**
 * Simple GSC API Test Script
 * Tests basic API connectivity and permissions
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

async function testGSCAPI() {
  try {
    console.log('🔍 Testing Google Search Console API...');
    
    // Load credentials
    const credentialsPath = path.join(__dirname, '..', 'gsc-credentials.json');
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
    
    console.log('✅ Credentials loaded');
    console.log('📧 Service Account:', credentials.client_email);
    
    // Create auth
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: [
        'https://www.googleapis.com/auth/webmasters.readonly',
        'https://www.googleapis.com/auth/webmasters'
      ]
    });
    
    console.log('✅ Auth created');
    
    // Create webmasters client
    const webmasters = google.webmasters({ version: 'v3', auth });
    console.log('✅ Webmasters client created');
    
    // Test 1: List sites
    console.log('\n🔍 Test 1: Listing sites...');
    try {
      const sitesResponse = await webmasters.sites.list();
      console.log('✅ Sites listed successfully');
      console.log('📋 Available sites:');
      sitesResponse.data.siteEntry?.forEach(site => {
        console.log(`   - ${site.siteUrl} (${site.permissionLevel})`);
      });
    } catch (error) {
      console.log('❌ Error listing sites:', error.message);
    }
    
    // Test 2: Try different site URL formats
    const siteUrls = [
      'https://www.flaggle.fun',
      'https://www.flaggle.fun/',
      'sc-domain:flaggle.fun',
      'flaggle.fun'
    ];
    
    for (const siteUrl of siteUrls) {
      console.log(`\n🔍 Test 2: Testing site URL format: ${siteUrl}`);
      try {
        const sitemapsResponse = await webmasters.sitemaps.list({
          siteUrl: siteUrl
        });
        console.log(`✅ Success with site URL: ${siteUrl}`);
        console.log('📋 Sitemaps found:', sitemapsResponse.data.sitemap?.length || 0);
        break;
      } catch (error) {
        console.log(`❌ Failed with site URL: ${siteUrl} - ${error.message}`);
      }
    }
    
    // Test 3: Try submitting sitemap with different formats
    const sitemapUrl = 'https://www.flaggle.fun/sitemap.xml';
    console.log(`\n🔍 Test 3: Testing sitemap submission...`);
    
    for (const siteUrl of siteUrls) {
      console.log(`   Trying with site URL: ${siteUrl}`);
      try {
        const submitResponse = await webmasters.sitemaps.submit({
          siteUrl: siteUrl,
          feedpath: sitemapUrl
        });
        console.log(`✅ Sitemap submitted successfully with site URL: ${siteUrl}`);
        console.log('📊 Response:', submitResponse.data);
        break;
      } catch (error) {
        console.log(`❌ Failed with site URL: ${siteUrl} - ${error.message}`);
      }
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Stack:', error.stack);
  }
}

// Run the test
testGSCAPI();
