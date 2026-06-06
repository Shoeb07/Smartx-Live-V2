'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Your Review Could Be Here',
    role: 'Share your experience with SmartX',
    company: 'Client',
    review: "We are currently collecting testimonials from our clients. If you've worked with us, we'd love to feature your story.",
    rating: 0,
    avatar: '★',
    color: '#6c63ff',
    cta: true,
  },
]

const ratingText = 'Trusted by businesses across India'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  return (
    <section className="py-32 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-white/60 text-base">{ratingText}</p>
        </motion.div>

        {/* Main review */}
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-12"
          >
            Client Stories
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote size={40} className="mx-auto mb-8 text-white/10" />
              <p className="text-[clamp(20px,3vw,30px)] font-syne leading-relaxed text-white/85 mb-10">
                &quot;{t.review}&quot;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-syne font-bold text-sm"
                  style={{ background: `${t.color}25`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div className="text-left">
                  <p className="font-syne font-bold text-white">{t.name}</p>
                  <p className="text-white/65 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA Button */}
          <div className="mt-12 flex items-center justify-center">
            <a
              href="/contact-us"
              className="px-6 py-3 rounded-lg bg-[#6c63ff] text-white font-syne font-bold hover:bg-[#5a5acc] transition-all"
            >
              Share Your Experience →
            </a>
          </div>
          {/* Navigation hidden for single testimonial */}
          <div className="flex items-center justify-center gap-4 mt-12 hidden">
            <button
              onClick={prev}
              aria-label="Show previous testimonial"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === idx ? 'true' : undefined}
                  className={`transition-all duration-200 rounded-full ${
                    i === idx ? 'w-6 h-2 bg-[#6c63ff]' : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Show next testimonial"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
