'use client'

import { Phone, MessageCircle, Mail } from 'lucide-react'
import { trackWhatsAppClick, trackPhoneClick, trackEmailClick } from '@/lib/analytics'

interface ContactBandProps {
  source?: string
}

export default function ContactBand({ source = 'unknown' }: ContactBandProps) {
  return (
    <div className="mt-8 mb-14 pt-8 border-t border-white/[0.07]">
      <p className="text-white/45 text-xs uppercase tracking-widest mb-4">Quick contact</p>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://wa.me/919346754163"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick(source)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#25d366]/30 text-[#25d366] text-sm hover:bg-[#25d366]/10 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={14} />
          WhatsApp
        </a>
        <a
          href="tel:+919346754163"
          onClick={() => trackPhoneClick(source)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/65 text-sm hover:border-white/30 hover:text-white transition-all"
          aria-label="Call +91 93467 54163"
        >
          <Phone size={14} />
          +91 93467 54163
        </a>
        <a
          href="mailto:business@smartxsolutions.in"
          onClick={() => trackEmailClick(source)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/65 text-sm hover:border-white/30 hover:text-white transition-all"
          aria-label="Email business@smartxsolutions.in"
        >
          <Mail size={14} />
          business@smartxsolutions.in
        </a>
      </div>
    </div>
  )
}
