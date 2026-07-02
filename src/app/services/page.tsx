import type { Metadata } from 'next'
import SeoLandingPage from '@/components/seo/SeoLandingPage'
import { buildMetadata } from '@/lib/seo'
import { seoPages } from '@/lib/seo-pages'

const page = seoPages.services

export const metadata: Metadata = buildMetadata(page)

const serviceCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SmartX Solutions Services',
  description:
    'Complete list of software development services offered by SmartX Solutions in Hyderabad, India',
  numberOfItems: 8,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Web Application Development',
        description:
          'Custom web applications using React, Next.js, and Node.js. Starting from ₹2,00,000.',
        url: 'https://www.smartxsolutions.in/web-development-services',
        provider: { '@id': 'https://www.smartxsolutions.in/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Mobile App Development',
        description:
          'iOS and Android apps using Flutter and React Native. Starting from ₹3,00,000.',
        url: 'https://www.smartxsolutions.in/mobile-app-development',
        provider: { '@id': 'https://www.smartxsolutions.in/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'SaaS Platform Development',
        description:
          'Custom SaaS platforms with multi-tenancy and subscription billing. Starting from ₹3,00,000.',
        url: 'https://www.smartxsolutions.in/services/saas-development-company-hyderabad',
        provider: { '@id': 'https://www.smartxsolutions.in/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'UI/UX Design',
        description:
          'User interface and experience design using Figma. Starting from ₹75,000.',
        url: 'https://www.smartxsolutions.in/services',
        provider: { '@id': 'https://www.smartxsolutions.in/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'E-Commerce Development',
        description:
          'Custom online stores with Razorpay and Stripe integration. Starting from ₹1,50,000.',
        url: 'https://www.smartxsolutions.in/web-development-services',
        provider: { '@id': 'https://www.smartxsolutions.in/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Service',
        name: 'AI and LLM Integration',
        description:
          'AI chatbots, automation, and LLM integration using OpenAI and Claude API. Starting from ₹1,00,000.',
        url: 'https://www.smartxsolutions.in/ai-automation-services',
        provider: { '@id': 'https://www.smartxsolutions.in/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'Service',
        name: 'Cloud and DevOps',
        description:
          'AWS and GCP cloud infrastructure, CI/CD pipelines, and Docker deployment.',
        url: 'https://www.smartxsolutions.in/software-development-company',
        provider: { '@id': 'https://www.smartxsolutions.in/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 8,
      item: {
        '@type': 'Service',
        name: 'Digital Transformation',
        description:
          'Legacy system modernisation and process automation for growing businesses.',
        url: 'https://www.smartxsolutions.in/digital-innovation-agency',
        provider: { '@id': 'https://www.smartxsolutions.in/#organization' },
      },
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
      <SeoLandingPage page={page} />
    </>
  )
}
