'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Bot, Gauge, Layers3, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const outcomes = [
  { icon: Gauge, value: '2.4×', label: 'Faster workflows', color: '#00e5b0' },
  { icon: TrendingUp, value: '99.9%', label: 'Reliable platforms', color: '#8d82ff' },
  { icon: Layers3, value: 'Built to scale', label: 'From MVP to enterprise', color: '#65b7ff' },
]

const pipeline = ['Discover', 'Design', 'Build', 'Launch']

export default function GrowthShowcase() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="growth-system" aria-labelledby="growth-showcase-title" className="relative overflow-hidden border-y border-white/[0.06] bg-[#07070c] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_42%,rgba(108,99,255,.16),transparent_32%),radial-gradient(circle_at_15%_85%,rgba(0,229,176,.08),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[.86fr_1.14fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00e5b0]/20 bg-[#00e5b0]/[0.06] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#00e5b0]">
            <Bot size={13} /> Engineered for business impact
          </div>
          <h2 id="growth-showcase-title" className="max-w-xl font-syne text-[clamp(38px,5vw,66px)] font-bold leading-[1.02] tracking-[-0.035em]">
            Software that moves your <span className="text-gradient-accent">business forward.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-7 text-white/50">
            We connect product strategy, custom software development, automation and scalable cloud engineering into one delivery team—so your technology creates measurable momentum.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon
              return (
                <motion.div
                  key={outcome.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1, duration: 0.55 }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
                >
                  <Icon size={16} style={{ color: outcome.color }} />
                  <div className="mt-3 font-syne text-lg font-bold text-white">{outcome.value}</div>
                  <div className="mt-1 text-[11px] text-white/40">{outcome.label}</div>
                </motion.div>
              )
            })}
          </div>

          <Link href="/contact-us" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#6c63ff] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#5b53e7]">
            Build your growth platform
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[500px] rounded-[30px] border border-white/[0.08] bg-[#0c0c14]/90 p-4 shadow-[0_35px_100px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-6"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">SmartX delivery system</p>
              <p className="mt-1 font-syne text-lg font-bold">Growth Control Center</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#00e5b0]/20 bg-[#00e5b0]/[0.06] px-3 py-1.5 text-[10px] text-[#00e5b0]">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-[#00e5b0]"
                animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35], scale: [0.8, 1.25, 0.8] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              Systems live
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-[1.25fr_.75fr]">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-black/20 p-5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-white/35">Delivery velocity</p>
                  <p className="mt-1 font-syne text-3xl font-bold">+38%</p>
                </div>
                <span className="rounded-full bg-[#00e5b0]/10 px-2.5 py-1 text-[10px] text-[#00e5b0]">This quarter</span>
              </div>
              <div className="mt-8 flex h-36 items-end gap-2">
                {[34, 48, 42, 66, 58, 78, 92, 84, 100].map((height, index) => (
                  <motion.div
                    key={index}
                    className="relative flex-1 overflow-hidden rounded-t-md bg-gradient-to-t from-[#6c63ff]/35 to-[#00e5b0]/80"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + index * 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/30 to-transparent"
                      animate={reduceMotion ? undefined : { y: [-20, 140] }}
                      transition={{ duration: 2.8, delay: index * 0.08, repeat: Infinity, repeatDelay: 1.4 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-5">
                <p className="text-xs text-white/35">Automation saved</p>
                <p className="mt-2 font-syne text-2xl font-bold">184 hrs</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#6c63ff] to-[#00e5b0]"
                    initial={{ width: 0 }}
                    whileInView={{ width: '82%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.1 }}
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-5">
                <p className="text-xs text-white/35">Platform health</p>
                <div className="mt-4 grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <span
                      key={index}
                      className="sx-health-pulse h-3 rounded-sm bg-[#00e5b0]/70"
                      style={{ animationDelay: `${(index % 7) * 90}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/[0.06] bg-black/20 p-5">
            <div className="flex items-center justify-between gap-3">
              {pipeline.map((step, index) => (
                <div key={step} className="flex min-w-0 flex-1 items-center gap-3">
                  <motion.div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#6c63ff]/30 bg-[#6c63ff]/10 text-[10px] text-[#a89eff]"
                    animate={reduceMotion ? undefined : { boxShadow: ['0 0 0 rgba(108,99,255,0)', '0 0 22px rgba(108,99,255,.38)', '0 0 0 rgba(108,99,255,0)'] }}
                    transition={{ duration: 2.4, delay: index * 0.5, repeat: Infinity }}
                  >
                    0{index + 1}
                  </motion.div>
                  <span className="hidden text-[11px] text-white/50 sm:block">{step}</span>
                  {index < pipeline.length - 1 && <span className="h-px flex-1 bg-gradient-to-r from-[#6c63ff]/50 to-white/[0.05]" />}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
