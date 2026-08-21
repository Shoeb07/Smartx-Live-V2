import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { absoluteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy - SmartX Solutions',
  description:
    'Read the SmartX Solutions privacy policy, including how we collect, use, protect, and share information for website visitors and service clients.',
  alternates: { canonical: absoluteUrl('/privacy-policy') },
  openGraph: {
    title: 'Privacy Policy - SmartX Solutions',
    description: 'How SmartX Solutions collects, uses, and protects client and website visitor information.',
    url: absoluteUrl('/privacy-policy'),
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - SmartX Solutions',
    description: 'How SmartX Solutions collects, uses, and protects client and website visitor information.',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050508] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h1 className="font-syne font-bold text-[clamp(32px,5vw,56px)] leading-tight mb-6 text-white">
              Privacy Policy
            </h1>
            <p className="text-white/50 text-lg">
              Last updated: May 31, 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="text-white/80 leading-relaxed space-y-6">
              <p>
                This Privacy Policy describes how SmartX Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your personal information when you use our website and services.
              </p>

              {/* Placeholder content - user will replace */}
              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Information We Collect</h2>
              <p>
                We collect the following types of information when you visit our website 
or engage our services:

Personal Information: When you contact us or request a quote, we collect 
your name, email address, phone number, and company name.

Project Information: Details you share about your project requirements, 
goals, budget, and timeline.

Usage Data: When you browse our website, we automatically collect your 
IP address, browser type, pages visited, and time spent on each page.

Communication Data: Records of emails, messages, or calls between you 
and our team.
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">How We Use Your Information</h2>
              <p>
               We use the information we collect for the following purposes:

To Respond to Enquiries: To reply to your messages, provide project 
quotes, and answer questions about our services.

To Deliver Services: To plan, develop, and deliver the digital products 
and services you have hired us for.

To Improve Our Website: To understand how visitors use our site and 
make it better.

To Send Updates: To keep you informed about your project status, 
milestones, and deliverables.

To Comply with Law: To meet our legal and tax obligations as a 
registered business in India.

We do not use your information for automated decision-making or 
unsolicited marketing without your consent.
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Information Sharing</h2>
              <p>
               We do not sell, rent, or trade your personal information to anyone.

We may share your information only in these limited situations:

Service Providers: Trusted tools we use to run our business — such as 
cloud hosting (AWS/Vercel), email services, and project management 
platforms. All providers are bound by confidentiality.

Legal Requirements: If required by Indian law, court order, or 
government authority.

Business Transfers: In the unlikely event of a merger or acquisition, 
your data may transfer to the new entity with prior notice to you.

Your project details and business information are always treated as 
strictly confidential. We sign NDAs on request before any sensitive 
discussions begin.
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Data Security</h2>
              <p>
                We take reasonable steps to protect your personal information from 
unauthorised access, loss, or misuse:

- Our website uses HTTPS encryption at all times.
- Access to client data is restricted to team members who need it 
  to deliver your project.
- We use secure, reputable cloud platforms for data storage.
- We do not store sensitive payment information — all transactions 
  are handled through trusted payment processors.

While we implement industry-standard safeguards, no method of 
transmission over the internet is 100% secure. If you believe your 
information has been compromised, please contact us immediately at 
business@smartxsolutions.in.
              </p>

              <h2 className="font-syne font-bold text-2xl text-white mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Email: business@smartxsolutions.in</li>
                <li>Phone: +91 93467 54163</li>
              </ul>
              <p>
                You can also return to the <Link href="/" className="text-[#00e5b0] hover:text-white">SmartX Solutions homepage</Link>, review our <Link href="/services" className="text-[#00e5b0] hover:text-white">software development services</Link>, or reach us through the <Link href="/contact-us" className="text-[#00e5b0] hover:text-white">contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
