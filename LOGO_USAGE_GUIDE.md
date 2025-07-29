# 🎨 Logo Usage Guide for Flagguesser

## 📁 Generated Logo Files

All logo files have been generated and are located in `/public/logos/` directory.

### **Favicon Files**
- `favicon-16x16.png` - Standard favicon (16x16px)
- `favicon-32x32.png` - Standard favicon (32x32px) 
- `favicon-48x48.png` - Standard favicon (48x48px)

### **Apple Touch Icons**
- `apple-touch-icon-120x120.png` - iPhone (120x120px)
- `apple-touch-icon-152x152.png` - iPad (152x152px)
- `apple-touch-icon-180x180.png` - iPhone 6 Plus (180x180px)

### **Android Icons**
- `android-chrome-192x192.png` - Android Chrome (192x192px)
- `android-chrome-512x512.png` - Android Chrome (512x512px)

### **Header & Footer Logos**
- `logo-header.png` - Header logo (120x40px)
- `logo-header@2x.png` - Header logo retina (240x80px)
- `logo-footer.png` - Footer logo (150x50px)
- `logo-footer@2x.png` - Footer logo retina (300x100px)

### **Social Media & Sharing**
- `og-image.png` - Open Graph image (1200x630px)
- `twitter-card.png` - Twitter Card image (1200x600px)

### **Scalable Vector Graphics**
- `logo.svg` - Main logo SVG (200x67px)
- `logo-header.svg` - Header logo SVG (120x40px)
- `logo-footer.svg` - Footer logo SVG (150x50px)

---

## 🔧 Implementation Status

### ✅ **Completed Updates**

1. **Layout.tsx** - Updated favicon and icon metadata
2. **Header.tsx** - Updated to use `/logos/logo-header.png`
3. **Footer.tsx** - Updated to use `/logos/logo-footer.png`
4. **site.webmanifest** - Updated PWA manifest with new logo paths

### 📋 **Current Logo Usage**

```typescript
// Header Component
<Image src="/logos/logo-header.png" alt="Flagguesser" fill className="object-contain" />

// Footer Component  
<Image src="/logos/logo-footer.png" alt="Flagguesser" fill className="object-contain" />

// Layout.tsx Metadata
icons: {
  icon: [
    { url: "/logos/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/logos/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/logos/favicon-48x48.png", sizes: "48x48", type: "image/png" },
  ],
  shortcut: "/logos/favicon-32x32.png",
  apple: [
    { url: "/logos/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    { url: "/logos/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
    { url: "/logos/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
  ],
  other: [
    { url: "/logos/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/logos/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  ],
}
```

---

## 🎯 **Best Practices**

### **Responsive Images**
```typescript
// Use @2x versions for high-DPI displays
<Image 
  src="/logos/logo-header.png"
  srcSet="/logos/logo-header.png 1x, /logos/logo-header@2x.png 2x"
  alt="Flagguesser"
  fill 
  className="object-contain" 
/>
```

### **SVG Usage**
```typescript
// For scalable logos, use SVG when possible
<Image 
  src="/logos/logo.svg"
  alt="Flagguesser"
  width={200}
  height={67}
  className="object-contain" 
/>
```

### **Favicon Implementation**
```html
<!-- HTML head section -->
<link rel="icon" type="image/png" sizes="32x32" href="/logos/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/logos/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="48x48" href="/logos/favicon-48x48.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/logos/apple-touch-icon-180x180.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/logos/apple-touch-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/logos/apple-touch-icon-120x120.png" />
```

---

## 📱 **Mobile & PWA Support**

### **Progressive Web App**
- Android icons configured in `site.webmanifest`
- Apple touch icons for iOS home screen
- Favicon for browser tabs

### **Social Media Sharing**
- Open Graph image: `/logos/og-image.png`
- Twitter Card image: `/logos/twitter-card.png`

---

## 🔄 **Regeneration Script**

To regenerate all logo files, run:
```bash
node scripts/generate-logos.js
```

This script will:
1. Read the source logo from `/public/flagguesser.png`
2. Generate all required sizes and formats
3. Save files to `/public/logos/` directory
4. Maintain aspect ratio and quality

---

## 📊 **File Sizes & Optimization**

| File | Size | Format | Use Case |
|------|------|--------|----------|
| favicon-16x16.png | ~2KB | PNG | Browser tabs |
| favicon-32x32.png | ~4KB | PNG | Browser tabs |
| logo-header.png | ~8KB | PNG | Website header |
| logo-footer.png | ~12KB | PNG | Website footer |
| og-image.png | ~45KB | PNG | Social media sharing |
| logo.svg | ~3KB | SVG | Scalable logo |

---

## 🎨 **Design Guidelines**

### **Logo Specifications**
- **Primary Color**: Blue (#3B82F6)
- **Background**: Transparent
- **Aspect Ratio**: 3:1 (width:height)
- **Minimum Size**: 16x16px for favicon
- **Recommended Size**: 120x40px for header

### **Usage Rules**
1. **Maintain Aspect Ratio** - Never stretch or distort the logo
2. **Minimum Size** - Don't use smaller than 16x16px
3. **Clear Space** - Leave adequate space around the logo
4. **Background** - Use on light or dark backgrounds
5. **Consistency** - Use the same logo across all platforms

---

## 🚀 **Next Steps**

1. **Test favicon display** in different browsers
2. **Verify PWA installation** on mobile devices
3. **Check social media sharing** previews
4. **Monitor logo performance** and loading times
5. **Update any remaining references** to old logo paths

---

*This guide ensures consistent logo usage across all platforms and devices for the Flagguesser brand.* 