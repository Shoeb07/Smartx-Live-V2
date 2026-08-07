import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import QuickContactForm from '@/components/ui/QuickContactForm'
import DirectAnswer from '@/components/ui/DirectAnswer'
import { ArrowUpRight, Check } from 'lucide-react'
import { absoluteUrl } from '@/lib/seo'

const page = {
  title: 'Fintech App Development Company in Hyderabad — SmartX Solutions',
  description:
    'SmartX Solutions builds UPI-integrated apps, RBI-compliant platforms, and payment systems for fintech startups and enterprises in Hyderabad.',
  canonicalUrl: absoluteUrl('/services/fintech-app-development-hyderabad'),
}

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.canonicalUrl },
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.canonicalUrl,
    siteName: 'SmartX Solutions',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: page.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: page.title,
    description: page.description,
    images: ['/og-image.png'],
  },
}

const services = [
  {
    icon: '💳',
    title: 'UPI & Payment Gateway Integration',
    description:
      'Razorpay, Cashfree, PayU — production-grade checkout with webhooks, reconciliation, and refund flows. From ₹30,000 for simple integrations; full builds ₹1L–₹3L.',
  },
  {
    icon: '🏦',
    title: 'RBI-Compliant App Development',
    description:
      'KYC/AML onboarding, Digital Lending Guidelines compliance, data localisation on India-region cloud. We architect for the regulator from day one, not month four.',
  },
  {
    icon: '🚀',
    title: 'Fintech MVP in 8 Weeks',
    description:
      'Fixed scope, transparent pricing, and a committed delivery date. One core money movement done properly — payments, KYC, security audit — before you spend on scale.',
  },
]

const whySmartX = [
  'Hyderabad-based team with hands-on fintech experience — UPI integrations, RBI compliance architecture, and payment gateway implementations delivered for real clients.',
  '3 fintech products delivered including UPI-integrated platforms, payment dashboards, and compliance-ready systems. See our portfolio for case studies.',
  'Fixed-scope, transparent pricing — you know the cost before we write a line of code. No retainer traps, no scope creep surprises.',
  'India-region cloud by default: AWS Mumbai / GCP Mumbai. RBI data localisation compliance is not an afterthought — it is the default architecture.',
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fintech App Development',
  provider: {
    '@type': 'Organization',
    name: 'SmartX Solutions',
    url: 'https://www.smartxsolutions.in',
  },
  areaServed: { '@type': 'City', name: 'Hyderabad' },
  description: page.description,
  url: page.canonicalUrl,
}

export default function FintechAppDevelopmentPage() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="relative overflow-hidden bg-[#050508] text-white">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 65%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none bg-gradient-to-b from-[#6c63ff]/15 via-[#050508]/40 to-transparent" />

        {/* ── Hero ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white/75">Fintech App Development</span>
          </nav>

          <div className="max-w-4xl">
            <p className="text-[#00e5b0] text-sm font-dm uppercase tracking-widest mb-4">
              Fintech Development · Hyderabad
            </p>
            <h1 className="font-syne font-bold text-[clamp(40px,6vw,80px)] leading-[1.04] tracking-[-0.02em] mb-6">
              Fintech Software Development Company in Hyderabad
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
              We build UPI-integrated apps, RBI-compliant platforms, and payment systems for fintech
              startups and enterprises. Fixed scope. Transparent pricing. Compliant from day one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6c63ff] text-white font-medium text-sm hover:bg-[#5a52e0] transition-all"
              >
                Get a Free Estimate <ArrowUpRight size={15} />
              </Link>
              <Link
                href="/blog/fintech-software-development-company-hyderabad"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/70 font-medium text-sm hover:border-white/25 hover:text-white transition-all"
              >
                Fintech Build Guide
              </Link>
            </div>
          </div>
        </section>

        {/* ── Direct Answer ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-4">
          <DirectAnswer
            question="How much does fintech app development cost in Hyderabad?"
            answer="Fintech app development in Hyderabad costs ₹5,00,000–₹15,00,000 for a basic payment or PFM app, ₹15,00,000–₹30,00,000 for a lending or investment platform, and ₹30,00,000+ for a full neobank. Simple UPI payment gateway integrations start from ₹30,000. Costs vary by KYC complexity, compliance requirements, and security audit scope."
            cite="SmartX Solutions — 2026"
          />
        </div>

        {/* ── Services ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <h2 className="font-syne font-bold text-[clamp(28px,4vw,44px)] leading-tight mb-3">
            What We Build
          </h2>
          <p className="text-white/50 text-base mb-10 max-w-2xl">
            Three services where SmartX has hands-on delivery experience in regulated fintech environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/[0.08] bg-[#0d0d14]/80 p-7 hover:border-[#6c63ff]/30 transition-all"
              >
                <span className="text-3xl mb-4 block" aria-hidden="true">{s.icon}</span>
                <h3 className="font-syne font-bold text-white text-lg mb-3">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why SmartX ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-syne font-bold text-[clamp(28px,4vw,44px)] leading-tight mb-5">
                Why SmartX for Fintech?
              </h2>
              <ul className="space-y-4">
                {whySmartX.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-[#00e5b0] mt-0.5 shrink-0" />
                    <span className="text-white/65 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1.5 text-sm text-[#a89eff] hover:text-white transition-colors"
                >
                  View fintech portfolio <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="/blog/fintech-app-development-cost-india"
                  className="inline-flex items-center gap-1.5 text-sm text-white/45 hover:text-white transition-colors"
                >
                  See cost breakdown <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.09] bg-[#0d0d14]/90 p-6">
              <div className="space-y-5">
                {[
                  { label: 'UPI gateway integration', from: '₹30,000', time: '2 weeks' },
                  { label: 'Basic fintech app (KYC + payments)', from: '₹5,00,000', time: '3–4 months' },
                  { label: 'Lending / investment platform', from: '₹15,00,000', time: '5–8 months' },
                  { label: 'Full neobank platform', from: '₹30,00,000', time: '8–14 months' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 py-3 border-b border-white/[0.06] last:border-0">
                    <span className="text-sm text-white/70">{row.label}</span>
                    <div className="text-right shrink-0">
                      <span className="text-sm font-medium text-white">from {row.from}</span>
                      <span className="block text-[11px] text-white/35">{row.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-white/25 text-[11px] mt-4">
                Estimates vary by scope, compliance requirements, and integration complexity.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA Form ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-syne font-bold text-[clamp(28px,4vw,44px)] leading-tight mb-4">
                Ready to build your fintech product?
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-6">
                Share what you're building and we'll return a realistic scope, timeline, and
                cost estimate within 24 hours — compliance items included.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Free scope review — no commitment',
                  'Fixed-price quotes, no hourly surprises',
                  'Response within 24 hours',
                  'Based in Hyderabad — available for in-person meetings',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                    <Check size={14} className="text-[#00e5b0] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 text-sm text-white/40">
                <Link href="/blog/upi-payment-gateway-integration-guide" className="hover:text-[#a89eff] transition-colors">
                  UPI integration guide →
                </Link>
                <Link href="/blog/rbi-compliance-fintech-apps-india" className="hover:text-[#a89eff] transition-colors">
                  RBI compliance guide →
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.09] bg-[#0d0d14]/90 p-7">
              <h3 className="font-syne font-bold text-lg text-white mb-1">Get a Free Estimate</h3>
              <p className="text-white/40 text-sm mb-6">3 fields · 60 seconds</p>
              <QuickContactForm source="fintech_landing_page" />
            </div>
          </div>
        </section>

        {/* ── Related links ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-12 border-t border-white/[0.06]">
          <h2 className="font-syne font-bold text-lg mb-5 text-white/70">Related Resources</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/fintech-software-development-company-hyderabad', label: 'FinTech development guide' },
              { href: '/blog/fintech-app-development-cost-india', label: 'Fintech cost breakdown' },
              { href: '/blog/upi-payment-gateway-integration-guide', label: 'UPI integration guide' },
              { href: '/blog/rbi-compliance-fintech-apps-india', label: 'RBI compliance guide' },
              { href: '/services/saas-development-company-hyderabad', label: 'SaaS development' },
              { href: '/contact-us', label: 'Contact SmartX' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/40 hover:text-[#6c63ff] border border-white/[0.07] hover:border-[#6c63ff]/30 px-4 py-2 rounded-full transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
