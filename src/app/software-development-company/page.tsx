import type { Metadata } from 'next'
import SeoLandingPage from '@/components/seo/SeoLandingPage'
import { buildMetadata } from '@/lib/seo'
import { seoPages } from '@/lib/seo-pages'

const page = seoPages['software-development-company']

export const metadata: Metadata = buildMetadata(page)

export default function SoftwareDevelopmentCompanyPage() {
  return <SeoLandingPage page={page} />
}
