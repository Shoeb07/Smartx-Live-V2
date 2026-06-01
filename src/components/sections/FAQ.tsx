'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: 'What types of custom software development services do you offer?',
    answer: 'We offer comprehensive software development services including web app development, mobile app development for iOS and Android, SaaS development, cloud solutions, UI/UX design services, and digital transformation consulting. Our software engineering team specializes in building scalable software platforms for startups and enterprises.'
  },
  {
    question: 'How long does it take to develop a custom software solution?',
    answer: 'Development timelines vary based on project complexity and scope. Simple web applications may take 6-8 weeks, while complex enterprise software platforms typically require 12-16 weeks. We follow an agile development process with 2-week sprints, providing regular updates and the ability to adjust scope as needed.'
  },
  {
    question: 'Do you work with both startups and large enterprises?',
    answer: 'Yes, we work with businesses of all sizes. Our flexible engagement models and scalable software development approach make us suitable for early-stage startups needing MVP development as well as established enterprises requiring complex digital transformation projects.'
  },
  {
    question: 'What technologies and frameworks do you specialize in?',
    answer: 'Our software engineering team has expertise in modern web technologies, mobile development frameworks, cloud platforms, and AI/ML integration. We choose the best technology stack for each project based on your specific requirements and scalability needs.'
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Absolutely. We offer comprehensive post-launch support including maintenance, updates, performance monitoring, and growth consulting. Many of our clients continue working with us for ongoing development and feature enhancements.'
  },
  {
    question: 'How do you ensure the quality and security of the software you develop?',
    answer: 'We follow industry best practices with rigorous code reviews, automated testing, security audits, and performance benchmarking. Our security-first approach ensures compliance with standards like GDPR, HIPAA, and SOC2 for applicable projects.'
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-32 bg-[#050508]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-4"
          >
            Frequently Asked Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-bold text-[clamp(36px,5vw,56px)] leading-tight mb-6"
          >
            Everything You Need to Know About Our Software Development Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/55 leading-relaxed"
          >
            Get answers to common questions about our custom software development process, timelines, technologies, and partnership approach.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/[0.07] rounded-2xl bg-[#0d0d14] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors"
              >
                <h3 className="font-syne font-bold text-lg text-white pr-4">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp size={20} className="text-[#6c63ff] flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-white/40 flex-shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/50 mb-6">
            Still have questions about our software development services?
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6c63ff] text-white font-medium text-[15px] hover:bg-[#5a52e0] transition-all"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
