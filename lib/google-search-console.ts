import { google } from 'googleapis';

// Google Search Console API integration
export class GoogleSearchConsoleAPI {
  private webmasters: any;
  private siteUrl: string;

  constructor(credentials: any, siteUrl: string = 'https://www.flaggle.fun') {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
    });

    this.webmasters = google.webmasters({ version: 'v3', auth });
    this.siteUrl = siteUrl;
  }

  // Submit sitemap to Google Search Console
  async submitSitemap(sitemapUrl: string) {
    try {
      const response = await this.webmasters.sitemaps.submit({
        siteUrl: this.siteUrl,
        feedPath: sitemapUrl
      });
      
      console.log('✅ Sitemap submitted successfully:', response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('❌ Error submitting sitemap:', error);
      return { success: false, error: error.message };
    }
  }

  // Get sitemap status and errors
  async getSitemapStatus(sitemapUrl: string) {
    try {
      const response = await this.webmasters.sitemaps.get({
        siteUrl: this.siteUrl,
        feedPath: sitemapUrl
      });
      
      console.log('📊 Sitemap status:', response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('❌ Error getting sitemap status:', error);
      return { success: false, error: error.message };
    }
  }

  // List all submitted sitemaps
  async listSitemaps() {
    try {
      const response = await this.webmasters.sitemaps.list({
        siteUrl: this.siteUrl
      });
      
      console.log('📋 All sitemaps:', response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('❌ Error listing sitemaps:', error);
      return { success: false, error: error.message };
    }
  }

  // Inspect specific URL
  async inspectUrl(url: string) {
    try {
      const response = await this.webmasters.urlInspection.index.inspect({
        requestBody: {
          inspectionUrl: url,
          siteUrl: this.siteUrl
        }
      });
      
      console.log('🔍 URL inspection result:', response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('❌ Error inspecting URL:', error);
      return { success: false, error: error.message };
    }
  }

  // Diagnose sitemap issues
  async diagnoseSitemap(sitemapUrl: string) {
    console.log('🔍 Diagnosing sitemap:', sitemapUrl);
    
    // 1. Check sitemap status
    const status = await this.getSitemapStatus(sitemapUrl);
    
    // 2. List all sitemaps for comparison
    const sitemaps = await this.listSitemaps();
    
    // 3. Inspect the sitemap URL directly
    const inspection = await this.inspectUrl(sitemapUrl);
    
    return {
      status,
      sitemaps,
      inspection,
      summary: {
        sitemapUrl,
        hasErrors: status.data?.errors?.length > 0,
        lastDownloaded: status.data?.lastDownloaded,
        errors: status.data?.errors || []
      }
    };
  }
}

// Helper function to create API instance
export function createGSCAPI(credentials: any) {
  return new GoogleSearchConsoleAPI(credentials);
}

// Example usage
export async function submitFlaggleSitemaps(credentials: any) {
  const gsc = createGSCAPI(credentials);
  
  const sitemaps = [
    'https://www.flaggle.fun/sitemap.xml',
    'https://www.flaggle.fun/sitemap.txt'
  ];
  
  const results = [];
  
  for (const sitemap of sitemaps) {
    console.log(`\n🚀 Submitting sitemap: ${sitemap}`);
    const result = await gsc.submitSitemap(sitemap);
    results.push({ sitemap, result });
    
    // Wait a bit between submissions
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  return results;
}
