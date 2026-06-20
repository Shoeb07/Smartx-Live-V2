'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'

type LeadEventLabel = 'whatsapp_click' | 'phone_click'

interface TrackedLeadLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventLabel: LeadEventLabel
  children: ReactNode
}

export default function TrackedLeadLink({
  eventLabel,
  onClick,
  children,
  ...props
}: TrackedLeadLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'generate_lead', {
            event_category: 'engagement',
            event_label: eventLabel,
            value: 1,
          })
        }

        onClick?.(event)
      }}
    >
      {children}
    </a>
  )
}
