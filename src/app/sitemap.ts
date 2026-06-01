import { MetadataRoute } from 'next'
import { seoPageList } from '@/lib/seo-pages'
import { blogPosts } from '@/lib/blog-posts'

const siteUrl = 'https://smartxsolutions.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...seoPageList.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/${post.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: post.keyword === 'software development company' ? 0.85 : 0.7,
    })),
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-and-conditions`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  return staticRoutes
}
