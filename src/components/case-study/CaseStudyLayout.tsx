'use client'

import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronRight, Clock, Layers, CheckCircle2, Quote } from 'lucide-react'

export type CaseStudySolutionItem = {
  heading: string
  detail: string
}

export type CaseStudyResult = {
  metric: string
  value: string
  description: string
}

export type CaseStudyScreenshot = {
  alt: string
  caption: string
}

export type CaseStudyTestimonial = {
  quote: string
  author: string
  role: string
}

export type CaseStudyServiceLink = {
  href: string
  label: string
}

export type CaseStudyLayoutProps = {
  title: string
  subtitle: string
  client: string
  industry: string
  timeline: string
  techStack: string[]
  challenge: string
  solution: CaseStudySolutionItem[]
  results: CaseStudyResult[]
  heroImagePlaceholder: string
  screenshotPlaceholders: CaseStudyScreenshot[]
  testimonial?: CaseStudyTestimonial | null
  liveUrl?: string | null
  accentColor: string
  relatedServices?: CaseStudyServiceLink[]
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function CaseStudyLayout({
  title,
  subtitle,
  client,
  industry,
  timeline,
  techStack,
  challenge,
  solution,
  results,
  heroImagePlaceholder,
  screenshotPlaceholders,
  testimonial,
  liveUrl,
  accentColor,
  relatedServices,
}: CaseStudyLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-[#050508] text-white pt-28 pb-24">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
          }}
        />
        {/* Top gradient glow */}
        <div
          className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, ${accentColor}18 0%, transparent 100%)`,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">

          {/* ── 1. HERO SECTION ── */}
          <motion.nav
            aria-label="Breadcrumb"
            className="mb-10 text-sm text-white/45 flex items-center gap-2 flex-wrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} className="text-white/25" />
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <ChevronRight size={13} className="text-white/25" />
            <span className="text-white/70">{client}</span>
          </motion.nav>

          <motion.section
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="pb-12 border-b border-white/[0.08]"
          >
            {/* Industry badge */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{
                borderColor: `${accentColor}40`,
                background: `${accentColor}12`,
              }}
            >
              <span
                className="text-[11px] font-dm uppercase tracking-[0.14em]"
                style={{ color: accentColor }}
              >
                {industry}
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-syne font-bold text-[clamp(36px,6vw,68px)] leading-[1.05] max-w-4xl mb-6"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/65 text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
            >
              {subtitle}
            </motion.p>

            {/* Quick stats */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-5 mb-8"
            >
              <span className="inline-flex items-center gap-2 text-sm text-white/55">
                <Clock size={14} style={{ color: accentColor }} />
                {timeline} delivery
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-white/55">
                <Layers size={14} style={{ color: accentColor }} />
                {techStack.length} technologies
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-white/55">
                <CheckCircle2 size={14} className="text-[#00e5b0]" />
                Live project
              </span>
            </motion.div>

            {/* CTA */}
            {liveUrl && (
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all"
                  style={{ background: accentColor }}
                >
                  View Live Project
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>
            )}

            {/*
              TODO: Replace with real screenshot
              File: public/case-studies/[slug]/hero.png
              Size: 1200x600px
            */}
            <div
              className="w-full h-[400px] rounded-2xl mt-10 flex flex-col items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${accentColor}08 0%, transparent 100%)`,
                border: `1px solid ${accentColor}15`,
              }}
              aria-label={heroImagePlaceholder}
            >
              <div
                className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center font-syne font-bold text-2xl"
                style={{
                  background: `${accentColor}20`,
                  color: accentColor,
                }}
              >
                {client.charAt(0)}
              </div>
              <p className="text-white/20 text-sm">{client} - Coming Soon</p>
              <p className="text-white/10 text-xs mt-1">Screenshots being added shortly</p>
            </div>
          </motion.section>

          {/* ── 2. OVERVIEW STRIP ── */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 border-b border-white/[0.07]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { label: 'Client', value: client },
              { label: 'Industry', value: industry },
              { label: 'Timeline', value: timeline },
              { label: 'Status', value: 'Delivered' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/[0.07] bg-[#0d0d14] p-5"
              >
                <p className="text-white/35 text-xs uppercase tracking-widest mb-1.5">{item.label}</p>
                <p className="font-syne font-bold text-base text-white">{item.value}</p>
              </div>
            ))}
          </motion.div>

          {/* ── 3. THE CHALLENGE ── */}
          <motion.section
            className="py-12 border-b border-white/[0.07]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-[11px] uppercase tracking-[0.14em] mb-4"
              style={{ color: accentColor }}
            >
              The Challenge
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-syne font-bold text-[clamp(28px,4vw,42px)] leading-tight mb-6"
            >
              The Challenge
            </motion.h2>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="relative pl-6"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                style={{ background: `linear-gradient(to bottom, ${accentColor}, transparent)` }}
              />
              <p className="text-white/65 text-base md:text-lg leading-relaxed">{challenge}</p>
            </motion.div>
          </motion.section>

          {/* ── 4. OUR SOLUTION ── */}
          <motion.section
            className="py-12 border-b border-white/[0.07]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.08 }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-[11px] uppercase tracking-[0.14em] mb-4"
              style={{ color: accentColor }}
            >
              Our Solution
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-syne font-bold text-[clamp(28px,4vw,42px)] leading-tight mb-10"
            >
              Our Solution
            </motion.h2>
            <div className="space-y-6">
              {solution.map((item, index) => (
                <motion.div
                  key={item.heading}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0d14]/80 p-6 md:p-8 hover:border-white/[0.14] transition-all"
                >
                  <div
                    className="absolute left-0 top-0 h-full w-0.5"
                    style={{ background: `linear-gradient(to bottom, ${accentColor}, transparent)` }}
                  />
                  <div className="flex items-start gap-5">
                    <span
                      className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl border text-sm font-syne font-bold"
                      style={{
                        borderColor: `${accentColor}30`,
                        background: `${accentColor}12`,
                        color: accentColor,
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-syne font-bold text-lg mb-2">{item.heading}</h3>
                      <p className="text-white/60 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── 5. SCREENSHOT GALLERY ── */}
          <motion.section
            className="py-12 border-b border-white/[0.07]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.08 }}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="font-syne font-bold text-[clamp(28px,4vw,42px)] leading-tight mb-10"
            >
              Project Screenshots
            </motion.h2>

            {/*
              TO ADD REAL SCREENSHOTS:
              Replace each placeholder div below with:
              <Image
                src="/case-studies/[client-slug]/screenshot-1.png"
                alt="[description]"
                width={800} height={450}
                className="w-full rounded-xl"
              />
              Place images in: public/case-studies/[client-slug]/
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {screenshotPlaceholders.map((placeholder, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                >
                  {/*
                    TODO: Replace with real screenshot
                    File: public/case-studies/[slug]/screenshot-[index].png
                    Size: 1200x675px
                  */}
                  <div
                    className="w-full aspect-video rounded-xl flex flex-col items-center justify-center overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}10 0%, rgba(255,255,255,0.02) 100%)`,
                      border: `1px solid ${accentColor}18`,
                    }}
                    aria-label={placeholder.alt}
                  >
                    <div
                      className="w-12 h-12 rounded-xl mb-3 flex items-center justify-center font-syne font-bold text-lg"
                      style={{
                        background: `${accentColor}20`,
                        color: accentColor,
                      }}
                    >
                      {client.charAt(0)}
                    </div>
                    <p className="text-white/20 text-xs text-center px-4">{client}</p>
                    <p className="text-white/10 text-[10px] mt-1 text-center px-4">Screenshot coming soon</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── 6. RESULTS ── */}
          <motion.section
            className="py-12 border-b border-white/[0.07]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-[11px] uppercase tracking-[0.14em] mb-4"
              style={{ color: accentColor }}
            >
              The Results
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="font-syne font-bold text-[clamp(28px,4vw,42px)] leading-tight mb-10"
            >
              The Results
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {results.map((result, index) => (
                <motion.div
                  key={result.value}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.07 }}
                  className="rounded-2xl border border-white/[0.08] bg-[#0d0d14] p-6"
                >
                  <p
                    className="font-syne font-bold text-[clamp(36px,5vw,52px)] leading-none mb-1"
                    style={{ color: accentColor }}
                  >
                    {result.metric}
                  </p>
                  <p className="font-syne font-bold text-base text-white mb-2">{result.value}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{result.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── 7. TECH STACK ── */}
          <motion.section
            className="py-12 border-b border-white/[0.07]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.05 }}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="font-syne font-bold text-[clamp(28px,4vw,42px)] leading-tight mb-8"
            >
              Technology Stack
            </motion.h2>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-sm text-white/75"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.section>

          {/* ── 7.5. RELATED SERVICES ── */}
          {relatedServices && relatedServices.length > 0 && (
            <motion.section
              className="py-10 border-b border-white/[0.07]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/35 text-xs uppercase tracking-widest mb-4">Related services</p>
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-sm text-white/70 hover:border-[#6c63ff]/40 hover:text-white hover:bg-[#6c63ff]/[0.05] transition-all"
                  >
                    {svc.label}
                    <ArrowUpRight size={13} />
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── 8. TESTIMONIAL ── */}
          {testimonial ? (
            <motion.section
              className="py-12 border-b border-white/[0.07]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl border border-white/[0.09] bg-[#0d0d14] p-8 md:p-10">
                <Quote
                  size={48}
                  className="absolute top-6 right-8 opacity-10"
                  style={{ color: accentColor }}
                />
                <p className="text-white/80 text-lg md:text-xl leading-relaxed italic mb-6 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-syne font-bold text-white">{testimonial.author}</p>
                  <p className="text-white/45 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.section>
          ) : (
            /* Testimonial placeholder — to be added */
            null
          )}

          {/* ── 9. BOTTOM CTA ── */}
          <motion.section
            className="pt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.14em] mb-4"
              style={{ color: accentColor }}
            >
              Work With Us
            </p>
            <h2 className="font-syne font-bold text-[clamp(30px,4vw,48px)] leading-tight mb-4">
              Ready to Build Something Similar?
            </h2>
            <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto">
              Tell us about your project and we&apos;ll help you figure out the best path forward.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white transition-all"
                style={{ background: accentColor }}
              >
                Start a Project
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/70 hover:border-white/25 hover:text-white transition-all"
              >
                View All Work
              </Link>
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  )
}
