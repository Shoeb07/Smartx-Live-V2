import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import Services from '@/components/sections/Services'
import WhyChooseSmartX from '@/components/sections/WhyChooseSmartX'
import Work from '@/components/sections/Work'
import Industries from '@/components/sections/Industries'
import Process from '@/components/sections/Process'
import About from '@/components/sections/About'
import FAQ from '@/components/sections/FAQ'
import Testimonials from '@/components/sections/Testimonials'
import Insights from '@/components/sections/Insights'
import CTABanner from '@/components/sections/CTABanner'
import Contact from '@/components/sections/Contact'
import Analytics from '@/components/ui/Analytics'
import HomeClient from './home-client'
import { absoluteUrl } from '@/lib/seo'
import { homeFaqs } from '@/lib/home-faq'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'SmartX Solutions',
    url: absoluteUrl('/'),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      {/* Client-only visuals */}
      <HomeClient />

      {/* JSON-LD for AI/crawlers */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChooseSmartX />
        <Work />
        <Industries />
        <Process />
        <About />
        <FAQ />
        <Testimonials />
        <Insights />
        <CTABanner />
        <Contact />
      </main>

      <Footer />
      <Analytics />
    </>
  )
}
