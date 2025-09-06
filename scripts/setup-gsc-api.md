# Google Search Console API Setup Guide

This guide will help you set up the Google Search Console API to diagnose and resolve sitemap issues.

## 🚀 Quick Setup

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google Search Console API**

### 2. Create Service Account

1. Go to **IAM & Admin** → **Service Accounts**
2. Click **Create Service Account**
3. Name: `flaggle-sitemap-manager`
4. Description: `Manages sitemaps for Flaggle website`
5. Click **Create and Continue**

### 3. Generate Credentials

1. Click on your service account
2. Go to **Keys** tab
3. Click **Add Key** → **Create New Key**
4. Choose **JSON** format
5. Download the JSON file
6. Save as `gsc-credentials.json` in the project root

### 4. Grant Permissions

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Select your property (`https://www.flaggle.fun`)
3. Go to **Settings** → **Users and permissions**
4. Click **Add user**
5. Add your service account email (from the JSON file)
6. Grant **Full** access

## 🔧 Usage

### Run Sitemap Diagnosis

```bash
# Install dependencies
npm install googleapis

# Run diagnosis script
node scripts/gsc-sitemap-diagnosis.js
```

### What the Script Does

1. **Submits sitemaps** to Google Search Console
2. **Gets detailed status** and error information
3. **Inspects URLs** for indexing issues
4. **Provides recommendations** for fixing problems

### Expected Output

```
🚀 Starting Google Search Console Sitemap Diagnosis
Site: https://www.flaggle.fun
Sitemaps: https://www.flaggle.fun/sitemap.xml, https://www.flaggle.fun/sitemap.txt

📋 Current sitemaps in GSC:
   - /sitemap.xml (214 pages)
   - /sitemap.txt (210 pages)

🔍 Diagnosing sitemap: https://www.flaggle.fun/sitemap.xml
============================================================
🚀 Submitting sitemap: https://www.flaggle.fun/sitemap.xml
✅ Sitemap submitted successfully
⏳ Waiting for sitemap processing...

📊 Analysis Results:
----------------------------------------
✅ Sitemap submitted successfully
📅 Last downloaded: 2025-01-05T10:30:00Z
📄 Pages submitted: 214
📄 Pages indexed: 210
✅ No errors found
🔍 URL inspection: PASSED
📊 Indexing state: INDEXED

💡 Recommendations:
----------------------------------------
1. Sitemap is working correctly!
2. Continue monitoring for any future issues
```

## 🛠️ Troubleshooting

### Common Issues

1. **"Permission denied"**
   - Check service account has access to GSC property
   - Verify JSON credentials file is correct

2. **"Sitemap not found"**
   - Ensure sitemap URL is accessible
   - Check robots.txt doesn't block the sitemap

3. **"Invalid sitemap format"**
   - Validate XML format with xmllint
   - Check for proper Content-Type headers

### Manual Testing

```bash
# Test sitemap accessibility
curl -I https://www.flaggle.fun/sitemap.xml

# Validate XML format
curl -s https://www.flaggle.fun/sitemap.xml | xmllint --noout -

# Check robots.txt
curl -s https://www.flaggle.fun/robots.txt
```

## 📊 Benefits

- **Real-time diagnostics** from Google's perspective
- **Detailed error messages** with specific fixes
- **Automated sitemap submission** and monitoring
- **Proactive issue detection** before they become problems

## 🔒 Security

- Keep `gsc-credentials.json` secure and never commit to git
- Add to `.gitignore`:
  ```
  gsc-credentials.json
  *.json
  ```

## 📚 API Reference

- [Google Search Console API Docs](https://developers.google.com/webmaster-tools/v1/getting-started)
- [Sitemaps API Reference](https://developers.google.com/webmaster-tools/v1/sitemaps)
- [URL Inspection API](https://developers.google.com/webmaster-tools/v1/urlInspection/index/inspect)
