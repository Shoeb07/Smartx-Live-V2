import type { Metadata } from 'next'
import SeoLandingPage from '@/components/seo/SeoLandingPage'
import { buildMetadata } from '@/lib/seo'
import { seoPages } from '@/lib/seo-pages'

const page = seoPages['about-us']

export const metadata: Metadata = buildMetadata(page)

export default function AboutUsPage() {
  return <SeoLandingPage page={page} />
}
