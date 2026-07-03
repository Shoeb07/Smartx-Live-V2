import type { Metadata } from 'next'

export const siteUrl = 'https://www.smartxsolutions.in'
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
      // FIX 4, 5: ImageObject logo + foundingDate
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        foundingDate: '2025',
        // TODO: Uncomment after collecting 5+ real Google reviews
        // aggregateRating: {
        //   '@type': 'AggregateRating',
        //   ratingValue: '5.0',
        //   reviewCount: '5',
        //   bestRating: '5',
        //   worstRating: '1',
        // },
        // logo-large.png is 600x200 — meets Google's 336x112 minimum for logo markup
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo-large.png`,
          width: 600,
          height: 200,
        },
        description:
          'SmartX Solutions is a legitimate custom software development company based in Hyderabad, India, founded in 2025. Not affiliated with SmartX Connected Products Pvt Ltd, SmartX Services Limited, or SmartX Solutions KFT.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '866, Sayeedabad Rd, Jeevan Yaar Jung Colony, Akbarbagh, New Malakpet',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500059',
          addressCountry: 'IN',
        },
        // FIX 8: E.164 phone format
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'business@smartxsolutions.in',
          telephone: '+919100590377',
        },
        // FIX 9: Expanded sameAs (add profiles when created)
        sameAs: [
          'https://www.linkedin.com/company/smartx-solutions-in',
          // TODO: Add when created:
          // 'https://twitter.com/smartxsolutions',
          // 'https://github.com/smartx-solutions',
          // 'https://clutch.co/profile/smartx-solutions',
          // 'https://www.crunchbase.com/organization/smartx-solutions',
        ],
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
            itemOffered: { '@type': 'Service', name: 'Custom Web Development' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Mobile App Development' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'SaaS Development' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'UI/UX Design' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'AI Automation & LLM Integration' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Cloud Infrastructure & DevOps' },
          },
        ],
      },
      // FIX 1: Correct streetAddress + postalCode; FIX 1 dual @type
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${siteUrl}/#localbusiness`,
        name: siteName,
        description: 'Custom software development company in Hyderabad',
        url: siteUrl,
        telephone: '+919100590377',
        email: 'business@smartxsolutions.in',
        image: `${siteUrl}/og-image.png`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '866, Sayeedabad Rd, Jeevan Yaar Jung Colony, Akbarbagh, New Malakpet',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500059',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 17.37455,
          longitude: 78.50218,
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
        areaServed: [
          { '@type': 'City', name: 'Hyderabad' },
          { '@type': 'City', name: 'Secunderabad' },
          { '@type': 'City', name: 'Cyberabad' },
          { '@type': 'AdministrativeArea', name: 'Telangana' },
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United States' },
        ],
        parentOrganization: { '@id': `${siteUrl}/#organization` },
      },
      // FIX 7: SearchAction added to WebSite
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        publisher: { '@id': `${siteUrl}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/?s={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      // FIX 6: Expanded WebPage schema
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: 'SmartX Solutions | Custom Software Development Company in Hyderabad',
        description:
          'Custom software development company in Hyderabad delivering web apps, mobile apps, SaaS platforms, and digital transformation services across India.',
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        dateModified: new Date().toISOString().split('T')[0],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.direct-answer', '.speakable'],
        },
      },
      // FIX 2: Personal LinkedIn URLs (not company page)
      // IMPORTANT: Update these to each founder's real personal LinkedIn profile URL (not company page)
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#shoeb-uddin`,
        name: 'Shoeb Uddin',
        jobTitle: 'Founder & CEO',
        worksFor: { '@id': `${siteUrl}/#organization` },
        url: `${siteUrl}/authors/shoeb-uddin`,
        sameAs: ['https://www.linkedin.com/in/shoeb-khan-smartx'],
        // TODO: Replace with real personal LinkedIn URL
        // TODO: Add image once a real headshot exists in /public (do not point at a missing file)
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#saleha-begum`,
        name: 'Saleha Begum',
        jobTitle: 'Co-Founder & CTO',
        worksFor: { '@id': `${siteUrl}/#organization` },
        url: `${siteUrl}/authors/saleha-begum`,
        sameAs: ['https://www.linkedin.com/in/saleha-begum-smartx'],
        // TODO: Replace with real personal LinkedIn URL
        // TODO: Add image once a real headshot exists in /public (do not point at a missing file)
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

export function serviceSchema(page: SeoPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    serviceType: page.h1,
    description: page.description,
    url: absoluteUrl(`/${page.slug}`),
    provider: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: absoluteUrl(`/${page.slug}`),
    },
  }
}
