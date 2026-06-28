'use client'

import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowUpRight, AlertTriangle } from 'lucide-react'

export type ComparisonLayoutProps = {
  title: string
  subtitle: string
  lastUpdated: string
  authorName: string
  authorRole: string
  authorUrl?: string
  disclosureText: string
  children: React.ReactNode
}

const relatedPages = [
  {
    title: 'Agency vs Upwork: Which Is Right for Your Project?',
    href: '/software-development-agency-vs-upwork',
    tag: 'Agency Comparison',
  },
  {
    title: '10 Best Software Companies in Hyderabad (2026)',
    href: '/best-software-development-companies-hyderabad',
    tag: 'Hyderabad Market',
  },
  {
    title: 'SmartX Solutions vs Toptal',
    href: '/smartx-solutions-vs-toptal',
    tag: 'Direct Comparison',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ComparisonLayout({
  title,
  subtitle,
  lastUpdated,
  authorName,
  authorRole,
  authorUrl,
  disclosureText,
  children,
}: ComparisonLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="relative bg-[#050508] text-white pt-28 pb-24 overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[350px] pointer-events-none bg-gradient-to-b from-[#6c63ff]/10 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">

          {/* Breadcrumb */}
          <motion.nav
            aria-label="Breadcrumb"
            className="mb-10 text-sm text-white/45 flex items-center gap-2 flex-wrap"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} className="text-white/25" />
            <span className="text-white/70">Comparison</span>
          </motion.nav>

          {/* Article header */}
          <motion.header
            className="pb-10 border-b border-white/[0.08]"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#6c63ff]/25 bg-[#6c63ff]/10 px-4 py-1.5"
            >
              <span className="text-[#9ff8df] text-[11px] font-dm uppercase tracking-[0.14em]">
                Agency Comparison
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-syne font-bold text-[clamp(30px,5vw,58px)] leading-[1.08] mb-5"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="text-white/65 text-lg leading-relaxed mb-6 max-w-3xl"
            >
              {subtitle}
            </motion.p>

            {/* Author byline */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 text-sm text-white/50 mb-6"
            >
              <div className="w-8 h-8 rounded-full bg-[#6c63ff]/20 border border-[#6c63ff]/30 flex items-center justify-center text-xs font-syne font-bold text-[#6c63ff] flex-shrink-0">
                {authorName.charAt(0)}
              </div>
              <span>
                By{' '}
                {authorUrl ? (
                  <Link
                    href={authorUrl}
                    className="text-white/75 hover:text-white transition-colors underline underline-offset-2 decoration-white/20"
                  >
                    {authorName}
                  </Link>
                ) : (
                  <span className="text-white/75">{authorName}</span>
                )}
                {' '}&middot; {authorRole}
              </span>
              <span className="text-white/25">&middot;</span>
              <span>Last updated: {lastUpdated}</span>
            </motion.div>

            {/* Disclosure */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.07] px-5 py-4"
            >
              <AlertTriangle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-amber-200/70 text-sm leading-relaxed">
                <strong className="text-amber-300/90">Disclosure:</strong>{' '}{disclosureText}
              </p>
            </motion.div>
          </motion.header>

          {/* Page content */}
          <motion.div
            className="py-12 space-y-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {children}
          </motion.div>

          {/* Bottom CTA */}
          <motion.section
            className="pt-12 border-t border-white/[0.08] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#6c63ff] text-[11px] uppercase tracking-[0.14em] mb-4">Work With SmartX</p>
            <h2 className="font-syne font-bold text-[clamp(28px,4vw,44px)] leading-tight mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/55 text-lg mb-10 max-w-lg mx-auto">
              Tell us what you are building and we will help you figure out the right path forward.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 rounded-full bg-[#6c63ff] px-7 py-3.5 text-sm font-medium text-white hover:bg-[#5a52e0] transition-all"
              >
                Get Free Quote
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/70 hover:border-white/25 hover:text-white transition-all"
              >
                View Our Work
              </Link>
            </div>
          </motion.section>

          {/* Related pages strip */}
          <motion.section
            className="mt-16 pt-10 border-t border-white/[0.07]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/35 text-xs uppercase tracking-widest mb-5">Related Comparisons</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group rounded-xl border border-white/[0.07] bg-[#0d0d14] p-4 hover:border-white/[0.15] transition-all"
                >
                  <p className="text-[#6c63ff] text-[10px] uppercase tracking-widest mb-1.5">{page.tag}</p>
                  <p className="text-sm text-white/65 group-hover:text-white transition-colors leading-snug">
                    {page.title}
                  </p>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  )
}
