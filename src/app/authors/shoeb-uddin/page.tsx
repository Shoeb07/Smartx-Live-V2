import type { Metadata } from 'next'
import AuthorProfile from '@/components/authors/AuthorProfile'
import { shoebUddin } from '@/lib/blog-authors'
import { absoluteUrl, siteUrl } from '@/lib/seo'

const url = absoluteUrl('/authors/shoeb-uddin')

export const metadata: Metadata = {
  title: 'Shoeb Uddin — Founder & CEO, SmartX Solutions',
  description:
    'Shoeb Uddin is the Founder and CEO of SmartX Solutions, a Hyderabad software development company. Read his guides on web development, choosing agencies, and software costs.',
  alternates: { canonical: url },
  openGraph: {
    type: 'profile',
    url,
    siteName: 'SmartX Solutions',
    title: 'Shoeb Uddin — Founder & CEO, SmartX Solutions',
    description:
      'Shoeb Uddin is the Founder and CEO of SmartX Solutions. Read his guides on web development, choosing agencies, and software costs.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Shoeb Uddin — SmartX Solutions' }],
  },
}

export default function ShoebUddinPage() {
  return (
    <AuthorProfile
      author={shoebUddin}
      slug="shoeb-uddin"
      personId={`${siteUrl}/#shoeb-uddin`}
      expertise={[
        'Product strategy',
        'Choosing software development partners',
        'Web development for Indian businesses',
        'Software project costs and budgeting',
        'Startup MVPs',
      ]}
    />
  )
}
