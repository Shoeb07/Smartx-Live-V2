import type { Metadata } from 'next'
import SeoLandingPage from '@/components/seo/SeoLandingPage'
import DirectAnswer from '@/components/ui/DirectAnswer'
import { buildMetadata } from '@/lib/seo'
import { seoPages } from '@/lib/seo-pages'

const page = seoPages['web-development-services']

export const metadata: Metadata = buildMetadata(page)

export default function WebDevelopmentServicesPage() {
  return (
    <SeoLandingPage
      page={page}
      topSlot={
        <DirectAnswer
          question="How much does web development cost in Hyderabad in 2026?"
          answer="Web development in Hyderabad costs ₹50,000 to ₹1,50,000 for a business website, ₹2,00,000 to ₹5,00,000 for a web application with user accounts and dashboards, and ₹5,00,000 or more for a complex portal or SaaS platform. SmartX Solutions offers fixed-price web development with a dedicated senior team and 30-day post-launch warranty."
        />
      }
    />
  )
}
