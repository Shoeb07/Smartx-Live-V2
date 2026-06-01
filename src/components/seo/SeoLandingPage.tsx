'use client'

import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react'
import { breadcrumbSchema, faqSchema, type SeoPage } from '@/lib/seo'

type SeoLandingPageProps = {
  page: SeoPage
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function SeoLandingPage({ page }: SeoLandingPageProps) {
  const breadcrumbs = page.breadcrumb ?? [
    { label: 'Home', href: '/' },
    { label: page.h1, href: `/${page.slug}` },
  ]
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

      <main className="relative overflow-hidden bg-[#050508] text-white pt-28 pb-24">
        <div
          className="absolute inset-0 pointer-events-none opacity-35"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none bg-gradient-to-b from-[#6c63ff]/20 via-[#050508]/40 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <motion.nav
            aria-label="Breadcrumb"
            className="mb-10"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/45">
              {breadcrumbs.map((item, index) => (
                <li key={item.href} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white/70" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          <motion.section
            className="pb-14 border-b border-white/[0.07]"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#00e5b0]/20 bg-[#00e5b0]/10 px-4 py-2"
            >
              <Sparkles size={13} className="text-[#00e5b0]" />
              <span className="text-[#9ff8df] text-[11px] font-dm uppercase tracking-[0.16em]">
                {page.eyebrow}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="font-syne font-bold text-[clamp(42px,7vw,84px)] leading-[1.02] max-w-5xl mb-7"
            >
              {page.h1}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/68 text-lg md:text-xl leading-relaxed max-w-3xl"
            >
              {page.intro}
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 rounded-full bg-[#6c63ff] px-6 py-3 text-sm font-medium text-white shadow-[0_18px_60px_rgba(108,99,255,0.25)] hover:bg-[#5a52e0] transition-all"
              >
                Start a Project
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/70 hover:border-white/25 hover:text-white transition-all"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start mt-14">
            <article className="space-y-8">
              {page.sections.map((section, sectionIndex) => (
                <motion.section
                  key={section.h2}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.65, delay: sectionIndex * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0d14]/80 p-6 md:p-8 transition-all duration-300 hover:border-white/[0.14] hover:bg-[#11111b]"
                >
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#00e5b0] via-[#6c63ff] to-transparent opacity-70" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#00e5b0]/[0.08] via-transparent to-transparent" />
                  <div className="relative z-10">
                    <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-sm font-syne font-bold text-[#00e5b0]">
                      {String(sectionIndex + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-syne font-bold text-[clamp(26px,4vw,40px)] leading-tight mb-5">
                      {section.h2}
                    </h2>
                    <div className="space-y-5">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-white/62 leading-relaxed text-base md:text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.section>
              ))}

              {page.faqs && (
                <motion.section
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-4"
                >
                  <p className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-4">
                    Answers
                  </p>
                  <h2 className="font-syne font-bold text-[clamp(26px,4vw,40px)] leading-tight mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {page.faqs.map((faq, index) => (
                      <motion.div
                        key={faq.question}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.06 }}
                        className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 md:p-6 transition-all duration-300 hover:border-[#6c63ff]/35 hover:bg-white/[0.055]"
                      >
                        <h3 className="font-syne font-bold text-lg mb-2">{faq.question}</h3>
                        <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
            </article>

            <motion.aside
              className="lg:sticky lg:top-28 overflow-hidden rounded-2xl border border-white/[0.09] bg-[rgba(13,13,20,0.85)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00e5b0]/70 to-transparent" />
              <h2 className="font-syne font-bold text-lg mb-4">Related Pages</h2>
              <ul className="space-y-2">
                {page.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-start gap-3 rounded-xl border border-transparent px-3 py-3 text-sm text-white/60 transition-all hover:border-white/[0.08] hover:bg-white/[0.04] hover:text-white"
                    >
                      <CheckCircle2 size={15} className="text-[#00e5b0] mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact-us"
                className="group mt-6 inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#6c63ff] px-5 py-3 text-sm font-medium text-white hover:bg-[#5a52e0] transition-all"
              >
                Start a Project
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
