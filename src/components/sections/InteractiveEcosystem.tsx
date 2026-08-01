'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowUpRight, Bot, Cloud, Code2, Database, Smartphone } from 'lucide-react'

const experiences = [
  {
    id: 'mobile',
    label: 'Mobile products',
    title: 'Apps people enjoy using',
    description: 'Native-feeling mobile experiences engineered for speed, retention and dependable growth.',
    icon: Smartphone,
    position: 'left-[16%] top-[48%]',
    color: '#00e5b0',
  },
  {
    id: 'web',
    label: 'Web platforms',
    title: 'Powerful software, beautifully clear',
    description: 'Custom dashboards, portals and SaaS products that turn complex workflows into simple actions.',
    icon: Code2,
    position: 'left-[49%] top-[39%]',
    color: '#8d82ff',
  },
  {
    id: 'cloud',
    label: 'Cloud systems',
    title: 'Infrastructure ready for momentum',
    description: 'Secure cloud architecture that remains fast, observable and resilient as your customer base grows.',
    icon: Cloud,
    position: 'left-[79%] top-[37%]',
    color: '#4ee7ff',
  },
  {
    id: 'automation',
    label: 'AI automation',
    title: 'Let software handle the repetitive work',
    description: 'Practical AI and workflow automation that saves time while keeping your team in control.',
    icon: Bot,
    position: 'left-[18%] top-[18%]',
    color: '#a89eff',
  },
  {
    id: 'data',
    label: 'Data intelligence',
    title: 'Decisions backed by live information',
    description: 'Connected data products that reveal performance, opportunities and the next best action.',
    icon: Database,
    position: 'left-[67%] top-[76%]',
    color: '#6fffcf',
  },
]

export default function InteractiveEcosystem() {
  const reduceMotion = useReducedMotion()
  const [activeId, setActiveId] = useState('web')
  const xTarget = useMotionValue(0)
  const yTarget = useMotionValue(0)
  const imageX = useSpring(xTarget, { stiffness: 55, damping: 22, mass: 0.8 })
  const imageY = useSpring(yTarget, { stiffness: 55, damping: 22, mass: 0.8 })
  const active = experiences.find((experience) => experience.id === activeId) ?? experiences[1]

  const moveScene = (clientX: number, clientY: number, bounds: DOMRect) => {
    if (reduceMotion) return
    const x = (clientX - bounds.left) / bounds.width - 0.5
    const y = (clientY - bounds.top) / bounds.height - 0.5
    xTarget.set(x * -18)
    yTarget.set(y * -12)
  }

  return (
    <section id="digital-ecosystem" aria-labelledby="ecosystem-title" className="relative overflow-hidden bg-[#050508] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,99,255,.12),transparent_48%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#00e5b0]">Explore the ecosystem</p>
          <h2 id="ecosystem-title" className="font-syne text-[clamp(38px,5.8vw,72px)] font-bold leading-[1.02] tracking-[-0.035em]">
            One connected team. <span className="text-gradient-accent">Every digital layer.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-white/48">
            Move through the SmartX product lab to see how strategy, software, automation, cloud and data work together to build customer-ready digital products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[3/2] min-h-[430px] overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#070810] shadow-[0_40px_120px_rgba(0,0,0,.55)] sm:min-h-0"
          onPointerMove={(event) => moveScene(event.clientX, event.clientY, event.currentTarget.getBoundingClientRect())}
          onPointerLeave={() => {
            xTarget.set(0)
            yTarget.set(0)
          }}
          onPointerDown={(event) => moveScene(event.clientX, event.clientY, event.currentTarget.getBoundingClientRect())}
        >
          <motion.div className="absolute -inset-5" style={{ x: imageX, y: imageY }}>
            <Image
              src="/images/smartx-digital-ecosystem-v1.webp"
              alt="SmartX digital product ecosystem showing mobile apps, web software, automation, cloud infrastructure and data systems"
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050508]/85 via-transparent to-black/20" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.05]" />

          {experiences.map((experience, index) => {
            const Icon = experience.icon
            const selected = activeId === experience.id
            return (
              <motion.button
                key={experience.id}
                type="button"
                aria-label={`Show ${experience.label} information`}
                aria-pressed={selected}
                onMouseEnter={() => setActiveId(experience.id)}
                onFocus={() => setActiveId(experience.id)}
                onClick={() => setActiveId(experience.id)}
                className={`absolute ${experience.position} z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border p-2.5 backdrop-blur-md transition-colors sm:p-3 ${selected ? 'border-white/35 bg-black/75' : 'border-white/15 bg-black/45'}`}
                animate={reduceMotion ? undefined : { y: [0, index % 2 ? 5 : -5, 0] }}
                transition={{ duration: 3.4 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                style={{ boxShadow: selected ? `0 0 28px ${experience.color}55` : undefined }}
              >
                <Icon size={16} style={{ color: experience.color }} />
                <motion.span
                  className="absolute -inset-2 -z-10 rounded-full border"
                  style={{ borderColor: `${experience.color}55` }}
                  animate={reduceMotion ? undefined : { scale: [0.8, 1.5], opacity: [0.7, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.25 }}
                />
              </motion.button>
            )
          })}

          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-x-4 bottom-4 z-20 rounded-2xl border border-white/[0.1] bg-[#080810]/88 p-4 shadow-2xl backdrop-blur-xl sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-[390px] sm:p-5"
            aria-live="polite"
          >
            <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em]" style={{ color: active.color }}>
              <active.icon size={13} /> {active.label}
            </div>
            <h3 className="font-syne text-xl font-bold text-white">{active.title}</h3>
            <p className="mt-2 text-[13px] leading-5 text-white/50">{active.description}</p>
          </motion.div>

          <div className="absolute bottom-6 right-6 z-20 hidden items-center gap-2 rounded-full border border-white/[0.09] bg-black/50 px-3 py-2 text-[9px] uppercase tracking-[0.14em] text-white/40 backdrop-blur-md md:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00e5b0]" /> Move to explore
          </div>
        </motion.div>

        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {experiences.map((experience) => {
            const Icon = experience.icon
            const selected = activeId === experience.id
            return (
              <button
                key={experience.id}
                type="button"
                onClick={() => setActiveId(experience.id)}
                onMouseEnter={() => setActiveId(experience.id)}
                className={`group rounded-2xl border p-4 text-left transition-all ${selected ? 'border-[#6c63ff]/45 bg-[#6c63ff]/[0.08]' : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.14]'}`}
              >
                <Icon size={15} style={{ color: experience.color }} />
                <h3 className="mt-3 font-syne text-sm font-bold text-white">{experience.label}</h3>
                <p className="mt-2 text-[11px] leading-4 text-white/38">{experience.description}</p>
              </button>
            )
          })}
        </div>

        <div className="mt-9 text-center">
          <Link href="/services" className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-white/65 transition-all hover:border-[#6c63ff]/45 hover:text-white">
            Explore all capabilities
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
