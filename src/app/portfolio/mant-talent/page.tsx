/*
  HOW TO ADD REAL SCREENSHOTS:

  1. Go to https://www.manttalent.com
  2. Take full-page screenshots using:
     Chrome DevTools -> F12 -> Ctrl+Shift+P ->
     "Capture full size screenshot"
  3. Save files to:
     public/case-studies/mant-talent/hero.png (1200x600)
     public/case-studies/mant-talent/screenshot-1.png
     public/case-studies/mant-talent/screenshot-2.png
     public/case-studies/mant-talent/screenshot-3.png
     public/case-studies/mant-talent/screenshot-4.png
     public/case-studies/mant-talent/screenshot-5.png
  4. Replace placeholder divs with Next.js Image components
*/

import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/case-study/CaseStudyLayout'

const siteUrl = 'https://www.smartxsolutions.in'
const canonical = `${siteUrl}/portfolio/mant-talent`

export const metadata: Metadata = {
  title: 'MantTalent - Non-IT Staffing Website for US Market',
  description:
    'How SmartX Solutions built the MantTalent Solutions website - a modern, conversion-focused Next.js site for a US non-IT staffing agency.',
  alternates: { canonical },
  openGraph: {
    type: 'article',
    url: canonical,
    siteName: 'SmartX Solutions',
    title: 'MantTalent - Non-IT Staffing Website for US Market',
    description:
      'How SmartX Solutions built the MantTalent Solutions website - a modern, conversion-focused Next.js site for a US non-IT staffing agency.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MantTalent Case Study - SmartX Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MantTalent - Non-IT Staffing Website for US Market',
    description:
      'How SmartX Solutions built the MantTalent Solutions website for a US non-IT staffing agency.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MantTalent Solutions - Non-IT Staffing Website Built by SmartX Solutions',
  description:
    'Case study: SmartX Solutions built the MantTalent website with Next.js 15 - a conversion-optimised staffing agency site for the US market.',
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
    name: 'MANT Talent Solutions',
    url: 'https://www.manttalent.com',
    description:
      'Specialized non-IT staffing partner helping US companies hire skilled professionals across 13 industries',
  },
  keywords:
    'staffing agency website, Next.js website development, US staffing website, recruitment website design, SmartX Solutions portfolio',
  datePublished: '2025-06-01',
  dateModified: new Date().toISOString().split('T')[0],
  url: canonical,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': canonical,
  },
}

export default function MantTalentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CaseStudyLayout
        title="Building a US Staffing Agency's Digital Presence from Scratch"
        subtitle="MANT Talent Solutions needed a professional, conversion-focused website to establish their brand and capture US clients searching for non-IT staffing partners. SmartX Solutions designed and built their entire digital presence using Next.js 15."
        client="MANT Talent Solutions"
        industry="Staffing & Recruitment - US Market"
        timeline="5 weeks"
        liveUrl="https://www.manttalent.com"
        accentColor="#6c63ff"
        techStack={[
          'Next.js 15',
          'TypeScript',
          'Tailwind CSS',
          'Framer Motion',
          'Vercel',
          'Google Analytics',
          'Resend (Email API)',
        ]}
        challenge="MANT Talent Solutions is a specialized non-IT staffing agency helping US companies hire pre-vetted professionals across operations, finance, marketing, manufacturing, and 9 other industries. Backed by 25+ years of collective US staffing expertise, they had the experience and talent pipeline - but no digital presence to match. US companies searching for non-IT staffing partners could not find them online. Their existing presence was minimal, and the brief was clear: build a credible, conversion-focused website that positions MANT Talent as a trusted expert in the US staffing market - from the very first visit."
        solution={[
          {
            heading: 'US Market-Focused Positioning',
            detail:
              "Every content and design decision was made with the US buyer in mind. The hero leads with 'Serving All US States', trust signals reference US compliance and hiring norms, and the tone is professional and direct - matching the expectations of US HR directors and operations heads who are the primary decision-makers.",
          },
          {
            heading: 'Conversion-Optimised Lead Capture',
            detail:
              'The site was architected around one primary goal: getting companies to submit a talent request. A detailed multi-field contact form captures industry, hiring model, roles needed, and company context - giving the MANT Talent team everything they need to respond with a tailored strategy within 24 hours.',
          },
          {
            heading: '13-Industry Service Architecture',
            detail:
              "MANT Talent serves 13 distinct industries - each with different hiring norms and compliance requirements. We structured the Industries page to address each sector's specific talent needs, making it easy for a manufacturing company to see immediately that MANT Talent understands their world - not just generic staffing.",
          },
          {
            heading: 'Animated Stats and Trust Signals',
            detail:
              'Key credibility markers - 500+ placements, 96% satisfaction rate, 25+ years experience - are presented with animated counter components and visual hierarchy that makes them impossible to miss. Social proof is placed at every decision point across the page, reducing hesitation for first-time visitors.',
          },
          {
            heading: 'Performance-First Next.js Build',
            detail:
              'Built with Next.js 15 and static generation for maximum speed - pages load in under 1 second. Deployed on Vercel with global CDN, automatic HTTPS, and zero-config CI/CD. The site achieves a Lighthouse performance score of 95+ on desktop.',
          },
          {
            heading: 'Services and Hiring Models Architecture',
            detail:
              'Four distinct hiring models - Contract Staffing, Full-Time Hiring, Remote Staffing, and Bulk Hiring - are presented with clear differentiation and use-case framing. A dedicated Services page expands each model with process details, ideal client profiles, and direct CTAs to start a conversation.',
          },
        ]}
        results={[
          {
            metric: '5 Weeks',
            value: 'Brief to Launch',
            description:
              'Full website - all pages, contact form, animations, and deployment - delivered in 5 weeks from initial brief to live URL',
          },
          {
            metric: '95+',
            value: 'Lighthouse Score',
            description:
              'Performance-optimised Next.js build achieves 95+ Lighthouse score on desktop - fast loading across all US locations',
          },
          {
            metric: '6 Pages',
            value: 'Fully Built',
            description:
              'Home, About, Services, Industries, contact form, and dynamic routing - all designed and developed from scratch',
          },
        ]}
        heroImagePlaceholder="MantTalent homepage - full website screenshot showing hero section and navigation"
        screenshotPlaceholders={[
          {
            alt: 'MantTalent homepage hero section',
            caption: 'Homepage - hero with trust signals, stats counter, and dual CTA buttons',
          },
          {
            alt: 'MantTalent industries page',
            caption: 'Industries page - 13 sectors with role-specific descriptions and hiring CTAs',
          },
          {
            alt: 'MantTalent services page',
            caption: 'Services page - 4 hiring models with clear differentiation and process details',
          },
          {
            alt: 'MantTalent contact form',
            caption: 'Contact form - multi-field lead capture with industry and hiring model selectors',
          },
          {
            alt: 'MantTalent about page',
            caption: 'About page - company story, values, mission and team section',
          },
          {
            alt: 'MantTalent mobile view',
            caption: 'Mobile responsive - fully optimised across all screen sizes',
          },
        ]}
        /*
          Testimonial from MANT Talent Solutions - to be added
          Once received, add:
          quote: "..."
          author: "Founder Name"
          role: "Founder, MANT Talent Solutions"
        */
        testimonial={null}
      />
    </>
  )
}
