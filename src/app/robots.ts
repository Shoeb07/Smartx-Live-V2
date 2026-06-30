import { MetadataRoute } from 'next'

const siteUrl = 'https://www.smartxsolutions.in'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/dashboard/', '/api/'],
      },
      // Major search crawlers — explicit allow
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // AI assistants — allow for citation/answer engine visibility
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // AI training crawlers — disallow
      {
        userAgent: 'ClaudeBot',
        disallow: '/',
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
