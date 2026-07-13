import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DirectAnswer from '@/components/ui/DirectAnswer'
import LastUpdated from '@/components/ui/LastUpdated'
import { ArrowUpRight, CheckCircle2, ShieldCheck, Landmark, Wallet, LineChart, Layers, Fingerprint, Banknote } from 'lucide-react'

const siteUrl = 'https://www.smartxsolutions.in'
const canonical = `${siteUrl}/services/fintech-app-development-hyderabad`

export const metadata: Metadata = {
  title: 'Fintech App Development Company in Hyderabad | SmartX',
  description:
    'SmartX Solutions builds RBI-compliant fintech applications in Hyderabad — UPI integration, payment gateways, lending platforms, and digital wallets. Free consultation available.',
  keywords: [
    'fintech app development company hyderabad',
    'fintech software development hyderabad',
    'fintech app development company in india',
    'upi integration company',
    'rbi compliant app development',
    'digital lending platform development',
  ],
  alternates: { canonical },
  openGraph: {
    type: 'website',
    url: canonical,
    siteName: 'SmartX Solutions',
    title: 'Fintech App Development Company in Hyderabad | SmartX',
    description:
      'RBI-compliant fintech development in Hyderabad — UPI integration, payment gateways, lending platforms, digital wallets. Free consultation.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Fintech App Development Company in Hyderabad | SmartX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fintech App Development Company in Hyderabad | SmartX',
    description:
      'RBI-compliant fintech development in Hyderabad — UPI integration, payment gateways, lending platforms, digital wallets.',
    images: ['/og-image.png'],
  },
}

const faqs = [
  {
    q: 'How much does fintech app development cost in Hyderabad?',
    a: 'A basic payment or personal-finance app costs ₹5,00,000 to ₹15,00,000, lending and investment platforms ₹15,00,000 to ₹30,00,000, and full neobank or insurance platforms ₹30,00,000+. Adding UPI payments to an existing product costs ₹1,00,000 to ₹3,00,000. RBI compliance workflows and security are included in SmartX quotes, not billed as surprises later.',
  },
  {
    q: 'Do you handle RBI compliance or do I need a separate consultant?',
    a: 'SmartX builds the compliance architecture — KYC/AML workflows, India data localisation, audit trails, consent registries, and Digital Lending Guidelines-aligned fund flows. For licensing decisions (PA licence, NBFC registration), we work alongside your fintech lawyer; for building within the rules, that is our job.',
  },
  {
    q: 'How long does it take to build a fintech app?',
    a: '3 to 6 months for a payments or personal-finance app, 5 to 9 months for lending platforms, and 8 to 14 months for full neobank products — including KYC vendor integration, security audit, and payment gateway certification.',
  },
  {
    q: 'Which payment gateways and KYC vendors do you integrate?',
    a: 'Payment gateways: Razorpay, PayU, Cashfree, and PhonePe PG — including UPI, cards, net banking, subscriptions, and payouts. KYC/AML: Digio, HyperVerge, and Signzy for PAN, Aadhaar-based, and video KYC flows.',
  },
  {
    q: 'Do you work with fintech startups outside Hyderabad?',
    a: 'Yes. Most engagements run remotely with clients across India and abroad. Hyderabad is our base — and where your product benefits from fintech-experienced senior engineers at 15-20% below Bangalore rates.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: 'Fintech App Development',
      serviceType: 'Fintech software development',
      description:
        'RBI-compliant fintech application development in Hyderabad, India — UPI integration, payment gateways, digital lending platforms, investment apps, and neobank products.',
      url: canonical,
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Hyderabad' },
        { '@type': 'Country', name: 'India' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
        { '@type': 'ListItem', position: 3, name: 'Fintech App Development Hyderabad', item: canonical },
      ],
    },
  ],
}

const solutions = [
  { icon: Banknote, title: 'UPI Payment Integration', body: 'UPI, cards, and net banking through Razorpay, PayU, or Cashfree — with the webhook handling and reconciliation that keeps your books matching the bank’s.' },
  { icon: Layers, title: 'Payment Gateway Implementation', body: 'Production-grade gateway builds: checkout flows, refunds, settlements, subscription billing, and payouts — tested against real failure states.' },
  { icon: Landmark, title: 'Digital Lending Platforms', body: 'Loan origination, credit bureau integrations, disbursal and collections workflows — architected to the RBI Digital Lending Guidelines.' },
  { icon: LineChart, title: 'Investment & Trading Apps', body: 'Portfolio dashboards, market data integrations, and SEBI-aware onboarding for broking and wealth products.' },
  { icon: ShieldCheck, title: 'InsurTech Applications', body: 'Policy distribution, claims workflows, and quote engines for insurance products under IRDAI-regulated partners.' },
  { icon: Fingerprint, title: 'KYC/AML Compliance Systems', body: 'Resumable digital onboarding with Digio, HyperVerge, or Signzy — PAN, Aadhaar-based, and video KYC with full audit artefacts.' },
  { icon: Wallet, title: 'Neobank Applications', body: 'Customer-facing banking interfaces over licensed partner banks — accounts, cards, statements, and money movement with immutable audit trails.' },
]

const costRows = [
  ['UPI / payment integration (existing app)', '₹1,00,000 – ₹3,00,000', '3–6 weeks'],
  ['Basic payment / wallet app', '₹5,00,000 – ₹15,00,000', '3–6 months'],
  ['Lending / investment platform', '₹15,00,000 – ₹30,00,000', '5–9 months'],
  ['Full neobank / insurance platform', '₹30,00,000 – ₹50,00,000+', '8–14 months'],
]

const techStack = ['Python', 'Node.js', 'React Native', 'Next.js', 'PostgreSQL', 'Redis', 'AWS (India region)', 'Docker', 'Kubernetes']

const blogLinks = [
  { href: '/blog/fintech-software-development-company-hyderabad', label: 'FinTech Software Development in Hyderabad: The 2026 Guide' },
  { href: '/blog/fintech-app-development-cost-india', label: 'Fintech App Development Cost in India: ₹5L to ₹50L+ Breakdown' },
  { href: '/blog/upi-payment-gateway-integration-guide', label: 'UPI & Payment Gateway Integration: A Practical Guide' },
  { href: '/blog/rbi-compliance-fintech-apps-india', label: 'RBI Compliance for FinTech Apps: What Founders Must Build In' },
]

export default function FintechServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main className="relative overflow-hidden bg-[#050508] text-white pt-28 pb-24">
        <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none bg-gradient-to-b from-[#6c63ff]/20 via-[#050508]/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/55">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white/75">Fintech App Development</span>
          </nav>

          {/* Hero */}
          <header className="pb-12 border-b border-white/[0.08]">
            <p className="text-[#00e5b0] text-sm font-dm uppercase tracking-widest mb-4">
              RBI-Compliant · UPI-Native · Hyderabad
            </p>
            <h1 className="font-syne font-bold text-[clamp(38px,6vw,72px)] leading-[1.03] max-w-4xl mb-6">
              Fintech App Development Company in Hyderabad
            </h1>
            <p className="text-white/68 text-lg md:text-xl leading-relaxed max-w-3xl mb-4">
              SmartX Solutions builds fintech products with compliance as architecture, not an
              afterthought — UPI integration, payment gateways, digital lending, and neobank
              applications, engineered on India-region infrastructure with audit trails, KYC/AML
              workflows, and 100% client IP ownership.
            </p>
            <LastUpdated date="July 2026" />
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#6c63ff] text-white font-medium text-[15px] hover:bg-[#5a52e0] transition-colors"
              >
                Get a Free Fintech Consultation
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/blog/fintech-app-development-cost-india"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/10 text-white/70 font-medium text-[15px] hover:border-white/25 hover:text-white transition-all"
              >
                See Real Cost Breakdown
              </Link>
            </div>
          </header>

          <DirectAnswer
            question="How much does fintech app development cost in Hyderabad?"
            answer="Fintech app development in Hyderabad costs ₹5,00,000 to ₹15,00,000 for a basic payment app and ₹15,00,000 to ₹30,00,000 for a lending or investment platform. RBI compliance, UPI integration, and security infrastructure are included in SmartX Solutions quotes."
            cite="SmartX Solutions — July 2026"
          />

          {/* Solutions */}
          <section className="mt-14">
            <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-8">
              Fintech Solutions We Build
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {solutions.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.title} className="p-6 rounded-2xl border border-white/[0.07] bg-[#0d0d14] hover:border-white/15 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#6c63ff]/15 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-[#6c63ff]" />
                    </div>
                    <h3 className="font-syne font-bold text-lg mb-2">{s.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Compliance */}
          <section className="mt-14">
            <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-5">
              RBI Compliance — Built In From Day One
            </h2>
            <p className="text-white/64 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
              Fintech projects fail differently from other software: teams treat compliance as a
              feature to add later, and discover it was architecture all along. Every SmartX fintech
              build starts from the regulatory floor:
            </p>
            <ul className="space-y-4 max-w-3xl">
              {[
                'KYC verification — resumable digital onboarding through Digio, HyperVerge, or Signzy, with audit artefacts your banking partners will ask for.',
                'AML screening and monitoring — data models that support your regulated partner’s screening obligations from the first schema.',
                'Data localisation — India-region cloud infrastructure from the first deploy, per RBI’s 2018 payment data storage directive.',
                'PPI and wallet rules — prepaid instrument features built on licensed partners, so you launch without waiting years for your own licence.',
                'Lending compliance — fund flows only between regulated entities and borrowers, Key Fact Statement disclosures, and consent logging per the RBI Digital Lending Guidelines.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/64 text-base leading-relaxed">
                  <CheckCircle2 size={17} className="text-[#00e5b0] mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-white/55 text-sm mt-6 max-w-3xl">
              Want the founder-level detail? Read our guide to{' '}
              <Link href="/blog/rbi-compliance-fintech-apps-india" className="text-[#a89eff] underline underline-offset-2 hover:text-white transition-colors">
                RBI compliance for fintech apps
              </Link>{' '}
              — the five regulatory anchors translated into build decisions.
            </p>
          </section>

          {/* Tech stack */}
          <section className="mt-14">
            <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-5">
              Fintech Tech Stack
            </h2>
            <p className="text-white/64 text-base leading-relaxed max-w-3xl mb-6">
              Boring, proven technology — because fintech is the wrong place for experiments.
              Transactional integrity on PostgreSQL, horizontal scale on containers, and India-region
              AWS for data residency.
            </p>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <li key={tech} className="inline-flex items-center gap-1.5 text-[13px] text-white/65 border border-white/[0.08] bg-white/[0.03] px-4 py-2 rounded-full">
                  <CheckCircle2 size={13} className="text-[#00e5b0]" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {/* Cost */}
          <section className="mt-14">
            <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-5">
              Fintech Development Cost in Hyderabad
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-white/[0.04]">
                    <th className="px-4 py-3 font-syne font-bold text-white text-[13px]">Product type</th>
                    <th className="px-4 py-3 font-syne font-bold text-white text-[13px] whitespace-nowrap">Cost range</th>
                    <th className="px-4 py-3 font-syne font-bold text-white text-[13px]">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((row) => (
                    <tr key={row[0]} className="border-t border-white/[0.06]">
                      {row.map((cell, i) => (
                        <td key={i} className="px-4 py-3 text-white/60 align-top">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-white/55 text-sm mt-5 max-w-3xl">
              These ranges include the compliance line items generalist quotes miss — KYC vendor
              setup, VAPT security audit, and gateway certification. The full line-item arithmetic is
              in our{' '}
              <Link href="/blog/fintech-app-development-cost-india" className="text-[#a89eff] underline underline-offset-2 hover:text-white transition-colors">
                fintech app development cost breakdown
              </Link>
              .
            </p>
          </section>

          {/* Why Hyderabad */}
          <section className="mt-14">
            <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-5">
              Why Hyderabad for Fintech Development?
            </h2>
            <div className="space-y-5 text-white/64 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                India runs one of the world’s most advanced payment ecosystems — 87% fintech
                adoption per EY’s Global FinTech Adoption Index, and UPI processing over 13 billion
                transactions a month on NPCI’s rails. NPCI itself sits in Mumbai, but a large share
                of the engineering talent that builds on those rails sits in Hyderabad: the city
                hosts major technology centres for global banks and payment companies around HITEC
                City, and an active fintech startup cohort at T-Hub.
              </p>
              <p>
                For founders, the arithmetic is simple: fintech-experienced senior engineers —
                people who have already shipped KYC flows, UPI reconciliation, and RBI-localised
                infrastructure — at rates 15–20% below Bangalore for equivalent quality. That is
                the pool SmartX hires from, and the premium your product does not have to pay.
              </p>
            </div>
          </section>

          {/* Blog cluster links */}
          <section className="mt-14">
            <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-3">
              Go Deeper: Our Fintech Guides
            </h2>
            <p className="text-white/55 text-base mb-6 max-w-3xl">
              Written by our founders — the same people who scope and architect SmartX fintech builds.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {blogLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 text-sm text-white/65 hover:text-white hover:border-white/[0.16] transition-all"
                >
                  <ArrowUpRight size={15} className="text-[#00e5b0] mt-0.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-14">
            <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 md:p-6">
                  <h3 className="font-syne font-bold text-lg mb-2">{f.q}</h3>
                  <p className="text-white/62 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-16 rounded-2xl border border-[#6c63ff]/25 bg-[#6c63ff]/[0.07] p-8 text-center">
            <h2 className="font-syne font-bold text-2xl mb-3">Planning a Fintech Product?</h2>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Free consultation, NDA-first. We will map your product against the regulatory
              landscape and return a line-item scope — compliance included — within 48 hours.
            </p>
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#6c63ff] text-white font-medium text-[15px] hover:bg-[#5a52e0] transition-colors"
            >
              Discuss Your Fintech Project
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
