import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { absoluteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Terms and Conditions - SmartX Solutions',
  description:
    'Read the SmartX Solutions terms and conditions for website use, software development services, project responsibilities, intellectual property, and support.',
  alternates: { canonical: absoluteUrl('/terms-and-conditions') },
  openGraph: {
    title: 'Terms and Conditions - SmartX Solutions',
    description: 'Terms for using the SmartX Solutions website and engaging our software development services.',
    url: absoluteUrl('/terms-and-conditions'),
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions - SmartX Solutions',
    description: 'Terms for using the SmartX Solutions website and engaging our software development services.',
  },
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050508] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h1 className="font-syne font-bold text-[clamp(32px,5vw,56px)] leading-tight mb-6 text-white">
              Terms and Conditions
            </h1>
            <p className="text-white/50 text-lg">Last updated: May 31, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="text-white/80 leading-relaxed space-y-6">
              <p>
                These Terms and Conditions govern your use of the SmartX Solutions website and your engagement with our software development, web development, mobile app development, AI automation, digital marketing, and consulting services. By using this website or requesting services from SmartX Solutions, you agree to these terms.
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Use of This Website</h2>
              <p>
                The content on this website is provided for general business information. You may browse our pages, review our services, contact our team, and share links to public pages. You must not misuse the website, attempt unauthorised access, interfere with site availability, copy content in a misleading way, or use the website for unlawful activity.
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Service Engagements</h2>
              <p>
                Project work begins only after scope, timeline, commercial terms, deliverables, and responsibilities are confirmed in writing through a proposal, statement of work, invoice, or agreement. Any estimate shared before discovery is indicative and may change once requirements, integrations, content, data, approvals, or technical constraints are reviewed.
              </p>
              <p>
                Clients are responsible for providing accurate requirements, timely feedback, access to required systems, content, brand assets, credentials, and approvals. Delays in these inputs may affect timelines and delivery dates. SmartX Solutions is responsible for delivering the agreed work with professional care, clear communication, and reasonable technical standards.
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Payments, Changes, and Timelines</h2>
              <p>
                Payment schedules are defined per project. Work may be paused if agreed payments are overdue. Requests outside the confirmed scope may require a revised estimate, additional fee, or timeline adjustment. We aim to communicate tradeoffs clearly so both teams understand the impact of new features, content changes, integrations, or design revisions.
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Intellectual Property</h2>
              <p>
                Unless otherwise agreed, client-specific deliverables created and paid for under a project become the client&apos;s property after final payment. SmartX Solutions retains ownership of pre-existing tools, frameworks, templates, know-how, reusable code patterns, and internal processes that were not created exclusively for the client. Third-party software, fonts, libraries, plugins, APIs, and hosting services remain subject to their own licences and terms.
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Confidentiality and Data</h2>
              <p>
                We treat client business information, project details, credentials, and non-public materials as confidential. Clients should avoid sharing unnecessary sensitive data and should use secure channels when credentials are required. Our handling of website visitor and enquiry information is described in our <Link href="/privacy-policy" className="text-[#00e5b0] hover:text-white">Privacy Policy</Link>.
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Limitations</h2>
              <p>
                SmartX Solutions is not liable for indirect, incidental, consequential, or loss-of-profit damages arising from website use or service engagement, except where liability cannot be limited by applicable law. We are not responsible for outages, policy changes, pricing changes, or failures caused by third-party platforms, hosting providers, payment processors, APIs, or tools outside our control.
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Contact Information</h2>
              <p>
                Questions about these Terms can be sent to shoebsmartx@gmail.com or discussed through our <Link href="/contact-us" className="text-[#00e5b0] hover:text-white">contact page</Link>. You can return to the <Link href="/" className="text-[#00e5b0] hover:text-white">homepage</Link> or review our <Link href="/services" className="text-[#00e5b0] hover:text-white">services</Link> at any time.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
