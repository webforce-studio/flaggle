import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://www.google-analytics.com https://www.google.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https://flagcdn.com https://www.flaggle.fun https://www.monumentle.fun https://www.daily-challenge.fun https://www.numlink.fun https://www.classic-snake.com https://browse-ai.tools https://www.stop-watch.online https://www.flip-a-coin.online https://www.wheel-spinner.online https://commons.wikimedia.org",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://*.adtrafficquality.google https://ipapi.co",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
        ],
      },
      {
        source: '/_next/static/css/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=300',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, HEAD, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'User-Agent, Accept, Accept-Language',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, HEAD, OPTIONS',
          },
        ],
      },
      {
        source: '/sitemaps/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=300',
          },
        ],
      },
    ]
  },
  experimental: {
    optimizeCss: false, // Disabled due to critters dependency issues
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Disable polyfills for modern JavaScript features
  webpack: (config, { dev, isServer }) => {
    // Disable polyfills for modern features
    config.resolve.fallback = {
      ...config.resolve.fallback,
      // Disable polyfills for these features that are supported in modern browsers
      'core-js/stable': false,
      'regenerator-runtime/runtime': false,
    };
    
    // Exclude polyfills from bundle
    config.module.rules.push({
      test: /\.js$/,
      exclude: [
        /node_modules\/core-js/,
        /node_modules\/regenerator-runtime/,
      ],
    });
    
    // Remove polyfills plugin
    config.plugins = config.plugins.filter(plugin => {
      return !plugin.constructor.name.includes('Polyfill');
    });
    
    // Disable polyfills entirely
    config.optimization = {
      ...config.optimization,
      sideEffects: false,
    };
    
    // Disable polyfills for modern features
    config.resolve.alias = {
      ...config.resolve.alias,
      'core-js/stable': false,
      'regenerator-runtime/runtime': false,
    };
    
    // Force modern target to disable polyfills
    // config.target = 'browserslist'; // Disabled due to build errors
    
    // Try to disable polyfills by setting target to modern browsers
    if (!isServer) {
      config.target = 'browserslist';
    }
    
    // Add webpack plugin to completely remove polyfills file
    config.plugins.push({
      apply(compiler) {
        compiler.hooks.emit.tap('RemovePolyfills', (compilation) => {
          Object.keys(compilation.assets).forEach((name) => {
            if (name.includes('polyfill')) {
              delete compilation.assets[name];
            }
          });
        });
      },
    });
    
    return config;
  },
  async redirects() {
    return [
      {
        source: '/((?!sitemap\\.xml|robots\\.txt).*)',
        has: [
          {
            type: 'host',
            value: 'flaggle.fun',
          },
        ],
        destination: 'https://www.flaggle.fun/$1',
        permanent: true,
      },
    ]
  },
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig)
