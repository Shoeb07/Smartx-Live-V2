import type { Metadata } from 'next'
import SeoLandingPage from '@/components/seo/SeoLandingPage'
import DirectAnswer from '@/components/ui/DirectAnswer'
import { buildMetadata } from '@/lib/seo'
import { seoPages } from '@/lib/seo-pages'

const page = seoPages['mobile-app-development']

export const metadata: Metadata = buildMetadata(page)

export default function MobileAppDevelopmentPage() {
  return (
    <SeoLandingPage
      page={page}
      topSlot={
        <DirectAnswer
          question="How much does mobile app development cost in Hyderabad in 2026?"
          answer="Mobile app development in Hyderabad costs ₹75,000 to ₹2,00,000 for a simple app with basic features, ₹2,00,000 to ₹5,00,000 for a mid-complexity app with backend and user accounts, and ₹5,00,000 or more for a full-featured platform with payments, real-time features, or AI integration. SmartX Solutions provides fixed-price project quotes within 48 hours."
        />
      }
    />
  )
}
