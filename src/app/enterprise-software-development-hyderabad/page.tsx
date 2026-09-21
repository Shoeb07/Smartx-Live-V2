import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TrackedLeadLink from '@/components/analytics/TrackedLeadLink'
import { ArrowUpRight, Phone, Check, MessageCircle } from 'lucide-react'
import { absoluteUrl, siteName } from '@/lib/seo'
import DirectAnswer from '@/components/ui/DirectAnswer'

const page = {
  title: 'Enterprise Software Development Company in Hyderabad',
  description:
    'SmartX Solutions builds enterprise software in Hyderabad — custom ERP, CRM, workflow automation, and BI platforms for growing companies.',
  canonicalUrl: absoluteUrl('/enterprise-software-development-hyderabad'),
}

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.canonicalUrl },
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.canonicalUrl,
    siteName,
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Enterprise Software Development Company in Hyderabad - SmartX Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: page.title,
    description: page.description,
    images: ['/og-image.png'],
  },
}

const solutions = [
  {
    icon: '🏭',
    title: 'ERP Systems',
    description: 'Integrated platforms that unify inventory, finance, sales, and operations in one system — like our One Stop Dashboard project.',
  },
  {
    icon: '🤝',
    title: 'CRM Platforms',
    description: 'Custom customer relationship management systems built around your sales process, not a generic template.',
  },
  {
    icon: '👥',
    title: 'HRMS and Payroll Systems',
    description: 'Employee records, attendance, leave management, and automated payroll processing in one platform.',
  },
  {
    icon: '📦',
    title: 'Inventory Management',
    description: 'Real-time stock tracking across warehouses or locations, with automated reorder alerts and supplier management.',
  },
  {
    icon: '📊',
    title: 'Business Intelligence Dashboards',
    description: 'Live reporting and analytics that replace manual spreadsheet compilation with automated, always-current dashboards.',
  },
  {
    icon: '⚙️',
    title: 'Workflow Automation Platforms',
    description: 'Automate approvals, notifications, and repetitive business processes that currently depend on manual follow-up.',
  },
  {
    icon: '🗺️',
    title: 'Multi-Location Management Systems',
    description: 'A single platform giving management visibility across multiple branches, warehouses, or offices in real time.',
  },
]

const process = [
  { step: 1, title: 'Requirements Analysis', description: 'We map your current operations, data sources, and pain points before writing a single line of code.' },
  { step: 2, title: 'Architecture Design', description: 'We design a system architecture that supports your current scale and the growth you\'re planning for.' },
  { step: 3, title: 'Phased Development', description: 'We build in phases so you get working modules early, rather than waiting months for a single big-bang release.' },
  { step: 4, title: 'UAT Testing', description: 'Your team tests each module against real business scenarios before it goes live, catching gaps early.' },
  { step: 5, title: 'Training + Deployment', description: 'We train your staff on the new system and support the rollout so adoption doesn\'t stall at launch.' },
]

const costs = [
  { tier: 'Small enterprise system', range: '₹3,00,000 – ₹8,00,000', note: 'Single-module systems — e.g. inventory or HRMS only' },
  { tier: 'Medium platform', range: '₹8,00,000 – ₹20,00,000', note: 'Multi-module platforms with integrations and dashboards' },
  { tier: 'Large enterprise suite', range: '₹20,00,000+', note: 'Full ERP/CRM suites with multi-location support and custom workflows' },
]

const techStack = [
  { category: 'Frontend', technologies: ['React', 'Next.js'] },
  { category: 'Backend', technologies: ['Node.js', 'microservices architecture'] },
  { category: 'Database & Cache', technologies: ['PostgreSQL', 'Redis'] },
  { category: 'Infrastructure', technologies: ['Docker', 'AWS'] },
]

const faqs = [
  {
    question: 'What is enterprise software development?',
    answer:
      'Enterprise software is custom business software built for companies that need to manage complex operations — inventory, staff, sales, finance — in one integrated system. SmartX Solutions builds these systems in Hyderabad from ₹3,00,000.',
  },
  {
    question: 'How long does enterprise software development take?',
    answer:
      'A basic enterprise system takes 3-4 months. A full-featured ERP or CRM takes 6-12 months. We build in phases so you get working software faster and can adjust requirements as you go.',
  },
  {
    question: 'What is the difference between enterprise software and a normal web application?',
    answer:
      'Enterprise software handles complex multi-user workflows, large data volumes, role-based access, integrations with other systems, and advanced reporting. A normal web app handles simpler single-purpose tasks. Enterprise software costs more but replaces multiple tools.',
  },
  {
    question: 'Do you integrate enterprise software with existing systems?',
    answer:
      'Yes. We integrate with existing ERP, accounting software, payment gateways, and third-party APIs. Most enterprise projects involve at least 3-5 integrations.',
  },
]

export default function EnterpriseSoftwarePage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Enterprise Software Development',
    serviceType: 'Enterprise Software Development',
    provider: {
      '@id': 'https://www.smartxsolutions.in/#localbusiness',
    },
    areaServed: {
      '@type': 'City',
      name: 'Hyderabad',
    },
    description: page.description,
    url: page.canonicalUrl,
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Our Enterprise Software Process',
    description: 'The five-step process SmartX Solutions follows to deliver enterprise software in Hyderabad.',
    step: process.map((p) => ({
      '@type': 'HowToStep',
      position: p.step,
      name: p.title,
      text: p.description,
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
      { '@type': 'ListItem', position: 3, name: 'Enterprise Software Development', item: page.canonicalUrl },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Navbar />
      <main className="bg-[#050508] text-white overflow-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto relative z-10">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/55">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-white">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white/75">Enterprise Software Development</span>
            </nav>
            <p className="text-[#00e5b0] text-sm font-dm uppercase tracking-widest mb-6">Enterprise Software</p>
            <h1 className="font-syne font-bold text-[clamp(42px,7vw,72px)] leading-tight mb-6">
              Enterprise Software Development Company in Hyderabad
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="https://wa.me/919346754163?text=Hi%2C%20I%20want%20to%20discuss%20an%20enterprise%20software%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00e5b0] text-black font-dm font-bold rounded-lg hover:bg-[#00d99f] transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
              <TrackedLeadLink
                href="tel:+919346754163"
                eventLabel="phone_click"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-dm font-bold rounded-lg hover:border-white/40 transition-all"
              >
                <Phone size={20} />
                Call Now
              </TrackedLeadLink>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <DirectAnswer
            question="Which is the best enterprise software development company in Hyderabad?"
            answer="SmartX Solutions builds custom enterprise software in Hyderabad including ERP platforms, CRM systems, workflow automation, and business dashboards. Our One Stop Dashboard project is a live example of enterprise software we delivered for a Hyderabad client."
          />
        </div>

        {/* What Is Enterprise Software */}
        <section className="py-16 px-6 lg:px-10 max-w-5xl mx-auto">
          <h2 className="font-syne font-bold text-4xl mb-6">What Is Enterprise Software?</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Enterprise software is a category of business systems built to manage operations at scale — not a single task, but the coordination of many moving parts across a company. Where a simple app might handle one job, enterprise software typically covers things like ERP (Enterprise Resource Planning), CRM (Customer Relationship Management), HRMS (Human Resource Management Systems), inventory management, and business intelligence dashboards, often integrated together so data flows between departments instead of living in disconnected spreadsheets and tools.
          </p>
        </section>

        {/* Solutions We Build */}
        <section className="py-16 px-6 lg:px-10 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-syne font-bold text-4xl mb-12">Enterprise Software Solutions We Build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <div key={s.title} className="bg-[#0d0d14] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.16] transition-all">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-syne font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <h2 className="font-syne font-bold text-4xl mb-4">Our Enterprise Software Process</h2>
          <p className="text-white/60 mb-12 max-w-2xl">Five defined stages from requirements to a trained, live system.</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                <div className="bg-[#0d0d14] border border-white/[0.08] rounded-xl p-6 min-h-[200px] flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#6c63ff] flex items-center justify-center text-lg font-bold mb-4">{p.step}</div>
                    <h3 className="font-syne font-bold text-lg mb-3">{p.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{p.description}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-2 w-4 h-1 bg-gradient-to-r from-[#6c63ff] to-[#00e5b0]" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Cost */}
        <section className="py-16 px-6 lg:px-10 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-syne font-bold text-4xl mb-4">Enterprise Software Cost in Hyderabad</h2>
            <p className="text-white/60 mb-10">Timeline: 3–12 months depending on scope.</p>
            <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-[#0d0d14]">
                    <th className="px-6 py-4 font-syne font-bold text-sm">System Tier</th>
                    <th className="px-6 py-4 font-syne font-bold text-sm">Cost Range</th>
                    <th className="px-6 py-4 font-syne font-bold text-sm">What's Included</th>
                  </tr>
                </thead>
                <tbody>
                  {costs.map((c, i) => (
                    <tr key={c.tier} className={i % 2 === 0 ? 'bg-white/[0.015]' : ''}>
                      <td className="px-6 py-4 font-medium">{c.tier}</td>
                      <td className="px-6 py-4 text-[#00e5b0] font-semibold">{c.range}</td>
                      <td className="px-6 py-4 text-white/60 text-sm">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Hyderabad */}
        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <h2 className="font-syne font-bold text-4xl mb-6">Why Hyderabad for Enterprise Software?</h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-8">
            Hyderabad has grown into one of India's largest IT hubs, anchored by HITEC City and home to a deep pool of senior engineering talent with real enterprise-scale experience. Companies building ERP, CRM, and business intelligence platforms benefit from a mature local ecosystem of engineers who have worked on complex, multi-module systems — at rates meaningfully lower than Bangalore, without a drop in engineering quality.
          </p>
        </section>

        {/* Case Study */}
        <section className="py-16 px-6 lg:px-10 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-syne font-bold text-4xl mb-6">Case Study: One Stop Dashboard</h2>
            <div className="bg-[#0d0d14] border border-white/[0.08] rounded-xl p-8">
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                One Stop Dashboard is an ERP platform SmartX Solutions built for a multi-location business that was running operations across spreadsheets, WhatsApp groups, and paper registers. We built a single dashboard unifying inventory, sales, staff attendance, and financial reporting in real time.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-syne font-bold text-[#00e5b0]">~80%</div>
                <p className="text-white/60 text-sm">less time spent on reporting — month-end reporting dropped from 3-4 days of manual work to automated generation in minutes.</p>
              </div>
              <Link
                href="/portfolio/one-stop-dashboard"
                className="inline-flex items-center gap-2 text-[#6c63ff] hover:text-white transition-colors font-medium"
              >
                Read the full case study
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <h2 className="font-syne font-bold text-4xl mb-12">Technologies for Enterprise Software</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack) => (
              <div key={stack.category} className="bg-[#0d0d14] border border-white/[0.08] rounded-xl p-6">
                <h3 className="font-syne font-bold text-lg mb-4 text-[#6c63ff]">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech) => (
                    <div key={tech} className="flex items-center gap-2 text-white/70">
                      <span className="w-2 h-2 rounded-full bg-[#00e5b0]" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 lg:px-10 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-syne font-bold text-4xl mb-12">FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-[#0d0d14] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.16] transition-all cursor-pointer"
                >
                  <summary className="flex items-start justify-between font-syne font-bold text-lg">
                    <span>{faq.question}</span>
                    <span className="text-[#00e5b0] group-open:rotate-180 transition-transform flex-shrink-0 ml-4">+</span>
                  </summary>
                  <p className="text-white/70 mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#6c63ff] to-[#00e5b0] rounded-2xl p-12 text-center">
            <h2 className="font-syne font-bold text-3xl text-black mb-6">Building an Enterprise System? Let&apos;s Talk.</h2>
            <p className="text-black/80 max-w-2xl mx-auto mb-8">
              Tell us what you&apos;re trying to replace — spreadsheets, disconnected tools, manual reporting — and we&apos;ll scope a fixed-price plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919346754163?text=Hi%2C%20I%20want%20to%20discuss%20an%20enterprise%20software%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-[#00e5b0] font-dm font-bold rounded-lg hover:bg-black/80 transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-black/20 text-black font-dm font-bold rounded-lg hover:bg-black/30 transition-all"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
