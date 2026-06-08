import type { Metadata } from 'next'

export const siteUrl = 'https://smartxsolutions.in'
export const siteName = 'SmartX Solutions'

export type FaqItem = {
  question: string
  answer: string
}

export type SeoPage = {
  slug: string
  title: string
  description: string
  h1: string
  eyebrow: string
  intro: string
  sections: {
    h2: string
    body: string[]
  }[]
  links: {
    href: string
    label: string
  }[]
  breadcrumb?: {
    label: string
    href: string
  }[]
  faqs?: FaqItem[]
  priority: number
  changeFrequency: 'weekly' | 'monthly' | 'yearly'
}

export const primaryRoutes = [
  '/',
  '/about-us',
  '/services',
  '/web-development-services',
  '/mobile-app-development',
  '/software-development-company',
  '/digital-marketing-services',
  '/ai-automation-services',
  '/contact-us',
  '/portfolio',
  '/case-studies',
  '/technologies',
  '/industries',
  '/blog',
  '/custom-web-application-company',
  '/it-services-company',
  '/software-development-company-guide',
  '/product-development-company',
  '/digital-innovation-agency',
  '/services/saas-development-company-hyderabad',
  '/mobile-app-cost-india-2026',
  '/privacy-policy',
  '/terms-and-conditions',
]

export function absoluteUrl(path = '/') {
  return path === '/' ? siteUrl : `${siteUrl}${path}`
}

export function buildMetadata(page: SeoPage): Metadata {
  const url = absoluteUrl(`/${page.slug}`)

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      siteName,
      title: page.title,
      description: page.description,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${page.h1} - ${siteName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: ['/og-image.png'],
    },
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/favicon_io/android-chrome-512x512.png`,
        description:
          'SmartX Solutions is a custom software development company in Hyderabad, India, building web apps, mobile apps, SaaS platforms, UI/UX design, and digital transformation services.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          addressCountry: 'IN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'shoebsmartx@gmail.com',
          telephone: '+91-91005-90377',
        },
        sameAs: ['https://www.linkedin.com/company/smartx-solutions-in'],
        knowsAbout: [
          'web application development',
          'mobile app development',
          'SaaS platform development',
          'UI/UX design',
          'digital transformation',
          'AI and machine learning integration',
          'cloud infrastructure and DevOps',
          'cybersecurity and compliance',
          'API development and integrations',
        ],
        makesOffer: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Web Development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SaaS Development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'UI/UX Design',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Automation & LLM Integration',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Infrastructure & DevOps',
            },
          },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#localbusiness`,
        name: siteName,
        description: 'Custom software development company in Hyderabad',
        url: siteUrl,
        telephone: '+919100590377',
        email: 'business@smartxsolutions.in',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Hyderabad',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500081',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 17.3850,
          longitude: 78.4867,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        parentOrganization: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        publisher: { '@id': `${siteUrl}/#organization` },
      },
    ],
  }
}

export function breadcrumbSchema(page: SeoPage) {
  const items = page.breadcrumb ?? [
    { label: 'Home', href: '/' },
    { label: page.h1, href: `/${page.slug}` },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  }
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
