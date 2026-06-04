import Script from 'next/script'

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  if (!gaId) {
    return null
  }

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gaId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Google Analytics - Load after interaction for performance */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || []
            function gtag() {
              window.dataLayer.push(arguments)
            }
            gtag('js', new Date())
            gtag('config', gaId, {
              send_page_view: true,
              anonymize_ip: true,
            })
          }
        }}
      />
    </>
  )
}

/**
 * Track custom events for conversions
 * Usage: trackEvent('contact_click', { service: 'web-development' })
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

/**
 * Track page views
 * Usage: trackPageView('SaaS Development', '/services/saas-development-company-hyderabad')
 */
export function trackPageView(pageTitle: string, pagePath: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_title: pageTitle,
      page_path: pagePath,
    })
  }
}

// Declare global for TypeScript
declare global {
  interface Window {
    dataLayer: any[]
    gtag: Function
  }
}
