'use client'

import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  Code2,
  Lightbulb,
  LifeBuoy,
  PenTool,
  Rocket,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    n: '01',
    short: 'Discover',
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description:
      'We turn business goals, user needs, and technical constraints into one clear product direction.',
    duration: '1–2 weeks',
    deliverables: ['Product roadmap', 'Technical feasibility', 'Success metrics'],
    metric: 'Clarity before code',
    color: '#6c63ff',
  },
  {
    n: '02',
    short: 'Design',
    icon: PenTool,
    title: 'Design & Prototype',
    description:
      'Wireframes become a polished, testable experience before engineering investment begins.',
    duration: '2–4 weeks',
    deliverables: ['UX flows', 'Design system', 'Interactive prototype'],
    metric: 'Validated experience',
    color: '#a89eff',
  },
  {
    n: '03',
    short: 'Build',
    icon: Code2,
    title: 'Agile Development',
    description:
      'Senior engineers ship working software in focused sprints with transparent demos and continuous QA.',
    duration: '6–16 weeks',
    deliverables: ['Production code', 'Sprint demos', 'Automated tests'],
    metric: 'Progress you can see',
    color: '#00e5b0',
  },
  {
    n: '04',
    short: 'Launch',
    icon: Rocket,
    title: 'Launch & Deploy',
    description:
      'Performance, infrastructure, security, and rollout come together in a controlled production launch.',
    duration: '1–2 weeks',
    deliverables: ['Cloud deployment', 'Performance audit', 'Launch checklist'],
    metric: 'Built for real traffic',
    color: '#ff5e62',
  },
  {
    n: '05',
    short: 'Scale',
    icon: LifeBuoy,
    title: 'Growth & Support',
    description:
      'After launch, we monitor, improve, and scale the product as customers and business demands grow.',
    duration: 'Ongoing',
    deliverables: ['24/7 monitoring', 'Product updates', 'Growth roadmap'],
    metric: 'A long-term product partner',
    color: '#00e5b0',
  },
]

function ProductEngine({ active }: { active: number }) {
  const step = steps[active]
  const Icon = step.icon

  return (
    <div className="relative flex min-h-[380px] items-center justify-center lg:min-h-[520px]" aria-hidden="true">
      <motion.div
        className="absolute h-[360px] w-[360px] rounded-full opacity-40 blur-[90px] lg:h-[460px] lg:w-[460px]"
        animate={{ backgroundColor: step.color }}
        transition={{ duration: 0.8 }}
        style={{ opacity: 0.1 }}
      />

      {[1, 0.76, 0.52].map((scale, index) => (
        <motion.div
          key={scale}
          className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-white/[0.09] lg:h-[430px] lg:w-[430px]"
          style={{ scale }}
          animate={{ rotate: index % 2 ? -360 : 360 }}
          transition={{ duration: 26 - index * 5, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {steps.map((item, index) => {
        const ItemIcon = item.icon
        const angle = (index / steps.length) * Math.PI * 2 - Math.PI / 2
        const x = Math.cos(angle) * 166
        const y = Math.sin(angle) * 166
        const complete = index <= active

        return (
          <motion.div
            key={item.n}
            className="absolute z-20 flex h-12 w-12 items-center justify-center rounded-2xl border bg-[#0b0b12] shadow-2xl lg:h-14 lg:w-14"
            animate={{
              x,
              y,
              scale: index === active ? 1.16 : 1,
              borderColor: complete ? `${item.color}80` : 'rgba(255,255,255,0.08)',
              color: complete ? item.color : 'rgba(255,255,255,0.28)',
              boxShadow: index === active ? `0 0 35px ${item.color}35` : '0 16px 40px rgba(0,0,0,.32)',
            }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <ItemIcon size={18} />
          </motion.div>
        )
      })}

      <motion.div
        className="absolute h-[205px] w-[205px] rounded-full border lg:h-[260px] lg:w-[260px]"
        animate={{ borderColor: `${step.color}35`, rotate: active * 24 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: `conic-gradient(from 180deg, transparent, ${step.color}18, transparent 48%)`,
        }}
      />

      <motion.div
        className="relative z-10 flex h-36 w-36 flex-col items-center justify-center overflow-hidden rounded-[34px] border bg-[#10101a]/95 text-center shadow-2xl backdrop-blur-xl lg:h-44 lg:w-44"
        animate={{
          borderColor: `${step.color}70`,
          boxShadow: `0 0 70px ${step.color}22, inset 0 0 35px ${step.color}10`,
        }}
      >
        <motion.div
          className="absolute inset-x-4 h-px"
          animate={{ y: [-65, 65], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={step.n}
            initial={{ opacity: 0, scale: 0.65, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.7, rotate: 8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <Icon size={29} style={{ color: step.color }} />
            <span className="mt-3 font-syne text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              SmartX engine
            </span>
            <span className="mt-1 font-syne text-base font-bold text-white">{step.short}</span>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="absolute bottom-3 flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/45 backdrop-blur-md"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles size={12} style={{ color: step.color }} />
        Your idea becomes a scalable product
      </motion.div>
    </div>
  )
}

function MobileStory() {
  return (
    <div className="space-y-4 lg:hidden">
      {steps.map((step, index) => {
        const Icon = step.icon
        return (
          <motion.article
            key={step.n}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d0d14] p-6"
          >
            <div className="absolute inset-y-0 left-0 w-px" style={{ background: step.color }} />
            <div className="mb-5 flex items-center justify-between">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{ color: step.color, backgroundColor: `${step.color}16` }}
              >
                <Icon size={19} />
              </div>
              <span className="font-syne text-4xl font-bold text-white/[0.06]">{step.n}</span>
            </div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.18em]" style={{ color: step.color }}>
              {step.duration}
            </p>
            <h3 className="mb-3 font-syne text-xl font-bold">{step.title}</h3>
            <p className="mb-5 text-sm leading-7 text-white/50">{step.description}</p>
            <div className="flex flex-wrap gap-2">
              {step.deliverables.map((item) => (
                <span key={item} className="rounded-full border border-white/[0.07] px-3 py-1 text-[11px] text-white/55">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        )
      })}
    </div>
  )
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const progress = useTransform(scrollYProgress, [0.06, 0.94], ['0%', '100%'])
  const backdropY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (reduceMotion) return
    const next = Math.min(steps.length - 1, Math.floor(value * steps.length))
    setActive(next)
  })

  const step = steps[active]

  return (
    <section ref={sectionRef} id="process" className="relative bg-[#07070c] lg:h-[500vh]">
      <div className="relative overflow-hidden px-6 py-28 lg:sticky lg:top-0 lg:h-screen lg:px-10 lg:py-0">
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            y: reduceMotion ? 0 : backdropY,
            background:
              'radial-gradient(circle at 50% 48%, rgba(108,99,255,.12), transparent 28%), radial-gradient(circle at 82% 28%, rgba(0,229,176,.06), transparent 22%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          }}
        />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="mb-14 lg:mb-8">
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#8f86ff]">How we work · Scroll to build</p>
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl font-syne text-[clamp(38px,5.3vw,76px)] font-bold leading-[0.98] tracking-[-0.035em]">
                From business idea to{' '}
                <span className="text-gradient-accent">market impact.</span>
              </h2>
              <p className="max-w-sm text-sm leading-7 text-white/45">
                One senior team moves your product through five connected stages—without the handoff gaps that slow agencies down.
              </p>
            </div>
          </div>

          <MobileStory />

          <div className="hidden grid-cols-[0.9fr_1.2fr_0.9fr] items-center gap-6 lg:grid">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="font-syne text-6xl font-bold text-white/[0.07]">{step.n}</span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">Current phase</p>
                  <p className="mt-1 text-xs font-medium" style={{ color: step.color }}>{step.duration}</p>
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="mb-4 font-syne text-3xl font-bold leading-tight">{step.title}</h3>
                  <p className="max-w-sm text-sm leading-7 text-white/50">{step.description}</p>
                  <div className="mt-6 h-px w-16" style={{ background: step.color }} />
                </motion.div>
              </AnimatePresence>
            </div>

            <ProductEngine active={active} />

            <div className="rounded-3xl border border-white/[0.08] bg-[#0d0d14]/80 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between border-b border-white/[0.07] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff5e62]" />
                  <span className="h-2 w-2 rounded-full bg-[#f6c453]" />
                  <span className="h-2 w-2 rounded-full bg-[#00e5b0]" />
                </div>
                <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">Live delivery</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="mb-4 text-[10px] uppercase tracking-[0.18em]" style={{ color: step.color }}>
                    Outputs unlocked
                  </p>
                  <div className="space-y-3">
                    {step.deliverables.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + index * 0.07 }}
                        className="flex items-center gap-3 text-sm text-white/60"
                      >
                        <span
                          className="flex h-5 w-5 items-center justify-center rounded-full"
                          style={{ color: step.color, background: `${step.color}16` }}
                        >
                          <Check size={11} />
                        </span>
                        {item}
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-7 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">Business result</p>
                    <p className="mt-2 font-syne text-sm font-bold text-white/80">{step.metric}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 hidden items-center gap-4 lg:flex">
            <span className="w-16 text-[10px] tabular-nums text-white/30">0{active + 1} / 05</span>
            <div className="relative h-px flex-1 overflow-hidden bg-white/[0.08]">
              <motion.div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#6c63ff] via-[#a89eff] to-[#00e5b0]" style={{ width: reduceMotion ? '100%' : progress }} />
            </div>
            <div className="flex gap-1">
              {steps.map((item, index) => (
                <span
                  key={item.n}
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: index === active ? 26 : 6,
                    background: index <= active ? item.color : 'rgba(255,255,255,.12)',
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center lg:hidden">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[#6c63ff] px-6 py-3 text-sm font-medium text-white">
              Build your product <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
