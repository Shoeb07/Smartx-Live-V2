import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google'

// GA4 property: smartxsolutions — stream https://smartxsolutions.in
// Hardcoded on purpose: this is the production source of truth, so a stale
// NEXT_PUBLIC_GA_ID env var on the host can never point tracking at an old
// property. Measurement IDs are public (visible in page source) — not a secret.
export const GA_MEASUREMENT_ID = 'G-PWPMXDMSL5'

export function GoogleAnalytics() {
  // @next/third-parties handles SPA route-change page views and defines
  // window.gtag/dataLayer, which trackEvent and TrackedLeadLink rely on.
  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />
}

/**
 * Track custom events for conversions
 * Usage: trackEvent('contact_click', { service: 'web-development' })
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', eventName, eventParams)
  }
}

/**
 * Track page views
 * Usage: trackPageView('SaaS Development', '/services/saas-development-company-hyderabad')
 */
export function trackPageView(pageTitle: string, pagePath: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_title: pageTitle,
      page_path: pagePath,
    })
  }
}
