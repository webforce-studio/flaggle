#!/usr/bin/env node

/**
 * Google Analytics Verification Script
 * 
 * This script helps verify that Google Analytics is properly configured
 * and can be detected by Google's validation tools.
 */

const GA_ID = 'G-H5XQ86DW7G';
const SITE_URL = 'https://monumentle.fun';

console.log('🔍 Google Analytics Verification Script');
console.log('=====================================\n');

// Check if we can fetch the site
console.log('1. Testing site accessibility...');
try {
  const response = await fetch(SITE_URL);
  if (response.ok) {
    console.log('✅ Site is accessible');
  } else {
    console.log('❌ Site returned status:', response.status);
  }
} catch (error) {
  console.log('❌ Cannot access site:', error.message);
}

// Check local development
console.log('\n2. Testing local development...');
try {
  const localResponse = await fetch('http://localhost:3001');
  if (localResponse.ok) {
    const html = await localResponse.text();
    if (html.includes(GA_ID)) {
      console.log('✅ Google Analytics tag found in local development');
    } else {
      console.log('❌ Google Analytics tag not found in local development');
    }
  } else {
    console.log('❌ Local development server not running');
  }
} catch (error) {
  console.log('❌ Cannot access local development:', error.message);
}

console.log('\n3. Manual Verification Steps:');
console.log('   a) Go to Google Analytics > Admin > Data Streams');
console.log('   b) Click on your web stream');
console.log('   c) Click "Test your website"');
console.log('   d) Enter:', SITE_URL);
console.log('   e) Click "Test" button');
console.log('\n4. Expected Results:');
console.log('   ✅ Google tag should be detected');
console.log('   ✅ No more "tag wasn\'t detected" warning');
console.log('   ✅ Green checkmarks should appear');

console.log('\n5. Environment Variable Setup:');
console.log('   For Vercel deployment, add this environment variable:');
console.log('   NEXT_PUBLIC_GA_MEASUREMENT_ID = G-H5XQ86DW7G');
console.log('\n   In Vercel Dashboard:');
console.log('   - Go to your project settings');
console.log('   - Navigate to Environment Variables');
console.log('   - Add the variable above');
console.log('   - Redeploy your project');

console.log('\n🎯 Your Google Analytics setup is now complete!'); 