import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/case-study/CaseStudyLayout'

const siteUrl = 'https://www.smartxsolutions.in'
const canonical = `${siteUrl}/portfolio/ag-traders`

export const metadata: Metadata = {
  title: 'AG Traders — Manufacturer Website That Ranks on Google',
  description:
    'How SmartX Solutions built a fast, SEO-optimised website for AG Traders, a fencing wire manufacturer — first-page Google rankings in 6 weeks.',
  alternates: { canonical },
  openGraph: {
    type: 'article',
    url: canonical,
    siteName: 'SmartX Solutions',
    title: 'AG Traders — Manufacturer Website That Ranks on Google',
    description:
      'How SmartX Solutions built a fast, SEO-optimised website for AG Traders, a fencing wire manufacturer — first-page Google rankings in 6 weeks.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AG Traders Case Study — SmartX Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AG Traders — Manufacturer Website That Ranks on Google',
    description:
      'How SmartX Solutions built a fast, SEO-optimised website for AG Traders, a fencing wire manufacturer in Palghar, Maharashtra.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How We Got a Palghar Manufacturer Ranking on Google in 6 Weeks',
  description:
    'How SmartX Solutions built a fast, SEO-optimised website for AG Traders, a fencing wire manufacturer — first-page Google rankings in 6 weeks.',
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
    name: 'AG Traders',
    description:
      'AG Traders is a manufacturer of fencing wire, chain link fencing, barbed wire, and galvanized iron products based in Palghar, Maharashtra.',
  },
  keywords:
    'fencing wire manufacturer website, manufacturer SEO India, Next.js manufacturer website, local SEO Maharashtra, B2B manufacturer digital presence',
  datePublished: '2025-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  url: canonical,
  mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
}

export default function AgTradersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CaseStudyLayout
        title="How We Got a Palghar Manufacturer Ranking on Google in 6 Weeks"
        subtitle="AG Traders needed a digital presence to reach contractors and procurement teams searching for fencing wire suppliers online. We built them a fast, mobile-first website that Google loves."
        client="AG Traders"
        industry="Manufacturing · B2B"
        timeline="4 weeks"
        liveUrl="https://agtraders.info"
        accentColor="#6c63ff"
        techStack={['Next.js 14', 'Tailwind CSS', 'Vercel', 'Google Analytics', 'WhatsApp API', 'SEO']}
        challenge="AG Traders is a well-established manufacturer of fencing wire, chain link fencing, barbed wire, and galvanized iron products based in Palghar, Maharashtra. Despite years of operation and a strong offline reputation, they had zero digital presence. Contractors, builders, and procurement managers searching for fencing wire suppliers in Maharashtra could not find them online — all business came through word of mouth alone. The brief was clear: get them found on Google, display their full product range professionally, and make it easy for buyers to enquire."
        solution={[
          {
            heading: 'Static Site Generation for Maximum Speed',
            detail:
              'We chose Next.js with static generation over WordPress — pages load in under 1 second, no database overhead, no security patches, and Google can read every product detail instantly without JavaScript execution.',
          },
          {
            heading: 'Mobile-First Design for Site Engineers',
            detail:
              'Research showed the primary visitor — a site engineer or procurement manager — is often on a construction site using a mobile phone. We designed for mobile first: large tappable product cards, click-to-call at the top, and WhatsApp enquiry buttons throughout.',
          },
          {
            heading: 'Pre-Populated WhatsApp Enquiry per Product',
            detail:
              'When a buyer clicks Get Quote on any product page, WhatsApp opens with a pre-written message including the product name. The client receives a qualified, specific enquiry — not a blank message.',
          },
          {
            heading: 'Location-Specific SEO from Day One',
            detail:
              'We targeted fencing wire supplier Maharashtra, chain link fencing Palghar, and related local terms — embedding them naturally in page titles, product descriptions, and LocalBusiness schema markup from the first deploy.',
          },
          {
            heading: 'Google Business Profile Integration',
            detail:
              'We helped set up and verify their Google Business Profile with matching NAP data, product categories, and photos — creating consistent local signals that Google uses to verify legitimate businesses.',
          },
        ]}
        results={[
          {
            metric: '< 1s',
            value: 'Page Load Time',
            description:
              'Google PageSpeed score of 97/100 on mobile — significantly faster than typical manufacturer websites',
          },
          {
            metric: '6 Weeks',
            value: 'First Google Rankings',
            description:
              'Appeared on page 1 of Google for location-specific fencing wire searches within 6 weeks of launch',
          },
          {
            metric: '100%',
            value: 'Mobile Optimised',
            description:
              'Fully responsive across all devices with zero Cumulative Layout Shift — perfect Core Web Vitals score',
          },
        ]}
        heroImagePlaceholder="AG Traders homepage — full website screenshot on desktop and mobile"
        screenshotPlaceholders={[
          {
            alt: 'AG Traders homepage screenshot',
            caption: 'Homepage — hero section with product categories and WhatsApp CTA',
          },
          {
            alt: 'AG Traders product page screenshot',
            caption: 'Product catalogue — chain link fencing with specifications and enquiry button',
          },
          {
            alt: 'AG Traders mobile view',
            caption: 'Mobile view — optimised for site engineers on construction sites',
          },
          {
            alt: 'Google Search result showing AG Traders',
            caption: 'Google search result — ranking for local fencing wire queries',
          },
        ]}
        testimonial={null}
        /* Testimonial from AG Traders client — to be added */
      />
    </>
  )
}
