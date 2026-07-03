import type { Metadata } from 'next'
import AuthorProfile from '@/components/authors/AuthorProfile'
import { salehaBegum } from '@/lib/blog-authors'
import { absoluteUrl, siteUrl } from '@/lib/seo'

const url = absoluteUrl('/authors/saleha-begum')

export const metadata: Metadata = {
  title: 'Saleha Begum — Co-Founder & CTO, SmartX Solutions',
  description:
    'Saleha Begum is the Co-Founder and CTO of SmartX Solutions, leading engineering and architecture. Read her guides on web development costs, WordPress vs custom, and hiring.',
  alternates: { canonical: url },
  openGraph: {
    type: 'profile',
    url,
    siteName: 'SmartX Solutions',
    title: 'Saleha Begum — Co-Founder & CTO, SmartX Solutions',
    description:
      'Saleha Begum is the Co-Founder and CTO of SmartX Solutions, leading engineering and technical architecture. Read her development guides.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Saleha Begum — SmartX Solutions' }],
  },
}

export default function SalehaBegumPage() {
  return (
    <AuthorProfile
      author={salehaBegum}
      slug="saleha-begum"
      personId={`${siteUrl}/#saleha-begum`}
      expertise={[
        'Technical architecture',
        'Web application engineering',
        'WordPress vs custom development',
        'Development cost analysis',
        'Team structures and hiring',
      ]}
    />
  )
}
