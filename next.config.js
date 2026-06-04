/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
    // Optimize image loading
    minimumCacheTTL: 31536000,
  },
  // Enable experimental optimizations
  experimental: {
    optimizeCss: true,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig
