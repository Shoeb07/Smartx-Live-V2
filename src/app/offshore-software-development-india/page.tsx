import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DirectAnswer from '@/components/ui/DirectAnswer'
import LastUpdated from '@/components/ui/LastUpdated'
import PeopleAlsoAsk from '@/components/ui/PeopleAlsoAsk'
import { ArrowUpRight, CheckCircle2, Clock, Globe, ShieldCheck, Users } from 'lucide-react'

const siteUrl = 'https://www.smartxsolutions.in'
const canonical = `${siteUrl}/offshore-software-development-india`

export const metadata: Metadata = {
  title: 'Offshore Software Development India | SmartX Solutions',
  description:
    'Hire a US-ready offshore development team in India. Senior engineers, USD pricing from $2,000/dev/month, daily EST overlap, NDA-first, 100% IP transfer. Book a US-hours call.',
  keywords: [
    'offshore software development india',
    'offshore development team india',
    'hire developers india',
    'staff augmentation india',
    'dedicated development team india',
    'outsource software development india',
  ],
  alternates: { canonical },
  openGraph: {
    type: 'website',
    url: canonical,
    siteName: 'SmartX Solutions',
    title: 'Offshore Software Development in India — US-Ready Teams',
    description:
      'Senior offshore engineers in Hyderabad, India. USD pricing bands, daily EST overlap windows, NDA-first engagement, 100% IP transfer.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Offshore Software Development India — SmartX Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offshore Software Development in India — US-Ready Teams',
    description:
      'Senior offshore engineers in Hyderabad, India. USD pricing bands, daily EST overlap, NDA-first, 100% IP transfer.',
    images: ['/og-image.png'],
  },
}

const faqs = [
  {
    q: 'How much does offshore software development in India cost?',
    a: 'A dedicated senior developer costs $2,000 to $4,000 per month. Staff augmentation runs $15 to $35 per hour depending on seniority. Fixed-price projects: business websites $600 to $1,800, web applications $2,500 to $9,500, SaaS MVPs from $3,500. These are 60-70% below equivalent US agency rates.',
  },
  {
    q: 'How does the timezone difference work with US teams?',
    a: 'India is 9.5 hours ahead of US Eastern Time. Your end-of-day handoff becomes our working day — you review completed work each morning. We also hold daily overlap windows (8-11 AM ET) for standups, demos, and calls, and can shift further for critical launches.',
  },
  {
    q: 'Who owns the code and IP?',
    a: 'You do — 100%. Every engagement includes an NDA before the first call, full IP transfer in the contract, and code delivered continuously to repositories you own from day one, so you are never dependent on us to access your own product.',
  },
  {
    q: 'Has SmartX worked with US clients before?',
    a: 'Yes. MANT Talent Solutions, a US non-IT staffing agency, is a live SmartX build (manttalent.com) — a conversion-optimised Next.js site delivered across timezones with US-hours check-ins.',
  },
  {
    q: 'What is the minimum engagement size?',
    a: 'Fixed-price projects start around $1,500. Dedicated developers have a 1-month minimum — no long lock-ins. We scope every engagement in writing before any payment.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: 'Offshore Software Development from India',
      serviceType: 'Offshore software development',
      description:
        'Dedicated offshore development teams, staff augmentation, and fixed-price software projects delivered from Hyderabad, India for US and UK companies.',
      url: canonical,
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Australia' },
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
        { '@type': 'ListItem', position: 2, name: 'Offshore Software Development India', item: canonical },
      ],
    },
  ],
}

const pricingRows = [
  ['Dedicated senior developer', '$2,000 – $4,000 / month', 'Full-time engineer on your roadmap, 1-month minimum'],
  ['Staff augmentation', '$15 – $35 / hour', 'Senior engineers embedded in your existing team'],
  ['Business website', '$600 – $1,800', 'Marketing site, SEO foundations, 3–6 weeks'],
  ['Web application', '$2,500 – $9,500', 'Portals, dashboards, booking systems, 3–5 months'],
  ['SaaS MVP', '$3,500 – $8,000', 'Multi-tenant platform with billing, 4–8 months'],
]

const engagementModels = [
  {
    icon: Users,
    title: 'Dedicated Team',
    body: 'One or more engineers working exclusively on your product, managed by SmartX, reporting to you. Best for ongoing product development where scope evolves.',
  },
  {
    icon: Globe,
    title: 'Staff Augmentation',
    body: 'Senior developers embedded directly into your existing engineering team, your tools, your standups. Best when you have technical leadership and need capacity.',
  },
  {
    icon: ShieldCheck,
    title: 'Fixed-Price Project',
    body: 'A written scope, a fixed price, milestone payments, and a 30-day warranty. Best for defined builds — websites, applications, and MVPs.',
  },
]

export default function OffshorePage() {
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
            <span className="text-white/75">Offshore Software Development India</span>
          </nav>

          {/* Hero */}
          <header className="pb-12 border-b border-white/[0.08]">
            <p className="text-[#00e5b0] text-sm font-dm uppercase tracking-widest mb-4">
              For US &amp; UK Companies
            </p>
            <h1 className="font-syne font-bold text-[clamp(38px,6vw,72px)] leading-[1.03] max-w-4xl mb-6">
              Offshore Software Development in India — Without the Offshore Headaches
            </h1>
            <p className="text-white/68 text-lg md:text-xl leading-relaxed max-w-3xl mb-4">
              SmartX Solutions gives US and UK companies a senior engineering team in Hyderabad,
              India — at 60–70% below US agency rates, with daily EST overlap windows, NDA-first
              engagement, and 100% IP transfer written into every contract.
            </p>
            <LastUpdated date="July 2026" />
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#6c63ff] text-white font-medium text-[15px] hover:bg-[#5a52e0] transition-colors"
              >
                Book a US-Hours Call
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/portfolio/mant-talent"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/10 text-white/70 font-medium text-[15px] hover:border-white/25 hover:text-white transition-all"
              >
                See Our US Client Work
              </Link>
            </div>
          </header>

          <DirectAnswer
            question="Why hire an offshore development team in India?"
            answer="India offers the world's largest pool of English-speaking senior engineers at 60-70% below US agency rates. SmartX Solutions provides dedicated teams from $2,000 per developer per month from Hyderabad — with daily US-hours overlap, NDA-first engagement, and full IP transfer."
            cite="SmartX Solutions — July 2026"
          />

          {/* Pricing */}
          <section className="mt-14">
            <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-5">
              Transparent USD Pricing
            </h2>
            <p className="text-white/64 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
              These are honest 2026 ranges, not teaser rates — final quotes depend on scope and are
              fixed in writing before work starts. For context, equivalent US agency rates typically
              run $100–$200/hour; our senior engineers deliver the same modern stack (Next.js, React,
              Node.js, Python, AWS) from Hyderabad.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-white/[0.04]">
                    <th className="px-4 py-3 font-syne font-bold text-white text-[13px]">Engagement</th>
                    <th className="px-4 py-3 font-syne font-bold text-white text-[13px] whitespace-nowrap">USD range</th>
                    <th className="px-4 py-3 font-syne font-bold text-white text-[13px]">What it covers</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row) => (
                    <tr key={row[0]} className="border-t border-white/[0.06]">
                      {row.map((cell, i) => (
                        <td key={i} className="px-4 py-3 text-white/60 align-top">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Engagement models */}
          <section className="mt-14">
            <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-8">
              Three Ways to Engage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {engagementModels.map((model) => {
                const Icon = model.icon
                return (
                  <div key={model.title} className="p-6 rounded-2xl border border-white/[0.07] bg-[#0d0d14]">
                    <div className="w-10 h-10 rounded-xl bg-[#6c63ff]/15 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-[#6c63ff]" />
                    </div>
                    <h3 className="font-syne font-bold text-lg mb-2">{model.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{model.body}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Timezone */}
          <section className="mt-14">
            <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-5">
              The Timezone Difference, Used Properly
            </h2>
            <div className="space-y-5 text-white/64 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Hyderabad is 9.5 hours ahead of US Eastern Time. Handled badly, that means slow
                email ping-pong. Handled properly, it means your product moves while you sleep:
                the brief you send at 5 PM ET is our next morning — finished work is waiting when
                you log in.
              </p>
              <p>
                We hold structured overlap windows every working day from 8 to 11 AM Eastern
                (5:30 to 8:30 PM IST) for standups, demos, and decisions — that is where blockers
                die. For launches and incidents, the team shifts to your hours.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#00e5b0]/20 bg-[#00e5b0]/[0.05] p-5 max-w-3xl">
              <Clock size={18} className="text-[#00e5b0] shrink-0" />
              <p className="text-white/70 text-sm">
                Daily US overlap window: <strong className="text-white">8:00–11:00 AM ET</strong> — guaranteed in every engagement.
              </p>
            </div>
          </section>

          {/* US work */}
          <section className="mt-14">
            <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-5">
              Live US Client Work
            </h2>
            <div className="rounded-2xl border border-white/[0.07] bg-[#0d0d14] p-7 max-w-3xl">
              <p className="font-syne font-bold text-white text-lg mb-2">MANT Talent Solutions — US Staffing Agency</p>
              <p className="text-white/55 text-sm leading-relaxed mb-4">
                A complete Next.js 15 website for a US non-IT staffing agency: conversion-optimised
                lead forms, animated statistics, and US-market copy — delivered across timezones with
                US-hours check-ins, live at manttalent.com.
              </p>
              <Link
                href="/portfolio/mant-talent"
                className="inline-flex items-center gap-2 text-sm text-[#00e5b0] hover:text-white transition-colors"
              >
                Read the case study <ArrowUpRight size={13} />
              </Link>
            </div>
          </section>

          {/* IP & compliance */}
          <section className="mt-14">
            <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-5">
              Your IP Is Yours. In Writing.
            </h2>
            <ul className="space-y-4 max-w-3xl">
              {[
                'NDA signed before the first discovery call — standard on every engagement, no exceptions.',
                '100% IP transfer written into the contract: code, designs, documentation, and data are yours on final payment.',
                'Source code lives in repositories you own from day one — you are never locked out of your own product, and there is nothing to hand over at the end because you already have it.',
                'Contracts can be executed under US jurisdiction on request, and we work within your compliance requirements (SOC 2-aligned practices, GDPR-aware data handling).',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/64 text-base leading-relaxed">
                  <CheckCircle2 size={17} className="text-[#00e5b0] mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
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

          <PeopleAlsoAsk
            items={[
              {
                q: 'Is India still the best country for offshore software development?',
                a: 'India remains the largest offshore development market with the deepest senior talent pool and strongest English proficiency among major outsourcing destinations. Hyderabad specifically hosts major Microsoft, Google, Amazon, and Apple engineering campuses.',
              },
              {
                q: 'What are the risks of offshore development and how do you avoid them?',
                a: 'The classic risks are communication gaps, quality variance, and IP uncertainty. Mitigations: daily overlap windows with your timezone, senior-only engineers with verifiable live work, milestone payments, and code in your repositories from day one.',
              },
              {
                q: 'How do payments work for US clients?',
                a: 'SmartX invoices in USD via international bank transfer or Wise, with milestone-based schedules for projects and monthly billing for dedicated teams. No large upfront payments — typically 30-40% to start.',
              },
            ]}
          />

          {/* Final CTA */}
          <section className="mt-16 rounded-2xl border border-[#6c63ff]/25 bg-[#6c63ff]/[0.07] p-8 text-center">
            <h2 className="font-syne font-bold text-2xl mb-3">Talk to Us in Your Timezone</h2>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              30 minutes, US business hours, no obligation. We will tell you honestly whether
              offshore fits your project — and quote in writing within 48 hours if it does.
            </p>
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#6c63ff] text-white font-medium text-[15px] hover:bg-[#5a52e0] transition-colors"
            >
              Book a US-Hours Call
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
