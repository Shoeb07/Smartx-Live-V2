import { MetadataRoute } from 'next'
import { blogPosts } from '../lib/blog-posts'
import { seoPageList } from '../lib/seo-pages'

const siteUrl = 'https://smartxsolutions.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // All SEO-managed pages (about-us, services, web-development-services, etc.)
  const seoPageEntries: MetadataRoute.Sitemap = seoPageList.map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Blog post pages (served at root level e.g. /custom-web-application-company)
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    // Homepage
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // All SEO-managed landing pages (generated from seo-pages.ts — never miss a page)
    ...seoPageEntries,

    // Blog listing page
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

    // Nested service landing page (not in seoPages)
    { url: `${siteUrl}/services/saas-development-company-hyderabad`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // Blog post pages
    ...blogEntries,

    // Legal pages
    { url: `${siteUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/terms-and-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
