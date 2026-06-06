import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Contact from '@/components/sections/Contact'
import { buildMetadata, breadcrumbSchema, faqSchema } from '@/lib/seo'
import { seoPages } from '@/lib/seo-pages'

const page = seoPages['contact-us']

export const metadata: Metadata = buildMetadata(page)

export default function ContactUsPage() {
  const schemas = [breadcrumbSchema(page), ...(page.faqs ? [faqSchema(page.faqs)] : [])]

  return (
    <>
      <Navbar />
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="relative overflow-hidden bg-[#050508] text-white pt-28">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none bg-gradient-to-b from-[#6c63ff]/20 via-[#050508]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-10">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/75" aria-current="page">Contact Us</span>
          </nav>

          <section className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start pb-16 border-b border-white/[0.07]">
            <div>
              <p className="text-[#00e5b0] text-sm font-dm uppercase tracking-widest mb-4">
                {page.eyebrow}
              </p>
              <h1 className="font-syne font-bold text-[clamp(42px,7vw,84px)] leading-[1.02] max-w-5xl mb-7">
                {page.h1}
              </h1>
              <p className="text-white/68 text-lg md:text-xl leading-relaxed max-w-3xl">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:shoebsmartx@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[#6c63ff] px-6 py-3 text-sm font-medium text-white hover:bg-[#5a52e0] transition-all"
                >
                  Email Us <ArrowUpRight size={14} />
                </a>
                <a
                  href="tel:+919100590377"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/75 hover:border-white/25 hover:text-white transition-all"
                >
                  Call SmartX
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/[0.09] bg-[rgba(13,13,20,0.85)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
              <h2 className="font-syne font-bold text-xl mb-5">Contact Details</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Mail size={17} className="text-[#00e5b0] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-white/45 mb-1">Email</p>
                    <a href="mailto:shoebsmartx@gmail.com" className="text-sm text-white/75 hover:text-white">
                      business@smartxsolutions.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={17} className="text-[#00e5b0] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-white/45 mb-1">Phone</p>
                    <a href="tel:+919100590377" className="text-sm text-white/75 hover:text-white">
                      +91 91005 90377
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={17} className="text-[#00e5b0] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-white/45 mb-1">Location</p>
                    <p className="text-sm text-white/75">Hyderabad, India</p>
                  </div>
                </li>
              </ul>
            </aside>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16">
            {page.sections.map((section) => (
              <article key={section.h2} className="rounded-2xl border border-white/[0.07] bg-[#0d0d14]/80 p-6">
                <h2 className="font-syne font-bold text-2xl mb-4">{section.h2}</h2>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-white/62 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <section className="pb-8">
            <h2 className="font-syne font-bold text-2xl mb-5">Helpful Links Before You Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {page.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 text-white/68 hover:text-white hover:border-white/[0.16] transition-all"
                >
                  <CheckCircle2 size={17} className="text-[#00e5b0] mt-0.5 shrink-0" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <Contact />
      </main>

      <Footer />
    </>
  )
}
