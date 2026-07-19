import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/case-study/CaseStudyLayout'

const siteUrl = 'https://www.smartxsolutions.in'
const canonical = `${siteUrl}/portfolio/furnexo`

export const metadata: Metadata = {
  title: "FurneXo — India's First Furniture Exchange Platform",
  description:
    "How SmartX Solutions built FurneXo — a two-sided marketplace for buying, selling, and exchanging furniture across India.",
  alternates: { canonical },
  openGraph: {
    type: 'article',
    url: canonical,
    siteName: 'SmartX Solutions',
    title: "FurneXo — India's First Furniture Exchange Platform",
    description:
      "How SmartX Solutions designed and built FurneXo — a two-sided marketplace enabling users to buy, sell, and exchange furniture across India.",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: "FurneXo Case Study — SmartX Solutions" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FurneXo — India's First Furniture Exchange Platform",
    description:
      "How SmartX Solutions designed and built FurneXo — India's first dedicated furniture exchange and resale marketplace.",
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Building India's First Furniture Exchange Platform",
  description:
    "How SmartX Solutions built FurneXo — a two-sided marketplace for buying, selling, and exchanging furniture across India.",
  author: {
    '@type': 'Organization',
    name: 'SmartX Solutions',
    url: siteUrl,
  },
  publisher: {
    '@type': 'Organization',
    name: 'SmartX Solutions',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/favicon_io/android-chrome-512x512.png`,
    },
  },
  about: {
    '@type': 'Organization',
    name: 'FurneXo',
    description:
      "FurneXo is India's first dedicated furniture exchange and resale marketplace, enabling users to buy, sell, and swap furniture sustainably.",
  },
  keywords:
    'furniture marketplace India, two-sided marketplace development, React Next.js marketplace, furniture exchange platform, e-commerce marketplace development India',
  datePublished: '2025-01-01',
  dateModified: '2026-07-19',
  url: canonical,
  mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
}

export default function FurneXoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CaseStudyLayout
        title="Building India's First Furniture Exchange Platform"
        subtitle="FurneXo set out to solve a real problem: good furniture going to waste when people move or upgrade. We built the platform that lets anyone buy, sell, or swap furniture — making it India's first dedicated furniture exchange marketplace."
        client="FurneXo"
        industry="E-Commerce · Marketplace"
        timeline="14 weeks"
        liveUrl={null}
        accentColor="#00e5b0"
        techStack={[
          'React',
          'Next.js',
          'Node.js',
          'MongoDB',
          'Tailwind CSS',
          'Cloudinary',
          'Razorpay',
          'Firebase Auth',
          'Vercel',
        ]}
        challenge="The furniture resale market in India is fragmented across WhatsApp groups, OLX listings, and local dealers — with no dedicated, trustworthy platform. FurneXo's founder came to SmartX Solutions with a vision: build the first marketplace specifically designed for furniture exchange, where users could list, discover, and transact furniture safely. The platform needed to handle image-heavy listings, location-based discovery, secure payments, and a two-sided marketplace dynamic — all from a standing start."
        solution={[
          {
            heading: 'Two-Sided Marketplace Architecture',
            detail:
              'We designed separate seller and buyer flows — sellers list furniture with photos, condition ratings, and asking price; buyers browse by category, location, and condition. An exchange option lets users propose swaps directly through the platform.',
          },
          {
            heading: 'Image-First Listing Experience',
            detail:
              'Furniture is a visual purchase. We integrated Cloudinary for automatic image optimisation and CDN delivery — listings load fast even with 8-10 high-resolution photos per item. Multi-image upload with drag-and-drop reordering was built into the seller flow.',
          },
          {
            heading: 'Location-Based Discovery',
            detail:
              'Buyers can filter furniture by city and distance. This was critical for a product category where shipping costs often exceed the item value — local pickup is the default, not the exception.',
          },
          {
            heading: 'Secure Payment Integration',
            detail:
              'Razorpay handles all transactions with escrow-style payment holds — money transfers to the seller only after the buyer confirms receipt. This builds trust on both sides of the marketplace.',
          },
          {
            heading: 'Admin Dashboard for Marketplace Management',
            detail:
              'A full admin panel lets the FurneXo team approve listings, manage disputes, view transaction history, and monitor platform health — all in a single dashboard built with the same design system as the main platform.',
          },
        ]}
        results={[
          {
            metric: '14 Weeks',
            value: 'Concept to Launch',
            description:
              'Full marketplace — both buyer and seller flows, payments, admin panel — delivered in 14 weeks from initial brief',
          },
          {
            metric: 'First',
            value: 'In India',
            description:
              "India's first dedicated furniture exchange and resale marketplace — a genuinely new product category",
          },
          {
            metric: '2-sided',
            value: 'Marketplace',
            description:
              'Separate optimised flows for buyers and sellers with secure escrow payments and dispute resolution',
          },
        ]}
        heroImagePlaceholder="FurneXo platform — homepage and listing page screenshots"
        screenshotPlaceholders={[
          {
            alt: 'FurneXo homepage',
            caption: 'Homepage — furniture discovery with category filters and location search',
          },
          {
            alt: 'FurneXo listing page',
            caption: 'Furniture listing page — multi-image gallery, condition rating, seller profile',
          },
          {
            alt: 'FurneXo sell flow',
            caption: 'Seller flow — multi-step listing creation with drag-and-drop image upload',
          },
          {
            alt: 'FurneXo admin dashboard',
            caption: 'Admin dashboard — listing approvals, transaction monitoring, platform analytics',
          },
        ]}
        testimonial={null}
        /* Testimonial from FurneXo founder — to be added */
        relatedServices={[
          { href: '/software-development-company', label: 'Custom Software Development' },
          { href: '/web-development-services', label: 'Web Development Services' },
        ]}
      />
    </>
  )
}
