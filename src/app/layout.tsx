import { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import RootLayoutClient from './layout-client'
import { organizationSchema } from '@/lib/seo'

const siteUrl = 'https://www.smartxsolutions.in'

// Optimize font loading with display: swap
const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'SmartX Solutions | Custom Software Development Company in Hyderabad',
  description: 'SmartX Solutions is a custom software development company in Hyderabad delivering web apps, mobile apps, SaaS platforms, UI/UX design, and digital transformation services across India.',
  keywords: [
    'custom software development company hyderabad',
    'software development company hyderabad',
    'web development company hyderabad',
    'mobile app development company hyderabad',
    'saas development company hyderabad',
    'ui ux design agency hyderabad',
    'web portal development services',
    'saas application development company',
    'saas subscription management',
    'mobile app development company india',
    'custom app development company',
    'app development company hyderabad',
    'digital innovation agency hyderabad',
    'web development agency hyderabad',
    'IT company hyderabad',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'SmartX Solutions',
    title: 'SmartX Solutions | Custom Software Development Company in Hyderabad',
    description: 'SmartX Solutions is a custom software development company in Hyderabad delivering web apps, mobile apps, SaaS platforms, UI/UX design, and digital transformation services across India.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SmartX Solutions - Custom Software Development Company in Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartX Solutions | Custom Software Development Company in Hyderabad',
    description: 'SmartX Solutions is a custom software development company in Hyderabad delivering web apps, mobile apps, SaaS platforms, UI/UX design, and digital transformation services across India.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon_io/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
          as="style"
        />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  )
}
