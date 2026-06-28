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
import HomeClient from './home-client'
import { absoluteUrl } from '@/lib/seo'
import { homeFaqs } from '@/lib/home-faq'

const legitimacyFaq = {
  question: 'Is SmartX Solutions a legitimate company?',
  answer:
    'Yes. SmartX Solutions is a legitimate software development company based in Hyderabad, Telangana, India. We have delivered live projects including AG Traders (agtraders.info), MANT Talent Solutions (manttalent.com), FurneXo, and Attractions Mens Studio. Our contact details are publicly available - email: business@smartxsolutions.in, phone: +91 91005 90377. We are not affiliated with other companies using similar names such as SmartX Connected Products or SmartX Services Limited.',
}

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
    mainEntity: [...homeFaqs, legitimacyFaq].map((faq) => ({
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
    </>
  )
}
