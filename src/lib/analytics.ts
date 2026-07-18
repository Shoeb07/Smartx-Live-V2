import { trackEvent } from '@/components/analytics/GoogleAnalytics'

/**
 * Track WhatsApp contact clicks
 */
export function trackWhatsAppClick(source: string = 'unknown') {
  trackEvent('whatsapp_click', {
    source,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track phone call initiation
 */
export function trackPhoneClick(source: string = 'unknown') {
  trackEvent('phone_click', {
    source,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track email contact
 */
export function trackEmailClick(source: string = 'unknown') {
  trackEvent('email_click', {
    source,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track contact form submission
 */
export function trackFormSubmit(formName: string, status: 'success' | 'error') {
  trackEvent('form_submit', {
    form_name: formName,
    status,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track service page view
 */
export function trackServiceView(serviceName: string, servicePath: string) {
  trackEvent('service_view', {
    service_name: serviceName,
    service_path: servicePath,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track blog post view
 */
export function trackBlogView(postTitle: string, postSlug: string) {
  trackEvent('blog_view', {
    post_title: postTitle,
    post_slug: postSlug,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track CTA button click
 */
export function trackCTAClick(ctaLabel: string, ctaLocation: string) {
  trackEvent('cta_click', {
    cta_label: ctaLabel,
    cta_location: ctaLocation,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track FAQ expand
 */
export function trackFAQExpand(question: string) {
  trackEvent('faq_expand', {
    question,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track lead generation (key event for GA4)
 */
export function trackLead(source: string, medium: string = 'organic') {
  trackEvent('generate_lead', {
    source,
    medium,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track when a user first interacts with a form (GA4 form_start)
 */
export function trackFormStart(formName: string = 'contact') {
  trackEvent('form_start', {
    form_name: formName,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track consultation booking intent
 */
export function trackBookCall(source: string = 'unknown') {
  trackEvent('book_call', {
    source,
    timestamp: new Date().toISOString(),
  })
}
