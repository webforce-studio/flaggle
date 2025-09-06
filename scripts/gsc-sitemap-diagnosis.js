#!/usr/bin/env node

/**
 * Google Search Console Sitemap Diagnosis Script
 * 
 * This script helps diagnose and resolve sitemap issues by:
 * 1. Submitting sitemaps to GSC via API
 * 2. Getting detailed error information
 * 3. Providing actionable recommendations
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'sc-domain:flaggle.fun';
const SITEMAPS = [
  'https://www.flaggle.fun/sitemap.xml',
  'https://www.flaggle.fun/sitemap.txt'
];

class SitemapDiagnostic {
  constructor(credentials) {
    this.auth = new google.auth.GoogleAuth({
      credentials,
      scopes: [
        'https://www.googleapis.com/auth/webmasters.readonly',
        'https://www.googleapis.com/auth/webmasters'
      ]
    });
    this.webmasters = google.webmasters({ version: 'v3', auth: this.auth });
  }

  async submitSitemap(sitemapUrl) {
    try {
      console.log(`🚀 Submitting sitemap: ${sitemapUrl}`);
      
      const response = await this.webmasters.sitemaps.submit({
        siteUrl: SITE_URL,
        feedpath: sitemapUrl
      });
      
      console.log('✅ Sitemap submitted successfully');
      return { success: true, data: response.data };
    } catch (error) {
      console.error('❌ Error submitting sitemap:', error.message);
      return { success: false, error: error.message };
    }
  }

  async getSitemapStatus(sitemapUrl) {
    try {
      const response = await this.webmasters.sitemaps.get({
        siteUrl: SITE_URL,
        feedpath: sitemapUrl
      });
      
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async listAllSitemaps() {
    try {
      const response = await this.webmasters.sitemaps.list({
        siteUrl: SITE_URL
      });
      
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async inspectUrl(url) {
    try {
      const response = await this.webmasters.urlInspection.index.inspect({
        requestBody: {
          inspectionUrl: url,
          siteUrl: SITE_URL
        }
      });
      
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async diagnoseSitemap(sitemapUrl) {
    console.log(`\n🔍 Diagnosing sitemap: ${sitemapUrl}`);
    console.log('=' .repeat(60));
    
    // 1. Submit the sitemap
    const submitResult = await this.submitSitemap(sitemapUrl);
    
    // 2. Wait a moment for processing
    console.log('⏳ Waiting for sitemap processing...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // 3. Get status
    const statusResult = await this.getSitemapStatus(sitemapUrl);
    
    // 4. Inspect the URL
    const inspectionResult = await this.inspectUrl(sitemapUrl);
    
    // 5. Analyze results
    this.analyzeResults(sitemapUrl, {
      submit: submitResult,
      status: statusResult,
      inspection: inspectionResult
    });
    
    return {
      sitemapUrl,
      submit: submitResult,
      status: statusResult,
      inspection: inspectionResult
    };
  }

  analyzeResults(sitemapUrl, results) {
    console.log('\n📊 Analysis Results:');
    console.log('-'.repeat(40));
    
    // Check submission
    if (results.submit.success) {
      console.log('✅ Sitemap submitted successfully');
    } else {
      console.log('❌ Sitemap submission failed:', results.submit.error);
    }
    
    // Check status
    if (results.status.success) {
      const data = results.status.data;
      console.log(`📅 Last downloaded: ${data.lastDownloaded || 'Never'}`);
      console.log(`📄 Pages submitted: ${data.contents?.[0]?.submitted || 'Unknown'}`);
      console.log(`📄 Pages indexed: ${data.contents?.[0]?.indexed || 'Unknown'}`);
      
      if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
        console.log('❌ Errors found:');
        data.errors.forEach((error, index) => {
          console.log(`   ${index + 1}. ${error.reason}: ${error.message}`);
        });
      } else {
        console.log('✅ No errors found');
      }
    } else {
      console.log('❌ Could not get sitemap status:', results.status.error);
    }
    
    // Check URL inspection
    if (results.inspection.success) {
      const data = results.inspection.data;
      console.log(`🔍 URL inspection: ${data.inspectionResult?.verdict || 'Unknown'}`);
      if (data.inspectionResult?.indexingState) {
        console.log(`📊 Indexing state: ${data.inspectionResult.indexingState}`);
      }
    }
    
    // Provide recommendations
    this.provideRecommendations(sitemapUrl, results);
  }

  provideRecommendations(sitemapUrl, results) {
    console.log('\n💡 Recommendations:');
    console.log('-'.repeat(40));
    
    if (!results.submit.success) {
      console.log('1. Check your GSC API credentials and permissions');
      console.log('2. Verify the sitemap URL is accessible');
      console.log('3. Ensure the site is verified in GSC');
    }
    
    if (results.status.success && results.status.data.errors?.length > 0) {
      console.log('1. Fix the specific errors listed above');
      console.log('2. Validate your sitemap XML format');
      console.log('3. Check for server errors or timeouts');
    }
    
    if (results.status.success && !results.status.data.lastDownloaded) {
      console.log('1. Sitemap may not be processed yet - wait and try again');
      console.log('2. Check if sitemap is properly referenced in robots.txt');
      console.log('3. Verify sitemap is accessible to Googlebot');
    }
    
    console.log('4. Test sitemap accessibility:');
    console.log(`   curl -I "${sitemapUrl}"`);
    console.log('5. Validate XML format:');
    console.log(`   xmllint --noout "${sitemapUrl}"`);
  }

  async runFullDiagnosis() {
    console.log('🚀 Starting Google Search Console Sitemap Diagnosis');
    console.log(`Site: ${SITE_URL}`);
    console.log(`Sitemaps: ${SITEMAPS.join(', ')}`);
    console.log('=' .repeat(60));
    
    const results = [];
    
    // List existing sitemaps first
    console.log('\n📋 Current sitemaps in GSC:');
    const existingSitemaps = await this.listAllSitemaps();
    if (existingSitemaps.success) {
      existingSitemaps.data.sitemap?.forEach(sitemap => {
        console.log(`   - ${sitemap.path} (${sitemap.contents?.[0]?.submitted || 0} pages)`);
      });
    }
    
    // Diagnose each sitemap
    for (const sitemap of SITEMAPS) {
      const result = await this.diagnoseSitemap(sitemap);
      results.push(result);
      
      // Wait between sitemaps
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    console.log('\n🎯 Summary:');
    console.log('=' .repeat(60));
    results.forEach(result => {
      const status = result.status.success ? '✅' : '❌';
      console.log(`${status} ${result.sitemapUrl}`);
    });
    
    return results;
  }
}

// Main execution
async function main() {
  try {
    // Load credentials from file
    const credentialsPath = path.join(__dirname, '..', 'gsc-credentials.json');
    
    if (!fs.existsSync(credentialsPath)) {
      console.error('❌ GSC credentials file not found!');
      console.log('Please create gsc-credentials.json with your GSC API credentials');
      console.log('See: https://developers.google.com/webmaster-tools/v1/getting-started');
      process.exit(1);
    }
    
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
    const diagnostic = new SitemapDiagnostic(credentials);
    
    await diagnostic.runFullDiagnosis();
    
  } catch (error) {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { SitemapDiagnostic };
