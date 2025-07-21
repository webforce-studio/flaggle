#!/bin/bash

# Cookie Consent Implementation Setup Script
echo "🍪 Setting up Cookie Consent Implementation..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install react-cookie-consent lucide-react

# Create directories if they don't exist
echo "📁 Creating directories..."
mkdir -p components
mkdir -p styles

# Copy files
echo "📋 Copying files..."
cp components/cookie-consent.tsx ./components/
cp styles/globals.css ./styles/

echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Replace 'YOUR_GA_ID' with your Google Analytics ID"
echo "2. Replace 'YOUR_ADSENSE_ID' with your AdSense publisher ID"
echo "3. Import SimpleCookieConsent in your layout"
echo "4. Add the CSS variables to your global styles"
echo ""
echo "🎯 Files created:"
echo "- components/cookie-consent.tsx"
echo "- styles/globals.css"
echo "- google-analytics-setup.tsx"
echo "- layout-example.tsx"
echo ""
echo "🚀 Ready to use!" 