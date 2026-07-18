'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { trackEvent } from './GoogleAnalytics'

type LeadEventLabel = 'whatsapp_click' | 'phone_click'

interface TrackedLeadLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventLabel: LeadEventLabel
  source?: string
  children: ReactNode
}

export default function TrackedLeadLink({
  eventLabel,
  source = 'unknown',
  onClick,
  children,
  ...props
}: TrackedLeadLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        // Fire the specific click event, not generate_lead
        // generate_lead is reserved for confirmed form submissions only
        trackEvent(eventLabel, {
          source,
          page_path: typeof window !== 'undefined' ? window.location.pathname : '/',
        })
        onClick?.(event)
      }}
    >
      {children}
    </a>
  )
}
