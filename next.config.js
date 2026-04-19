/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
   experimental: {
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
  // Strict mode for better React 19 compat
  reactStrictMode: true,
}

module.exports = nextConfig
