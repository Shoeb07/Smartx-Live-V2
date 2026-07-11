/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Bare domain -> www (also enforced at the host level; this is defense-in-depth)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'smartxsolutions.in' }],
        destination: 'https://www.smartxsolutions.in/:path*',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/case-studies/:path*',
        destination: '/portfolio/:path*',
        permanent: true,
      },
    ]
  },
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
