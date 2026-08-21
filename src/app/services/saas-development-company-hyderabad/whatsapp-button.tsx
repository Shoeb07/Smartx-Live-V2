'use client'

import { MessageCircle } from 'lucide-react'
import { trackWhatsAppClick, trackCTAClick } from '@/lib/analytics'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  source?: string
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function WhatsAppButton({
  phoneNumber = '919346754163',
  message = 'Hi, I would like to discuss a SaaS project',
  source = 'saas-page',
  className = '',
  variant = 'primary',
}: WhatsAppButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'whatsapp_click',
        value: 1
      })
    }

    trackWhatsAppClick(source)
    trackCTAClick('WhatsApp', source)
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const primaryClasses =
    'inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00e5b0] text-black font-dm font-bold rounded-lg hover:bg-[#00d99f] transition-all'
  const secondaryClasses =
    'inline-flex items-center justify-center gap-3 px-8 py-3 bg-black text-[#00e5b0] font-dm font-bold rounded-lg hover:bg-black/80 transition-all'

  const buttonClass = variant === 'primary' ? primaryClasses : secondaryClasses

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className || buttonClass}
    >
      <MessageCircle size={20} />
      {variant === 'primary' ? '+91 93467 54163' : 'WhatsApp'}
    </a>
  )
}
