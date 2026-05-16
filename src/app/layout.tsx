import type { Metadata } from 'next';
import './globals.css';
import FontLoader from '@/components/ui/FontLoader'
import Analytics from '@/components/ui/Analytics'
// import Script from "next/script";


const siteUrl = 'https://smartxsolutions.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SmartX Solutions — Custom Software Development & Digital Innovation Agency',
    template: '%s | SmartX Solutions',
  },
  description:
    'Leading custom software development company in Hyderabad, India. We specialize in web app development, mobile app development, SaaS development, cloud solutions, UI/UX design, and digital transformation services for startups and enterprises.',
  keywords: [
    'custom software development',
    'software development company india',
    'web development services',
    'mobile app development',
    'SaaS development company',
    'cloud solutions hyderabad',
    'UI/UX design services',
    'digital transformation services',
    'enterprise software development',
    'scalable software platforms',
    'software engineering team',
    'software consulting',
    'SmartX Solutions',
    'IT services Hyderabad',
    'digital innovation agency hyderabad',
    'Next.js development agency',
    'React development company india',
    'Flutter app development',
  ],
  authors: [{ name: 'SmartX Solutions', url: siteUrl }],
  creator: 'SmartX Solutions',
  publisher: 'SmartX Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'SmartX Solutions',
    title: 'SmartX Solutions — Custom Software Development & Digital Innovation Agency',
    description: 'Leading custom software development company in Hyderabad, India. We build scalable software platforms, web apps, mobile apps, and SaaS solutions for startups and enterprises.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SmartX Solutions — Custom Software Development Company' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartX Solutions — Custom Software Development & Digital Innovation Agency',
    description: 'Leading custom software development company in Hyderabad, India. We build scalable software platforms, web apps, mobile apps, and SaaS solutions for startups and enterprises.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: siteUrl },
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico', sizes: 'any' },
      { url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/favicon_io/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon_io/favicon.ico',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'SmartX Solutions',
      url: siteUrl,
      description: 'Leading custom software development company in Hyderabad, India. We specialize in web app development, mobile app development, SaaS development, cloud solutions, UI/UX design, and digital transformation services.',
      address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressRegion: 'Telangana', addressCountry: 'IN' },
      contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', email: 'business@smartxsolutions.in', telephone: '+91-91005-90377' },
      sameAs: [
        'https://www.linkedin.com/company/smartx-solutions-in'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'SmartX Solutions',
      description: 'Custom software development company offering web development services, mobile app development, SaaS development, and digital transformation solutions.',
      publisher: { '@id': `${siteUrl}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does SmartX Solutions offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SmartX Solutions offers comprehensive custom software development services including web app development, mobile app development, SaaS development, cloud solutions, UI/UX design services, and digital transformation consulting.'
          }
        },
        {
          '@type': 'Question',
          name: 'How long does it take to develop a custom software solution?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Development timelines vary based on project complexity, but typically range from 6-16 weeks for full custom software development projects. We follow an agile development process with regular deliverables.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you work with startups and enterprises?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we work with both startups and enterprise clients. Our scalable software platforms and flexible engagement models make us suitable for businesses of all sizes.'
          }
        }
      ]
    }
  ],
}

// Critical above-the-fold CSS — inlined so it NEVER blocks render
const criticalCSS = `
html, body { margin: 0; padding: 0; }
body {
  background: #050508;
  color: #f0eff8;
  font-family: 'DM Sans', system-ui, sans-serif;
}
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
         <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2599252144758204"
          crossOrigin="anonymous"
        ></script>
  <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
  <FontLoader />                           
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
  <meta name="theme-color" content="#050508" />
  <meta name="color-scheme" content="dark" />
</head>
      <body
        className="bg-[#050508] text-white antialiased overflow-x-hidden"
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
