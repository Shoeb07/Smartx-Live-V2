'use client'

import { useState } from 'react'

const ACCESS_KEY = '217ec2ff-d20d-48f5-b309-06deccdb02a1'

export default function QuickContactForm({ source = 'quick_form' }: { source?: string }) {
  const [form, setForm] = useState({ name: '', requirement: '', whatsapp: '' })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New quick enquiry from ${form.name} — ${source}`,
          name: form.name,
          message: form.requirement,
          phone: form.whatsapp,
          from_page: source,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setDone(true)
      } else {
        setError('Something went wrong. Please try WhatsApp or email instead.')
      }
    } catch {
      setError('Could not submit. Please try WhatsApp or email instead.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-[#00e5b0]/25 bg-[#00e5b0]/[0.07] p-8 text-center">
        <p className="font-syne font-bold text-white text-lg mb-2">Got it — thank you!</p>
        <p className="text-white/60 text-sm">
          We&apos;ll review your requirement and reach out within 24 hours. If you need a faster
          response,{' '}
          <a
            href="https://wa.me/919100590377?text=Hi%20SmartX%2C%20I%27d%20like%20to%20discuss%20a%20software%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00e5b0] underline underline-offset-2"
          >
            message us on WhatsApp
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="qcf-name" className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">
          Your Name <span className="text-[#6c63ff]">*</span>
        </label>
        <input
          id="qcf-name"
          type="text"
          required
          minLength={2}
          placeholder="e.g. Rahul Sharma"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-white/25 focus:border-[#6c63ff] focus:outline-none transition-colors text-sm"
        />
      </div>
      <div>
        <label htmlFor="qcf-req" className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">
          Project Requirement <span className="text-[#6c63ff]">*</span>
        </label>
        <textarea
          id="qcf-req"
          required
          minLength={10}
          rows={3}
          placeholder="Briefly describe what you want to build…"
          value={form.requirement}
          onChange={(e) => setForm((p) => ({ ...p, requirement: e.target.value }))}
          className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-white/25 focus:border-[#6c63ff] focus:outline-none transition-colors text-sm resize-none"
        />
      </div>
      <div>
        <label htmlFor="qcf-wa" className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">
          WhatsApp Number <span className="text-[#6c63ff]">*</span>
        </label>
        <input
          id="qcf-wa"
          type="tel"
          required
          placeholder="+91 98765 43210"
          value={form.whatsapp}
          onChange={(e) => setForm((p) => ({ ...p, whatsapp: e.target.value }))}
          className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-white/25 focus:border-[#6c63ff] focus:outline-none transition-colors text-sm"
        />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 rounded-full bg-[#6c63ff] text-white font-medium text-sm hover:bg-[#5a52e0] disabled:opacity-60 transition-all"
      >
        {submitting ? 'Sending…' : 'Get a Free Estimate →'}
      </button>
      <p className="text-white/25 text-[11px] text-center">
        No spam · We respond within 24 hours
      </p>
    </form>
  )
}
