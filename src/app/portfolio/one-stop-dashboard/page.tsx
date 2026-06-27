import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/case-study/CaseStudyLayout'

const siteUrl = 'https://smartxsolutions.in'
const canonical = `${siteUrl}/portfolio/one-stop-dashboard`

export const metadata: Metadata = {
  title: 'One Stop Dashboard — ERP Platform for Business Operations | SmartX Solutions',
  description:
    'How SmartX Solutions built One Stop Dashboard — a comprehensive ERP application that centralises business operations, automates reporting, and gives teams real-time operational visibility.',
  alternates: { canonical },
  openGraph: {
    type: 'article',
    url: canonical,
    siteName: 'SmartX Solutions',
    title: 'One Stop Dashboard — ERP Platform for Business Operations',
    description:
      'How SmartX Solutions built One Stop Dashboard — a comprehensive ERP application that centralises business operations, automates reporting, and gives teams real-time operational visibility.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'One Stop Dashboard Case Study — SmartX Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Stop Dashboard — ERP Platform for Business Operations',
    description:
      'How SmartX Solutions built One Stop Dashboard — a comprehensive ERP application that eliminated manual reporting for a multi-location business.',
    images: ['/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'One Stop Dashboard: ERP Platform That Eliminated Manual Reporting',
  description:
    'How SmartX Solutions built One Stop Dashboard — a comprehensive ERP application that centralises business operations, automates reporting, and gives teams real-time operational visibility.',
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
    name: 'One Stop Dashboard',
    description:
      'One Stop Dashboard is a comprehensive ERP platform that centralises business operations, automates reporting, and provides real-time visibility for multi-location businesses.',
  },
  keywords:
    'ERP development India, custom dashboard development, business operations software, React Node.js ERP, operational reporting automation, SaaS dashboard development',
  datePublished: '2025-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  url: canonical,
  mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
}

export default function OneStopDashboardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CaseStudyLayout
        title="One Stop Dashboard: ERP Platform That Eliminated Manual Reporting"
        subtitle="A growing business was managing operations across spreadsheets, WhatsApp messages, and separate tools — with no single view of what was happening. We built One Stop Dashboard to change that."
        client="One Stop Dashboard"
        industry="SaaS · Enterprise Software"
        timeline="16 weeks"
        liveUrl={null}
        accentColor="#ff5e62"
        techStack={[
          'React',
          'Node.js',
          'PostgreSQL',
          'Redis',
          'Chart.js',
          'Tailwind CSS',
          'Docker',
          'AWS',
          'REST API',
        ]}
        challenge="A multi-location business was running operations across a patchwork of tools — inventory in spreadsheets, sales tracking in WhatsApp groups, finance reports built manually every month, and staff attendance recorded in paper registers. Management had no real-time view of business performance. Month-end reporting took 3-4 days of manual data compilation. Decisions were made on outdated information. They needed a single platform — one dashboard — that brought all operational data together in real time."
        solution={[
          {
            heading: 'Unified Operations Dashboard',
            detail:
              'A single dashboard view showing all key business metrics in real time: sales, inventory levels, staff attendance, financial summaries, and operational alerts — all updating automatically without manual input.',
          },
          {
            heading: 'Inventory Management Module',
            detail:
              'Real-time stock tracking across locations with automatic low-stock alerts, supplier management, and purchase order generation. Stock discrepancies that previously took days to identify now surface instantly.',
          },
          {
            heading: 'Sales and Revenue Tracking',
            detail:
              'Daily, weekly, and monthly sales reports generated automatically. Visual charts for trend analysis. Target vs actual tracking per team member and location.',
          },
          {
            heading: 'Automated Monthly Reports',
            detail:
              'The 3-4 day month-end reporting process was reduced to a single button click. All data compiled automatically, formatted consistently, and exportable to PDF or Excel.',
          },
          {
            heading: 'Role-Based Access Control',
            detail:
              'Different views for different roles — executives see the full picture, department heads see their domain, staff see only their tasks. Sensitive financial data is gated appropriately without complex configuration.',
          },
        ]}
        results={[
          {
            metric: '~80%',
            value: 'Less Reporting Time',
            description:
              'Month-end reporting reduced from 3-4 days of manual work to automated generation in minutes',
          },
          {
            metric: 'Real-Time',
            value: 'Business Visibility',
            description:
              'Management now has live operational data instead of week-old spreadsheet snapshots',
          },
          {
            metric: '1 Platform',
            value: 'For Everything',
            description:
              'Replaced 6+ separate tools and manual processes with a single integrated dashboard',
          },
        ]}
        heroImagePlaceholder="One Stop Dashboard — main dashboard view with charts and KPI cards"
        screenshotPlaceholders={[
          {
            alt: 'One Stop Dashboard main view',
            caption: 'Main dashboard — real-time KPIs, sales charts, and operational alerts',
          },
          {
            alt: 'Inventory management module',
            caption: 'Inventory module — stock levels, low-stock alerts, and supplier management',
          },
          {
            alt: 'Sales reporting view',
            caption: 'Sales analytics — daily/weekly/monthly trends with target vs actual tracking',
          },
          {
            alt: 'Automated report generation',
            caption: 'Report generation — one-click monthly reports replacing 3-4 days of manual work',
          },
        ]}
        testimonial={null}
        /* Testimonial from client — to be added */
      />
    </>
  )
}
