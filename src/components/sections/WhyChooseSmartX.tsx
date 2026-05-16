'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Users, Trophy, Clock, Zap, Shield, Target, Heart } from 'lucide-react'

const advantages = [
  {
    icon: Users,
    title: 'Expert Software Engineering Team',
    description: 'Our senior-only team brings deep expertise in custom software development, ensuring enterprise-grade solutions that scale.',
  },
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description: '94% on-time delivery rate with 100% client satisfaction. We\'ve successfully delivered scalable software platforms for startups and enterprises.',
  },
  {
    icon: Target,
    title: 'End-to-End Development Services',
    description: 'From concept to deployment, we handle the complete software development lifecycle with our comprehensive web development services and mobile app development expertise.',
  },
  {
    icon: Clock,
    title: 'Agile Development Process',
    description: '2-week sprints with bi-weekly demos ensure transparency and allow you to see progress on your custom software development project regularly.',
  },
  {
    icon: Shield,
    title: 'Security-First Approach',
    description: 'Built-in security practices and compliance expertise protect your business data throughout the software development process.',
  },
  {
    icon: Heart,
    title: 'Dedicated Partnership',
    description: 'We become an extension of your team, providing ongoing support and growth consulting after your software solution launches.',
  },
]

export default function WhyChooseSmartX() {
  return (
    <section className="py-32 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-4"
          >
            Why Choose SmartX
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-bold text-[clamp(36px,5vw,64px)] leading-tight mb-6"
          >
            Leading Custom Software Development Company
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/55 leading-relaxed max-w-3xl mx-auto"
          >
            As Hyderabad's premier software development company, we combine technical excellence with business acumen to deliver scalable software platforms that drive real growth. Our comprehensive approach covers web development services, mobile app development, SaaS development, and digital transformation solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, i) => {
            const Icon = advantage.icon
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl border border-white/[0.07] bg-[#0d0d14] hover:border-white/15 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6c63ff]/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#6c63ff]" />
                </div>
                <h3 className="font-syne font-bold text-lg mb-3">{advantage.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{advantage.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 text-lg mb-6">
            Ready to transform your business with custom software development?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6c63ff] text-white font-medium text-[15px] hover:bg-[#5a52e0] transition-all"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}