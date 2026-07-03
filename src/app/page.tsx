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
  // Homepage-specific schema in one @graph (WebPage lives in the layout's
  // Organization graph — do not duplicate it here)
  const homeGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [...homeFaqs, legitimacyFaq].map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <>
      {/* Client-only visuals */}
      <HomeClient />

      {/* JSON-LD for AI/crawlers */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraph) }} />

      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Services />

        <section className="py-12 bg-[#0a0a10] border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p
              className="text-[11px] uppercase tracking-[0.12em] text-white/25 mb-6 text-center"
            >
              Helpful Resources
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                {
                  label: 'Best Software Companies in Hyderabad',
                  href: '/best-software-development-companies-hyderabad',
                },
                {
                  label: 'Agency vs Upwork — Honest Comparison',
                  href: '/software-development-agency-vs-upwork',
                },
                {
                  label: 'SmartX vs Toptal',
                  href: '/smartx-solutions-vs-toptal',
                },
                {
                  label: 'Mobile App Development Cost India',
                  href: '/mobile-app-development-cost-india',
                },
                {
                  label: 'How to Choose a Software Company',
                  href: '/software-development-company-guide',
                },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-white/35 hover:text-[#6c63ff] transition-colors border border-white/[0.06] px-4 py-2 rounded-full hover:border-[#6c63ff]/30"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

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
