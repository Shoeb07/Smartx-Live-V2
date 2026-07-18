import { MetadataRoute } from 'next'
import { blogPosts } from '../lib/blog-posts'
import { seoPageList } from '../lib/seo-pages'

const siteUrl = 'https://www.smartxsolutions.in'

// Static dates so Google does not ignore lastmod as unreliable.
// Update SITE_DATE whenever significant content changes are published.
const SITE_DATE = new Date('2026-07-19')
const CONTENT_DATE = new Date('2026-06-01')
const LEGAL_DATE = new Date('2025-01-01')

export default function sitemap(): MetadataRoute.Sitemap {
  // All SEO-managed pages (about-us, services, web-development-services, etc.)
  // /case-studies 308-redirects to /portfolio (next.config.js) — keep it out of the sitemap
  const seoPageEntries: MetadataRoute.Sitemap = seoPageList
    .filter((page) => page.slug !== 'case-studies')
    .map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: CONTENT_DATE,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))

  // Blog post pages (served at root level e.g. /custom-web-application-company)
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/${post.slug}`,
    lastModified: CONTENT_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    // Branded hero images — emitted as <image:image> tags for Google Images
    ...(post.image ? { images: [`${siteUrl}${post.image}`] } : {}),
  }))

  return [
    // Homepage
    { url: siteUrl, lastModified: SITE_DATE, changeFrequency: 'weekly', priority: 1.0 },

    // All SEO-managed landing pages (generated from seo-pages.ts — never miss a page)
    ...seoPageEntries,

    // Blog listing page
    { url: `${siteUrl}/blog`, lastModified: SITE_DATE, changeFrequency: 'weekly', priority: 0.8 },

    // Nested service landing pages (not in seoPages)
    { url: `${siteUrl}/services/saas-development-company-hyderabad`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services/fintech-app-development-hyderabad`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.9 },

    // Offshore / US-market landing page
    { url: `${siteUrl}/offshore-software-development-india`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.9 },

    // Competitor gap page — enterprise software (zerozilla keyword gap)
    { url: `${siteUrl}/enterprise-software-development-hyderabad`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.8 },

    // Author profile pages
    { url: `${siteUrl}/authors/shoeb-uddin`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/authors/saleha-begum`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.5 },

    // Case study pages
    { url: `${siteUrl}/portfolio/ag-traders`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/portfolio/furnexo`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/portfolio/mant-talent`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/portfolio/one-stop-dashboard`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.8 },

    // Competitor comparison pages
    { url: `${siteUrl}/best-software-development-companies-hyderabad`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/software-development-agency-vs-upwork`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/smartx-solutions-vs-toptal`, lastModified: CONTENT_DATE, changeFrequency: 'monthly', priority: 0.7 },

    // Blog post pages
    ...blogEntries,

    // Legal pages
    { url: `${siteUrl}/privacy-policy`, lastModified: LEGAL_DATE, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/terms-and-conditions`, lastModified: LEGAL_DATE, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
