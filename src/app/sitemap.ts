import { MetadataRoute } from 'next'
import { blogPosts } from '../lib/blog-posts'
import { seoPageList } from '../lib/seo-pages'

const siteUrl = 'https://www.smartxsolutions.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // All SEO-managed pages (about-us, services, web-development-services, etc.)
  // /case-studies 308-redirects to /portfolio (next.config.js) — keep it out of the sitemap
  const seoPageEntries: MetadataRoute.Sitemap = seoPageList
    .filter((page) => page.slug !== 'case-studies')
    .map((page) => ({
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

    // Case study pages
    { url: `${siteUrl}/portfolio/ag-traders`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/portfolio/furnexo`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/portfolio/mant-talent`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/portfolio/one-stop-dashboard`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Competitor comparison pages
    { url: `${siteUrl}/best-software-development-companies-hyderabad`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/software-development-agency-vs-upwork`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/smartx-solutions-vs-toptal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Blog post pages
    ...blogEntries,

    // Legal pages
    { url: `${siteUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/terms-and-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
