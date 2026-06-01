import type { Metadata } from 'next'
import SeoLandingPage from '@/components/seo/SeoLandingPage'
import { buildMetadata } from '@/lib/seo'
import { seoPages } from '@/lib/seo-pages'

const page = seoPages.portfolio

export const metadata: Metadata = buildMetadata(page)

export default function PortfolioPage() {
  return <SeoLandingPage page={page} />
}
