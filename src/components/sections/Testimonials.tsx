'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const commitments = [
  { label: 'Response within 24 hours', detail: 'Every enquiry reviewed and answered' },
  { label: 'Free discovery consultation', detail: 'No commitment required to start' },
  { label: 'Built in Hyderabad', detail: 'Available for in-person meetings' },
  { label: 'Post-launch support', detail: 'Long-term partner, not one-time vendor' },
]

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-white/60 text-base">Trusted by businesses across India</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-12"
          >
            Our Commitment
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Quote size={40} className="mx-auto mb-8 text-white/10" />
            <p className="text-[clamp(18px,2.5vw,26px)] font-syne leading-relaxed text-white/85">
              We build products that work, not portfolios that look impressive. Every client gets direct access to the team doing the work.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
            {commitments.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 text-center"
              >
                <p className="font-syne font-semibold text-white text-sm mb-1">{item.label}</p>
                <p className="text-white/50 text-xs leading-snug">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <a
              href="/contact-us"
              className="px-6 py-3 rounded-lg bg-[#6c63ff] text-white font-syne font-bold hover:bg-[#5a5acc] transition-all"
            >
              Start a Conversation →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
