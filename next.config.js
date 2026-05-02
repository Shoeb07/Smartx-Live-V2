/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // ❌ DELETE these 3 lines — they caused the error:
  // experimental: {
  //   optimizeCss: true,
  // },
}

module.exports = nextConfig