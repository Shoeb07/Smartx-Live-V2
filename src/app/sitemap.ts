import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

const siteUrl = 'https://www.smartxsolutions.in'

const staticRoutes = [
  '',
  '/about-us',
  '/ai-automation-services',
  '/authors/saleha-begum',
  '/authors/shoeb-uddin',
  '/best-software-development-companies-hyderabad',
  '/blog',
  '/contact-us',
  '/custom-web-application-company',
  '/digital-innovation-agency',
  '/digital-marketing-services',
  '/enterprise-software-development-hyderabad',
  '/industries',
  '/it-services-company',
  '/mobile-app-development',
  '/mobile-app-development-cost-india',
  '/offshore-software-development-india',
  '/portfolio',
  '/portfolio/ag-traders',
  '/portfolio/furnexo',
  '/portfolio/mant-talent',
  '/portfolio/one-stop-dashboard',
  '/privacy-policy',
  '/product-development-company',
  '/services',
  '/services/fintech-app-development-hyderabad',
  '/services/saas-development-company-hyderabad',
  '/smartx-solutions-vs-toptal',
  '/software-development-agency-vs-upwork',
  '/software-development-company',
  '/software-development-company-guide',
  '/technologies',
  '/terms-and-conditions',
  '/web-development-services',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route || '/'}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contact-us' ? 0.9 : 0.75,
  }))

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/${post.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.65,
  }))

  return [...staticEntries, ...blogEntries]
}
