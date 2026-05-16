/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },
  // experimental: {
  //   optimizeCss: true,
  // },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};


module.exports = nextConfig
