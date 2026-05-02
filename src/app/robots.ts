import { MetadataRoute } from 'next'

const siteUrl = 'https://smartxsolutions.in'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all crawlers to index everything public
        userAgent: '*',
        allow: '/',
        // Only block truly private paths — NOT /_next/ or /api/
        // (/_next/ is already inaccessible to end users; blocking it
        //  in robots.txt triggers the "Disallow Directive" warning)
        disallow: ['/admin/', '/private/'],
      },
      {
        // Block AI training crawlers from scraping your content
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        disallow: ['/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
