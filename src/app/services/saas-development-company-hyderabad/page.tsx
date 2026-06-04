import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowUpRight, Phone, Check } from 'lucide-react'
import { absoluteUrl } from '@/lib/seo'
import WhatsAppButton from './whatsapp-button'

const page = {
  title: 'SaaS Development Company in Hyderabad — SmartX Solutions',
  description:
    'SmartX Solutions is a SaaS development company in Hyderabad building custom SaaS platforms for startups and enterprises across India. Free discovery call available.',
  canonicalUrl: absoluteUrl('/services/saas-development-company-hyderabad'),
}

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.canonicalUrl },
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.canonicalUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: page.title,
    description: page.description,
  },
}

const features = [
  {
    icon: '⚙️',
    title: 'Multi-Tenancy Architecture',
    description: 'Isolated customer data with shared infrastructure for scale and cost efficiency',
  },
  {
    icon: '💳',
    title: 'Subscription Billing',
    description: 'Razorpay & Stripe integration for recurring payments, invoicing, and financial reporting',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboards',
    description: 'Real-time business metrics, user behavior tracking, and actionable insights',
  },
  {
    icon: '🔐',
    title: 'Role-Based Access Control',
    description: 'Granular permissions, admin controls, and audit trails for security and compliance',
  },
  {
    icon: '🔗',
    title: 'API & Integrations',
    description: 'RESTful APIs, webhooks, and pre-built integrations with popular third-party tools',
  },
  {
    icon: '☁️',
    title: 'Cloud-Native',
    description: 'AWS & GCP deployment with auto-scaling, CDN, and high availability',
  },
  {
    icon: '📱',
    title: 'Mobile-Responsive',
    description: 'Seamless experience across devices with progressive web app capabilities',
  },
  {
    icon: '🛡️',
    title: 'Security First',
    description: 'SSL encryption, data protection, DDoS mitigation, and compliance standards',
  },
]

const process = [
  {
    step: 1,
    title: 'Discovery',
    description: 'Understand your business model, target users, revenue strategy, and technical requirements',
  },
  {
    step: 2,
    title: 'Design',
    description: 'Create wireframes, user flows, and design system for consistent, intuitive UX',
  },
  {
    step: 3,
    title: 'Development',
    description: 'Build scalable backend, frontend, APIs, and integrations using modern tech stack',
  },
  {
    step: 4,
    title: 'Deploy',
    description: 'Launch to production with monitoring, performance optimization, and security hardening',
  },
  {
    step: 5,
    title: 'Support',
    description: 'Ongoing maintenance, feature releases, scaling, and continuous improvement',
  },
]

const techStack = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Python', 'Express.js', 'FastAPI'],
  },
  {
    category: 'Database',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'Cloud & DevOps',
    technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Payments & Billing',
    technologies: ['Razorpay', 'Stripe', 'Chargebee'],
  },
  {
    category: 'Analytics',
    technologies: ['Segment', 'Mixpanel', 'Google Analytics', 'Amplitude'],
  },
]

const faqs = [
  {
    question: 'How much does SaaS development cost in Hyderabad?',
    answer:
      'SaaS development costs ₹3,00,000 – ₹15,00,000+ depending on complexity, features, and team size. A focused MVP typically costs ₹3,00,000 – ₹8,00,000. We provide a detailed estimate after discovery.',
  },
  {
    question: 'How long does it take to build a SaaS platform?',
    answer:
      'An MVP takes 10–16 weeks. A full-featured platform with analytics, billing, and admin dashboard takes 4–8 months. Timeline depends on scope, feature complexity, and testing requirements.',
  },
  {
    question: 'Who owns the code and intellectual property?',
    answer:
      'You own 100% of the code, design, and IP upon final payment. We provide complete source code, documentation, and deployment guides so you can maintain or transfer to another team.',
  },
  {
    question: 'Do you sign NDAs and handle confidential information?',
    answer:
      'Yes, absolutely. We sign NDAs before every project and treat client information, business models, and source code with strict confidentiality. Security and privacy are non-negotiable.',
  },
  {
    question: 'Can you integrate third-party services like Razorpay, Stripe, or Slack?',
    answer:
      'Yes. We integrate payment gateways, CRM platforms, communication tools, analytics, shipping providers, and custom APIs. We can also build custom integrations for proprietary systems.',
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer:
      'Yes. We offer ongoing support, bug fixes, feature releases, performance monitoring, security updates, and scaling support. We can operate as an extended team or provide scheduled support blocks.',
  },
]

export default function SaasDevelopmentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SaaS Development Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SmartX Solutions',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
      telephone: '+91-9100-590-377',
      url: 'https://smartxsolutions.in',
    },
    areaServed: ['IN'],
    description:
      'Custom SaaS platform development company in Hyderabad building scalable, secure, and user-friendly SaaS products for startups and enterprises.',
    url: absoluteUrl('/services/saas-development-company-hyderabad'),
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />
      <main className="bg-[#050508] text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto relative z-10">
            <p className="text-[#00e5b0] text-sm font-dm uppercase tracking-widest mb-6">SaaS Development</p>
            <h1 className="font-syne font-bold text-[clamp(48px,8vw,72px)] leading-tight mb-6">
              SaaS Development Company in Hyderabad
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
              Build scalable, multi-tenant SaaS platforms with subscription billing, analytics, APIs, and enterprise security. From MVP to scale-ready platform—SmartX delivers production-ready SaaS products for startups and enterprises across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <WhatsAppButton source="saas-hero" />
              <a
                href="tel:+919100590377"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-dm font-bold rounded-lg hover:border-white/40 transition-all"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>

            <p className="text-white/50 text-sm">
              ✓ Free 30-min discovery call • ✓ No obligation • ✓ Confidential NDA
            </p>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-20 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-syne font-bold text-4xl mb-6">Custom SaaS Platforms Built to Scale</h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-8">
              SaaS (Software-as-a-Service) platforms are subscription-based applications that serve multiple customers from a shared infrastructure. SmartX builds production-ready SaaS products with enterprise features: multi-tenancy for isolated customer data, subscription billing with Razorpay or Stripe, real-time analytics dashboards, role-based access control, API integrations, and cloud-native architecture for infinite scaling.
            </p>

            <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-8">
              <h3 className="font-syne font-bold text-xl mb-6">What We Build</h3>
              <ul className="space-y-4">
                {[
                  'Multi-tenant platforms where each customer has isolated, secure data',
                  'Subscription billing systems with recurring payments, invoices, and churn analytics',
                  'Admin dashboards for customer management, billing, and platform monitoring',
                  'RESTful APIs and webhooks for third-party integrations',
                  'White-label solutions you can rebrand and resell to your customers',
                  'Mobile-responsive or native mobile apps that work alongside your SaaS',
                  'Analytics and reporting that show customers their ROI',
                  'Compliance and security features (SOC 2, GDPR, data encryption)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-[#00e5b0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 lg:px-10 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-syne font-bold text-4xl mb-4 text-center">SaaS Features We Build</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
              Enterprise capabilities built into every SaaS platform
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="bg-[#0d0d14] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.16] transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-syne font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 px-6 lg:px-10 max-w-6xl mx-auto">
          <h2 className="font-syne font-bold text-4xl mb-4">Our Proven SaaS Development Process</h2>
          <p className="text-white/60 mb-16 max-w-2xl">
            Every SaaS project moves through defined stages from discovery to production support
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {process.map((phase, i) => (
              <div key={i} className="relative">
                <div className="bg-[#0d0d14] border border-white/[0.08] rounded-xl p-6 min-h-[200px] flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#6c63ff] flex items-center justify-center text-lg font-bold mb-4">
                      {phase.step}
                    </div>
                    <h3 className="font-syne font-bold text-lg mb-3">{phase.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{phase.description}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-2 w-4 h-1 bg-gradient-to-r from-[#6c63ff] to-[#00e5b0]" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-6 lg:px-10 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-syne font-bold text-4xl mb-4">Technology Stack</h2>
            <p className="text-white/60 mb-16 max-w-2xl">
              Modern, scalable technologies chosen for performance, maintainability, and future growth
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((stack, i) => (
                <div key={i} className="bg-[#0d0d14] border border-white/[0.08] rounded-xl p-6">
                  <h3 className="font-syne font-bold text-lg mb-4 text-[#6c63ff]">{stack.category}</h3>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, j) => (
                      <div key={j} className="flex items-center gap-2 text-white/70">
                        <span className="w-2 h-2 rounded-full bg-[#00e5b0]" />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Hyderabad */}
        <section className="py-20 px-6 lg:px-10 max-w-6xl mx-auto">
          <h2 className="font-syne font-bold text-4xl mb-6">Why Choose a Hyderabad SaaS Company?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-8">
              <h3 className="font-syne font-bold text-lg mb-3 text-[#00e5b0]">Senior Technical Talent</h3>
              <p className="text-white/70 leading-relaxed">
                Hyderabad hosts India's best engineering talent with expertise in SaaS, cloud architecture, and modern tech stacks. Our team has built products for startups and enterprises.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-8">
              <h3 className="font-syne font-bold text-lg mb-3 text-[#00e5b0]">Cost Efficiency</h3>
              <p className="text-white/70 leading-relaxed">
                Save 40-50% on development costs compared to US or Europe rates, without compromising on quality. Better value means more features or longer runway for your startup.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-8">
              <h3 className="font-syne font-bold text-lg mb-3 text-[#00e5b0]">Thriving Tech Ecosystem</h3>
              <p className="text-white/70 leading-relaxed">
                Hyderabad's HITEC City clusters thousands of tech companies. We understand startup challenges, enterprise requirements, and the Indian market better than offshore teams.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#6c63ff]/10 to-[#00e5b0]/10 border border-white/[0.08] rounded-xl p-8">
            <h3 className="font-syne font-bold text-xl mb-4">Partner With a Local Team That Understands Your Market</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Being in Hyderabad means we understand the Indian startup ecosystem, regulatory requirements, payment systems (Razorpay), customer expectations, and growth patterns. We're not a remote team disconnected from your market—we're part of the same ecosystem.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 lg:px-10 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-syne font-bold text-4xl mb-4">FAQ</h2>
            <p className="text-white/60 mb-12">
              Common questions about SaaS development, costs, and our process
            </p>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <details
                  key={i}
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

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#6c63ff] to-[#00e5b0] rounded-2xl p-12 text-center">
            <h2 className="font-syne font-bold text-3xl text-black mb-6">Ready to Build Your SaaS Platform?</h2>
            <p className="text-black/80 max-w-2xl mx-auto mb-8">
              Let's discuss your product idea, target market, and technical requirements. We'll provide a detailed roadmap and cost estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton variant="secondary" source="saas-cta" message="I want to build a SaaS platform" />
              <a
                href="mailto:business@smartxsolutions.in"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-black/20 text-black font-dm font-bold rounded-lg hover:bg-black/30 transition-all"
              >
                Email: business@smartxsolutions.in
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
