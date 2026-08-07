'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowUpRight, Braces, Database, ShieldCheck, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useMagneticButton } from '@/lib/useMagneticButton'

const stats = [
  { value: 5, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 2, suffix: '+', label: 'Years Building' },
  { value: 5, suffix: '+', label: 'Happy Clients' },
]

const techStack = [
  'Custom Software', 'Web Development', 'Mobile App Development', 'SaaS Platforms',
  'Cloud Architecture', 'UI/UX Design', 'Digital Transformation', 'Scalable Software',
]

function WordReveal({ text, delay = 0, gradient = false }: {
  text: string; delay?: number; gradient?: boolean
}) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.22em]">
          <motion.span
            className={`inline-block ${gradient ? 'text-gradient-accent' : ''}`}
            initial={{ y: '110%', rotate: 2, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{ delay: delay + i * 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  )
}

function Counter({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  const startCountAnimation = () => {
    if (started.current) return

    started.current = true
    const dur = 1200
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1)
      setCount(Math.round(value * (1 - Math.pow(1 - t, 4))))
      if (t < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }
  
  useEffect(() => {
    if (!isInView) return
    startCountAnimation()
  }, [isInView])

  useEffect(() => {
    const timer = setTimeout(() => {
      startCountAnimation()
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div ref={ref} className={`flex flex-col gap-1.5 pr-6 ${index !== 0 ? 'pl-6 border-l border-white/[0.06]' : ''}`}>
      <span className="font-syne font-bold text-[40px] leading-none tabular-nums">{count}{suffix}</span>
      <span className="text-[13px] text-white/60">{label}</span>
    </div>
  )
}

function HeroSystemVisual() {
  const reduceMotion = useReducedMotion()
  const visualRef = useRef<HTMLDivElement>(null)
  const [headView, setHeadView] = useState<'left' | 'front' | 'right'>('front')
  const bodyXTarget = useMotionValue(0)
  const bodyYTarget = useMotionValue(0)
  const eyeXTarget = useMotionValue(0)
  const eyeYTarget = useMotionValue(0)
  const robotX = useSpring(bodyXTarget, { stiffness: 80, damping: 22, mass: 0.7 })
  const robotY = useSpring(bodyYTarget, { stiffness: 80, damping: 22, mass: 0.7 })
  const eyeX = useSpring(eyeXTarget, { stiffness: 180, damping: 24, mass: 0.3 })
  const eyeY = useSpring(eyeYTarget, { stiffness: 180, damping: 24, mass: 0.3 })
  const nodes = [
    { icon: Braces, label: 'Web Apps', position: 'left-0 top-[22%]', color: '#a89eff' },
    { icon: Database, label: 'Cloud', position: 'right-0 top-[12%]', color: '#00e5b0' },
    { icon: ShieldCheck, label: 'Secure', position: 'right-2 bottom-[15%]', color: '#ff7a72' },
  ]

  useEffect(() => {
    if (reduceMotion) return

    const followPointer = (event: PointerEvent) => {
      const bounds = visualRef.current?.getBoundingClientRect()
      if (!bounds) return

      const dx = Math.max(-1, Math.min(1, (event.clientX - (bounds.left + bounds.width * 0.62)) / (bounds.width * 0.58)))
      const dy = Math.max(-1, Math.min(1, (event.clientY - (bounds.top + bounds.height * 0.34)) / (bounds.height * 0.6)))

      bodyXTarget.set(dx * 5)
      bodyYTarget.set(dy * 3)
      setHeadView(dx < -0.2 ? 'left' : dx > 0.2 ? 'right' : 'front')
      eyeXTarget.set(dx * 8)
      eyeYTarget.set(dy * 5)
    }

    window.addEventListener('pointermove', followPointer, { passive: true })
    return () => window.removeEventListener('pointermove', followPointer)
  }, [bodyXTarget, bodyYTarget, eyeXTarget, eyeYTarget, reduceMotion])

  return (
    <motion.div
      ref={visualRef}
      initial={{ opacity: 0, scale: 0.88, x: 70 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none relative hidden h-[520px] w-full self-center lg:block xl:h-[620px] 2xl:h-[680px]"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-[15%] rounded-full bg-[#6c63ff]/20 blur-[100px]"
        animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-[8%] rounded-full border border-dashed border-white/[0.08]"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-[15%] rounded-full border border-white/[0.07]"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        style={{ background: 'conic-gradient(from 20deg, transparent, rgba(108,99,255,.14), transparent 35%)' }}
      />
      <motion.div className="absolute -inset-4" style={{ x: robotX, y: robotY }}>
        <motion.div
          className="absolute inset-0"
          animate={reduceMotion ? undefined : {
            x: [-9, 10, -9],
            y: [8, -17, 8],
            rotate: [-0.8, 1.1, -0.8],
            scale: [1, 1.025, 1],
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/images/smartx-robot-body-v3.png"
            alt=""
            fill
            priority
            sizes="790px"
            className="object-cover object-[72%_46%]"
            style={{
              maskImage: 'radial-gradient(ellipse 72% 82% at 58% 50%, black 55%, transparent 88%)',
              WebkitMaskImage: 'radial-gradient(ellipse 72% 82% at 58% 50%, black 55%, transparent 88%)',
            }}
          />

          <motion.div
            className="absolute left-[33%] top-[-2%] z-20 h-[62%] w-[54%] origin-[52%_87%] overflow-visible [will-change:transform]"
          >
            <div className={`absolute inset-0 ${headView === 'front' ? 'translate-x-[2%]' : ''}`}>
              <Image
                src={headView === 'front'
                  ? '/images/smartx-robot-head-front-v5.png'
                  : '/images/smartx-robot-head-short-v4.png'}
                alt=""
                fill
                priority
                sizes="390px"
                className={`${headView === 'right' ? 'scale-x-[-1]' : ''} object-contain object-center drop-shadow-[0_18px_35px_rgba(108,99,255,.25)]`}
              />
            </div>

            {(headView === 'front'
              ? [[38, 45], [61, 45]]
              : headView === 'left'
                ? [[38, 45], [22, 49]]
                : [[62, 45], [78, 49]]
            ).map(([left, top], index) => (
              <motion.div
                key={index}
                className="absolute z-20"
                style={{ left: `${left}%`, top: `${top}%`, x: eyeX, y: eyeY }}
              >
                <motion.span
                  className="block h-[7px] w-[11px] rounded-[50%] bg-[#e4e0ff] shadow-[0_0_8px_3px_rgba(139,124,255,.9)]"
                  animate={reduceMotion ? undefined : { scaleY: [1, 1, 0.08, 1] }}
                  transition={{ duration: 4.6, repeat: Infinity, times: [0, 0.91, 0.94, 1] }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-[31%] top-[36%] h-[32%] w-px bg-gradient-to-b from-transparent via-[#00e5b0]/80 to-transparent"
        animate={{ x: [0, 270, 0], opacity: [0, 0.9, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {nodes.map((node, index) => {
        const Icon = node.icon
        return (
          <motion.div
            key={node.label}
            className={`absolute ${node.position} flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-[#0d0d14]/85 px-4 py-3 shadow-2xl backdrop-blur-xl`}
            animate={{ y: [0, index % 2 ? 8 : -8, 0] }}
            transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon size={14} style={{ color: node.color }} />
            <span className="text-[10px] font-medium text-white/55">{node.label}</span>
          </motion.div>
        )
      })}

      <motion.div
        className="absolute bottom-10 left-[29%] flex items-center gap-2 rounded-full border border-white/[0.07] bg-black/25 px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-white/45 backdrop-blur-md"
        animate={{ opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <Sparkles size={11} className="text-[#00e5b0]" /> Engineering ideas into impact
      </motion.div>
    </motion.div>
  )
}

function HeroMobileVisual() {
  const reduceMotion = useReducedMotion()
  const visualRef = useRef<HTMLDivElement>(null)
  const lastInteraction = useRef(0)
  const autoStep = useRef(0)
  const [headView, setHeadView] = useState<'left' | 'front' | 'right'>('front')
  const eyeXTarget = useMotionValue(0)
  const eyeYTarget = useMotionValue(0)
  const eyeX = useSpring(eyeXTarget, { stiffness: 170, damping: 24, mass: 0.3 })
  const eyeY = useSpring(eyeYTarget, { stiffness: 170, damping: 24, mass: 0.3 })

  const updateMobileGaze = (clientX: number, clientY: number) => {
    const bounds = visualRef.current?.getBoundingClientRect()
    if (!bounds) return

    const dx = Math.max(-1, Math.min(1, (clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2)))
    const dy = Math.max(-1, Math.min(1, (clientY - (bounds.top + bounds.height * 0.42)) / (bounds.height * 0.5)))
    lastInteraction.current = Date.now()
    setHeadView(dx < -0.2 ? 'left' : dx > 0.2 ? 'right' : 'front')
    eyeXTarget.set(dx * 7)
    eyeYTarget.set(dy * 4)
  }

  useEffect(() => {
    if (reduceMotion) return

    const views: Array<'left' | 'front' | 'right'> = ['front', 'left', 'front', 'right']
    const idleGlance = window.setInterval(() => {
      if (Date.now() - lastInteraction.current < 4500) return
      autoStep.current = (autoStep.current + 1) % views.length
      setHeadView(views[autoStep.current])
      eyeXTarget.set(views[autoStep.current] === 'left' ? -4 : views[autoStep.current] === 'right' ? 4 : 0)
      eyeYTarget.set(0)
    }, 2300)

    const followOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma == null || Date.now() - lastInteraction.current < 3000) return
      const gamma = Math.max(-24, Math.min(24, event.gamma))
      setHeadView(gamma < -7 ? 'left' : gamma > 7 ? 'right' : 'front')
      eyeXTarget.set((gamma / 24) * 6)
    }

    window.addEventListener('deviceorientation', followOrientation, { passive: true })
    return () => {
      window.clearInterval(idleGlance)
      window.removeEventListener('deviceorientation', followOrientation)
    }
  }, [eyeXTarget, eyeYTarget, reduceMotion])

  return (
    <motion.div
      ref={visualRef}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.95, duration: 0.9 }}
      onPointerDown={(event) => updateMobileGaze(event.clientX, event.clientY)}
      onPointerMove={(event) => {
        if (event.pointerType === 'touch' && event.buttons === 0) return
        updateMobileGaze(event.clientX, event.clientY)
      }}
      className="relative -mx-4 mb-9 mt-2 h-[300px] touch-pan-y overflow-hidden sm:h-[390px] lg:hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-[18%] rounded-full border border-dashed border-white/[0.09]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute left-1/2 top-0 h-full w-[92%] max-w-[370px] -translate-x-1/2 sm:max-w-[420px]">
        <motion.div
          className="absolute -inset-3"
          animate={reduceMotion ? undefined : { y: [6, -9, 6], rotate: [-0.5, 0.6, -0.5], scale: [1, 1.018, 1] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/images/smartx-robot-body-v3.png"
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 92vw, 420px"
            className="object-cover object-[72%_46%]"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 82%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 82%, transparent 100%)',
            }}
          />
          <div className="absolute left-[33%] top-[-2%] z-10 h-[62%] w-[54%] overflow-visible">
            <Image
              src={headView === 'front'
                ? '/images/smartx-robot-head-front-v5.png'
                : '/images/smartx-robot-head-short-v4.png'}
              alt=""
              fill
              priority
              sizes="190px"
              className={`${headView === 'right' ? 'scale-x-[-1]' : ''} object-contain object-center drop-shadow-[0_12px_24px_rgba(108,99,255,.25)]`}
            />
            {(headView === 'front'
              ? [[38, 45], [61, 45]]
              : headView === 'left'
                ? [[38, 45], [22, 49]]
                : [[62, 45], [78, 49]]
            ).map(([left, top], index) => (
              <motion.span
                key={index}
                className="absolute z-20 h-[5px] w-2 rounded-[50%] bg-[#e4e0ff] shadow-[0_0_6px_2px_rgba(139,124,255,.85)]"
                style={{ left: `${left}%`, top: `${top}%`, x: eyeX, y: eyeY }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-[#00e5b0]/20 bg-[#050508]/70 px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-[#00e5b0] backdrop-blur-md">
        <Sparkles size={11} /> Intelligence engineered for growth
      </div>
    </motion.div>
  )
}

const WA_URL = 'https://wa.me/919100590377?text=Hi%20SmartX%2C%20I%27d%20like%20to%20discuss%20a%20software%20project.'

export default function Hero() {
  const btn1 = useMagneticButton(0.3)

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 lg:pt-24 lg:pb-14 xl:pt-28 xl:pb-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-5 xl:gap-6">
          <div className="min-w-0">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#6c63ff]/25 bg-[#6c63ff]/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5b0] animate-pulse" />
          <span className="text-[11px] text-[#a89eff] tracking-[0.07em] uppercase">Software Development Company · Hyderabad, India</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-syne font-bold text-[clamp(48px,7.5vw,100px)] lg:text-[54px] xl:text-[68px] 2xl:text-[80px] leading-[1.01] tracking-[-0.03em] mb-5 max-w-5xl">
          <div className="block"><WordReveal text="We Build Custom" delay={0.18} /></div>
          <div className="block"><WordReveal text="Software That" delay={0.30} gradient /></div>
          <div className="block"><WordReveal text="Grows Your Business" delay={0.46} /></div>
        </h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50 text-[16px] lg:text-[13px] xl:text-[14px] max-w-[620px] mb-7 leading-[1.7] lg:leading-[1.55] speakable"
        >
          Web apps, mobile apps, fintech &amp; AI solutions — built by a Hyderabad team that delivers on time.
        </motion.p>

        <HeroMobileVisual />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="flex flex-wrap items-center gap-4 mb-10 lg:mb-8 xl:mb-12"
        >
          <Link
            href="/contact-us"
            ref={btn1.ref as React.RefObject<HTMLAnchorElement>}
            onMouseMove={btn1.onMouseMove}
            onMouseLeave={btn1.onMouseLeave}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#6c63ff] text-white font-medium text-[15px] hover:bg-[#5a52e0] transition-colors"
          >
            Get a Free Consultation
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="basis-full text-[13px] text-white/40 hover:text-[#25D366] transition-colors mt-1"
          >
            Or message us on WhatsApp →
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/[0.06] pt-7"
          style={{ minHeight: '60px' }}
        >
          {stats.map((s, i) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} index={i} />
          ))}
        </motion.div>
          </div>

          <HeroSystemVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute right-10 bottom-12 flex flex-col items-center gap-2 z-10"
      >
        <div className="h-10 w-px bg-white/[0.08] relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-transparent to-[#6c63ff]"
            animate={{ y: ['0%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span className="text-[9px] text-white/55 tracking-[0.18em] uppercase [writing-mode:vertical-rl]">Scroll</span>
      </motion.div>

      {/* Tech marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden whitespace-nowrap z-10 pb-3 pointer-events-none">
        <div className="inline-flex animate-marquee">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 mx-7 text-[10px] text-white/50 uppercase tracking-[0.14em]">
              <span className="w-[3px] h-[3px] rounded-full bg-[#6c63ff]/40 flex-shrink-0" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
