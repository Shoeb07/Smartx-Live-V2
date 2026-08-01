'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Boxes,
  Check,
  CloudCog,
  Cpu,
  Gauge,
  Lightbulb,
  Sparkles,
  Workflow,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const paths = [
  {
    eyebrow: 'Move left · Create',
    title: 'Turn a strong idea into a product people can use.',
    description:
      'For founders and teams starting with an opportunity, brief, or early concept. We shape the strategy, experience, and first scalable release.',
    color: '#a89eff',
    glow: 'rgba(108,99,255,.22)',
    icon: Lightbulb,
    signal: 'Idea → validated product',
    items: ['Product discovery', 'UI/UX prototype', 'MVP development'],
    result: 'Launch with clarity—not guesswork.',
  },
  {
    eyebrow: 'Centre · Transform',
    title: 'Connect your operations with intelligent software.',
    description:
      'For businesses losing time to disconnected tools and manual processes. We design one reliable system around the way your team actually works.',
    color: '#00e5b0',
    glow: 'rgba(0,229,176,.18)',
    icon: Workflow,
    signal: 'Complexity → control',
    items: ['Workflow automation', 'ERP & dashboards', 'AI integrations'],
    result: 'Run faster with fewer moving parts.',
  },
  {
    eyebrow: 'Move right · Scale',
    title: 'Make a growing product faster, safer, and ready to scale.',
    description:
      'For live platforms facing new users, markets, and technical demands. We strengthen the product without slowing the business behind it.',
    color: '#ff7a72',
    glow: 'rgba(255,94,98,.18)',
    icon: CloudCog,
    signal: 'Traction → durable growth',
    items: ['Cloud architecture', 'Performance engineering', 'Product support'],
    result: 'Scale demand without scaling risk.',
  },
]

const robotPositions = ['18%', '50%', '82%']

function Robot({ active }: { active: number }) {
  const reduceMotion = useReducedMotion()
  const color = paths[active].color

  return (
    <motion.div
      className="pointer-events-none absolute bottom-[62px] z-20 -translate-x-1/2 select-none"
      animate={{ left: robotPositions[active] }}
      transition={{ type: reduceMotion ? 'tween' : 'spring', stiffness: 125, damping: 18 }}
      aria-hidden="true"
    >
      <motion.div
        className="relative flex flex-col items-center"
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute -inset-16 rounded-full blur-3xl"
          animate={{ backgroundColor: paths[active].glow }}
        />

        <div className="relative h-7 w-px bg-white/25">
          <motion.span
            className="absolute -left-[6px] -top-2 h-3.5 w-3.5 rounded-full"
            animate={{ backgroundColor: color, boxShadow: `0 0 14px ${color}` }}
          />
        </div>

        <motion.div
          className="relative h-[106px] w-[138px] rounded-[36px] border-2 bg-[#13131d] shadow-2xl"
          animate={{ borderColor: `${color}aa`, boxShadow: `0 10px 35px ${paths[active].glow}` }}
        >
          <div className="absolute inset-[10px] overflow-hidden rounded-[27px] border border-white/[0.07] bg-[#07070c]">
            <motion.div
              className="absolute inset-x-2 top-1/2 h-px"
              animate={reduceMotion ? { opacity: 0.4 } : { y: [-27, 27], opacity: [0, 0.8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
            />
            <div className="absolute inset-0 flex items-center justify-center gap-7">
              {[0, 1].map((eye) => (
                <motion.span
                  key={eye}
                  className="h-4 w-4 rounded-full"
                  animate={{
                    backgroundColor: color,
                    scaleY: reduceMotion ? 1 : [1, 1, 0.12, 1],
                    boxShadow: `0 0 12px ${color}`,
                  }}
                  transition={{ duration: 3.2, delay: eye * 0.08, repeat: Infinity, times: [0, 0.86, 0.9, 1] }}
                />
              ))}
            </div>
          </div>
          <span className="absolute -left-3 top-8 h-10 w-3 rounded-l-full border border-white/10 bg-[#1a1a26]" />
          <span className="absolute -right-3 top-8 h-10 w-3 rounded-r-full border border-white/10 bg-[#1a1a26]" />
        </motion.div>

        <div className="h-3 w-8 bg-white/15" />
        <motion.div
          className="relative flex h-[92px] w-[104px] items-center justify-center rounded-b-[30px] rounded-t-2xl border bg-[#101019]"
          animate={{ borderColor: `${color}66` }}
        >
          <motion.div
            className="flex h-12 w-12 items-center justify-center rounded-2xl border"
            animate={{ color, borderColor: `${color}55`, backgroundColor: `${color}12`, rotate: active * 90 }}
          >
            <Cpu size={22} />
          </motion.div>
          <span className="absolute -left-[25px] top-3 h-14 w-6 rotate-12 rounded-full border border-white/10 bg-[#15151f]" />
          <span className="absolute -right-[25px] top-3 h-14 w-6 -rotate-12 rounded-full border border-white/10 bg-[#15151f]" />
        </motion.div>

        <div className="flex gap-9">
          <span className="h-5 w-6 rounded-b-lg bg-white/15" />
          <span className="h-5 w-6 rounded-b-lg bg-white/15" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function RoboticNavigator() {
  const [active, setActive] = useState(1)
  const reduceMotion = useReducedMotion()
  const path = paths[active]
  const Icon = path.icon

  const move = (direction: -1 | 1) => {
    setActive((current) => Math.max(0, Math.min(paths.length - 1, current + direction)))
  }

  return (
    <section aria-labelledby="robotic-navigator-title" className="relative overflow-hidden border-y border-white/[0.06] bg-[#08080d] py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
          maskImage: 'radial-gradient(circle at center, black, transparent 72%)',
        }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        animate={{ backgroundColor: path.glow }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 grid gap-7 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#6c63ff]/25 bg-[#6c63ff]/10 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#aaa4ff]">
              <Bot size={13} /> SmartX robotic advisor
            </div>
            <h2 id="robotic-navigator-title" className="max-w-3xl font-syne text-[clamp(38px,5.5vw,72px)] font-bold leading-[1.02] tracking-[-0.035em]">
              Move the robot. <span className="text-gradient-accent">Find your next move.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/50 lg:justify-self-end">
            Drag the SmartX robot left or right. It will diagnose where your business is today and reveal the software path that creates the most value next.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0c0c13]/90 shadow-[0_30px_100px_rgba(0,0,0,.38)] backdrop-blur-xl lg:grid-cols-[1.2fr_.8fr]">
          <div className="relative min-h-[540px] overflow-hidden border-b border-white/[0.07] p-5 sm:min-h-[620px] sm:p-9 lg:min-h-[620px] lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/30">
                <Gauge size={12} /> Business trajectory console
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00e5b0] shadow-[0_0_10px_#00e5b0]" />
                <span className="text-[9px] uppercase tracking-[0.16em] text-white/35">Online</span>
              </div>
            </div>

            <motion.div
              className="absolute left-7 top-24 rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-3 backdrop-blur-md sm:left-10"
              animate={{ borderColor: `${path.color}35` }}
            >
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">Motion status</p>
              <p className="mt-1 flex items-center gap-2 text-[10px] font-medium text-white/55">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: path.color, boxShadow: `0 0 9px ${path.color}` }} />
                Axis locked · {active === 0 ? 'Left' : active === 1 ? 'Centre' : 'Right'}
              </p>
            </motion.div>

            <motion.div
              className="absolute right-7 top-24 hidden rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-3 text-right backdrop-blur-md sm:block sm:right-10"
              animate={{ borderColor: `${path.color}35` }}
            >
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">Active signal</p>
              <p className="mt-1 text-[10px] font-medium" style={{ color: path.color }}>{path.signal}</p>
            </motion.div>

            <div className="pointer-events-none absolute left-1/2 top-[53%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.06] sm:h-[420px] sm:w-[420px]" />
            <motion.div
              className="pointer-events-none absolute left-1/2 top-[53%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05] sm:h-[330px] sm:w-[330px]"
              animate={{ rotate: 360, borderColor: `${path.color}18` }}
              transition={{ rotate: { duration: 24, repeat: Infinity, ease: 'linear' } }}
              style={{ background: `conic-gradient(from 90deg, transparent, ${path.color}0d, transparent 42%)` }}
            />

            <div className="absolute inset-x-8 bottom-5 top-20 sm:inset-x-14">
              <div className="absolute inset-x-0 bottom-[62px] h-px bg-gradient-to-r from-[#a89eff]/50 via-[#00e5b0]/70 to-[#ff7a72]/50" />
              <div className="absolute inset-x-0 bottom-[58px]">
                {paths.map((item, index) => (
                  <motion.span
                    key={item.signal}
                    className="absolute h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-[#0c0c13]"
                    style={{ left: robotPositions[index] }}
                    animate={{
                      backgroundColor: index === active ? item.color : 'rgba(255,255,255,.22)',
                      scale: index === active ? 1.45 : 1,
                      boxShadow: index === active ? `0 0 18px ${item.color}` : 'none',
                    }}
                  />
                ))}
              </div>

              <Robot active={active} />

              <input
                aria-label="Move the SmartX robot between Create, Transform, and Scale"
                className="absolute inset-x-0 bottom-0 z-30 h-[320px] w-full cursor-grab opacity-0 active:cursor-grabbing"
                type="range"
                min="0"
                max="2"
                step="1"
                value={active}
                onChange={(event) => setActive(Number(event.target.value))}
              />
            </div>

            <div className="absolute inset-x-5 bottom-5 z-40 flex items-end justify-between sm:inset-x-9">
              {paths.map((item, index) => (
                <button
                  key={item.signal}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  className="group max-w-[30%] text-left"
                >
                  <span className="block text-[9px] uppercase tracking-[0.12em] transition-colors" style={{ color: active === index ? item.color : 'rgba(255,255,255,.3)' }}>
                    {index === 0 ? 'Create' : index === 1 ? 'Transform' : 'Scale'}
                  </span>
                  <span className="mt-1 hidden text-[10px] text-white/25 sm:block">{item.signal}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[500px] flex-col p-7 sm:p-10 lg:min-h-[620px]">
            <div className="mb-8 flex items-center justify-between">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-2xl border"
                animate={{ color: path.color, borderColor: `${path.color}55`, backgroundColor: `${path.color}12` }}
              >
                <Icon size={21} />
              </motion.div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  disabled={active === 0}
                  aria-label="Move robot left"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/25 hover:text-white disabled:opacity-20"
                >
                  <ArrowLeft size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  disabled={active === paths.length - 1}
                  aria-label="Move robot right"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/25 hover:text-white disabled:opacity-20"
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={path.title}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: active === 0 ? -28 : 28, filter: 'blur(7px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: active === 2 ? 28 : -28, filter: 'blur(7px)' }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-1 flex-col"
              >
                <p className="mb-3 text-[10px] uppercase tracking-[0.2em]" style={{ color: path.color }}>{path.eyebrow}</p>
                <h3 className="font-syne text-[clamp(25px,3vw,36px)] font-bold leading-[1.14] tracking-[-0.02em]">{path.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/[0.48]">{path.description}</p>

                <div className="mt-7 space-y-3">
                  {path.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduceMotion ? 0 : 0.1 + index * 0.07 }}
                      className="flex items-center gap-3 text-sm text-white/65"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ color: path.color, background: `${path.color}14` }}>
                        <Check size={11} />
                      </span>
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <div className="mb-6 flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                    <Sparkles size={15} className="mt-0.5 shrink-0" style={{ color: path.color }} />
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">Recommended outcome</p>
                      <p className="mt-1 text-sm font-medium text-white/75">{path.result}</p>
                    </div>
                  </div>
                  <Link href="/contact-us" className="group inline-flex items-center gap-2 text-sm font-medium" style={{ color: path.color }}>
                    Discuss this path <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[10px] uppercase tracking-[0.14em] text-white/25">
          <span className="flex items-center gap-2"><Boxes size={12} /> Product strategy</span>
          <span className="flex items-center gap-2"><Cpu size={12} /> Senior engineering</span>
          <span className="flex items-center gap-2"><CloudCog size={12} /> Scalable infrastructure</span>
        </div>
      </div>
    </section>
  )
}
