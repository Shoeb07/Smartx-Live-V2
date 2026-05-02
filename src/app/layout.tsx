import type { Metadata } from 'next'
import './globals.css'




const siteUrl = 'https://smartxsolutions.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SmartX Solutions — Digital Innovation & Software Agency',
    template: '%s | SmartX Solutions',
  },
  description:
    'SmartX Solutions is a full-service digital innovation agency delivering custom software development, web & mobile apps, UI/UX design, cloud solutions, and digital transformation services.',
  keywords: [
    'software development company india',
    'digital innovation agency hyderabad',
    'web app development',
    'mobile app development',
    'UI UX design agency india',
    'cloud solutions hyderabad',
    'digital transformation services',
    'SmartX Solutions',
    'IT services Hyderabad',
    'custom software development india',
    'Next.js development agency',
    'React development company india',
    'Flutter app development',
    'SaaS development company',
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
    title: 'SmartX Solutions — Digital Innovation & Software Agency',
    description: 'We design, build, and scale digital products for ambitious businesses. Custom software, apps, and digital transformation.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SmartX Solutions — Digital Innovation Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartX Solutions — Digital Innovation & Software Agency',
    description: 'We design, build, and scale digital products for ambitious businesses.',
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
      description: 'SmartX Solutions is a full-service digital innovation agency delivering custom software, web & mobile applications, and digital transformation services.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'SmartX Solutions',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
}

// Critical above-the-fold CSS — inlined so it NEVER blocks render
const criticalCSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#050508;color:#f0eff8;font-family:'DM Sans',system-ui,sans-serif;overflow-x:hidden;-webkit-font-smoothing:antialiased}
.font-syne{font-family:'Syne',system-ui,sans-serif}
.fixed{position:fixed}.inset-0{inset:0}
.z-\\[9999\\]{z-index:9999}
.flex{display:flex}.flex-col{flex-direction:column}
.items-center{align-items:center}.justify-center{justify-content:center}
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* 1. CRITICAL CSS INLINE — renders immediately, zero blocking */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />

        {/* 2. FONT PRECONNECT — open the connection early */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* 3. PRELOAD HINT — browser knows about the font file early */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap"
        />

        {/* 4. NON-BLOCKING LOAD — media="print" = loads but doesn't apply
            onLoad flips to media="all" once downloaded = zero render block */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap"
          media="print"
          onLoad={(e) => {
            const el = e.currentTarget as HTMLLinkElement
            el.onload = null
            el.media = 'all'
          }}
        />

        {/* 5. NOSCRIPT FALLBACK — for JS-disabled browsers */}
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap"
          />
        </noscript>

        {/* 6. JSON-LD SCHEMA */}
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
      </body>
    </html>
  )
}
