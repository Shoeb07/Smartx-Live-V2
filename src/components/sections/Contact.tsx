'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Send, Phone, MessageCircle, CheckCircle } from 'lucide-react'
import { trackFormStart, trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics'
import { trackEvent } from '@/components/analytics/GoogleAnalytics'

const PROJECT_TYPES = [
  { value: '', label: 'Select project type' },
  { value: 'web_application', label: 'Web application / portal' },
  { value: 'mobile_app', label: 'Mobile app (iOS/Android)' },
  { value: 'custom_software', label: 'Custom software / SaaS' },
  { value: 'ai_automation', label: 'AI automation' },
  { value: 'digital_marketing', label: 'Digital marketing / SEO' },
  { value: 'other', label: 'Other' },
]

const BUDGET_RANGES = [
  { value: '', label: 'Select approximate budget' },
  { value: 'under_2_5l', label: 'Under ₹2,50,000' },
  { value: '2_5l_to_8l', label: '₹2,50,000 – ₹8,00,000' },
  { value: '8l_to_25l', label: '₹8,00,000 – ₹25,00,000' },
  { value: 'above_25l', label: '₹25,00,000+' },
  { value: 'not_sure', label: 'Not sure yet' },
]

const CONTACT_METHODS = [
  { value: 'email', label: 'Email' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'phone_call', label: 'Phone call' },
  { value: 'video_call', label: 'Video call' },
]

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#6c63ff] focus:outline-none transition-colors'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    preferredContact: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const formStarted = useRef(false)

  const handleFormStart = () => {
    if (!formStarted.current) {
      formStarted.current = true
      trackFormStart('contact_form')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    if (honeypot) return // silently discard bot submissions
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '217ec2ff-d20d-48f5-b309-06deccdb02a1',
          _honeypot: honeypot,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          project_type: formData.projectType,
          budget: formData.budget,
          preferred_contact: formData.preferredContact,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        // generate_lead fires only on confirmed submission — no PII sent to GA4
        trackEvent('generate_lead', {
          form_name: 'contact_form',
          project_type: formData.projectType || 'unspecified',
          page_path: typeof window !== 'undefined' ? window.location.pathname : '/',
        })
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
          preferredContact: '',
        })
      } else {
        setError('Something went wrong. Please try again or contact us at business@smartxsolutions.in.')
      }
    } catch {
      setError('Unable to send your message. Please email us at business@smartxsolutions.in.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-[#050508]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[#00e5b0]/20 bg-[#00e5b0]/5 p-12"
          >
            <CheckCircle className="w-16 h-16 text-[#00e5b0] mx-auto mb-6" />
            <h2 className="font-syne font-bold text-3xl mb-4">Message Received</h2>
            <p className="text-white/65 text-lg mb-8 max-w-xl mx-auto">
              Thank you for reaching out. We review every enquiry and will respond within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-full border border-white/15 text-white/70 text-sm hover:border-white/30 hover:text-white transition-all"
            >
              Send another message
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-[#050508]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-4">
            Get In Touch
          </p>
          <h2 className="font-syne font-bold text-[clamp(32px,5vw,56px)] leading-tight mb-6">
            Ready to Start Your
            <span className="text-gradient-accent"> Project?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Tell us about your project. We respond to every enquiry within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
          onFocus={handleFormStart}
          className="space-y-5"
          noValidate
        >
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-white/75 text-sm font-medium mb-2">
                Name <span className="text-[#6c63ff]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white/75 text-sm font-medium mb-2">
                Business Email <span className="text-[#6c63ff]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className={inputClass}
                placeholder="you@company.com"
              />
            </div>
          </div>

          {/* Row 2: Phone + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-white/75 text-sm font-medium mb-2">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                className={inputClass}
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-white/75 text-sm font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
                className={inputClass}
                placeholder="Your company (optional)"
              />
            </div>
          </div>

          {/* Row 3: Project type + Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="projectType" className="block text-white/75 text-sm font-medium mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`${inputClass} appearance-none`}
              >
                {PROJECT_TYPES.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#0d0d14]">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-white/75 text-sm font-medium mb-2">
                Approximate Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`${inputClass} appearance-none`}
              >
                {BUDGET_RANGES.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#0d0d14]">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project description */}
          <div>
            <label htmlFor="message" className="block text-white/75 text-sm font-medium mb-2">
              Project Description <span className="text-[#6c63ff]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClass} resize-none`}
              placeholder="Describe your project, the problem you want to solve, and your timeline..."
            />
          </div>

          {/* Preferred contact method */}
          <fieldset>
            <legend className="text-white/75 text-sm font-medium mb-3">
              Preferred Contact Method
            </legend>
            <div className="flex flex-wrap gap-4">
              {CONTACT_METHODS.map((method) => (
                <label key={method.value} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method.value}
                    checked={formData.preferredContact === method.value}
                    onChange={handleChange}
                    className="accent-[#6c63ff]"
                  />
                  <span className="text-white/65 text-sm group-hover:text-white transition-colors">
                    {method.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Honeypot — off-screen input that DOM-scraping bots fill; humans never see it */}
          <input
            type="text"
            name="_honeypot"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            aria-hidden="true"
            autoComplete="off"
            style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}
          />

          {/* Error message */}
          {error && (
            <div role="alert" className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Submit row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6c63ff] text-white font-medium text-[15px] hover:bg-[#5a52e0] disabled:opacity-60 disabled:cursor-not-allowed transition-all group"
            >
              {isSubmitting ? (
                <>
                  <span
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                    aria-hidden="true"
                  />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </>
              )}
            </button>
            <p className="text-white/35 text-xs">We respond within 24 hours. No commitment required.</p>
          </div>
        </motion.form>

        {/* Alternative contact channels */}
        <div className="mt-12 pt-10 border-t border-white/[0.07]">
          <p className="text-center text-white/50 text-sm mb-6">Prefer a faster response?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919346754163"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('contact_form')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#25d366]/30 text-[#25d366] text-sm font-medium hover:bg-[#25d366]/10 transition-all"
              aria-label="Chat with SmartX Solutions on WhatsApp"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919346754163"
              onClick={() => trackPhoneClick('contact_form')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/65 text-sm font-medium hover:border-white/30 hover:text-white transition-all"
              aria-label="Call SmartX Solutions"
            >
              <Phone size={15} />
              +91 93467 54163
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
