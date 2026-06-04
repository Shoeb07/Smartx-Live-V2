# Google Analytics 4 Setup Guide

## ✅ Status
GA4 is now installed and tracking on all pages using **Google Tag Manager**.

### Key Details:
- **Measurement ID**: `G-WXM3QG52L8` (from `.env.local`)
- **Strategy**: `lazyOnload` - GA4 loads after page is interactive for better performance
- **Implementation**: Next.js `Script` component with proper Suspense boundaries

---

## How GA4 Is Installed

### 1. **Main Component** (`src/components/analytics/GoogleAnalytics.tsx`)
- Loads GTM container
- Fires on every page via layout-client
- Uses `lazyOnload` strategy (non-blocking)
- Includes noscript fallback for visitors without JS

### 2. **Layout Integration** (`src/app/layout-client.tsx`)
- GA4 component imported and rendered first
- Ensures tag fires before any user interactions
- Wrapped in Suspense for optimal performance

### 3. **Event Tracking** (`src/lib/analytics.ts`)
Helper functions for tracking conversions:
- `trackWhatsAppClick()` - WhatsApp contact clicks
- `trackPhoneClick()` - Phone call clicks
- `trackEmailClick()` - Email contact
- `trackFormSubmit()` - Form submissions
- `trackServiceView()` - Service page views
- `trackBlogView()` - Blog post views
- `trackCTAClick()` - CTA button clicks
- `trackLead()` - Lead generation (key event)

---

## How to Track Events

### WhatsApp Button with Tracking
```tsx
import WhatsAppButton from '@/app/services/saas-development-company-hyderabad/whatsapp-button'

export default function MyComponent() {
  return (
    <WhatsAppButton 
      source="my-page-hero"
      message="Hi, I'm interested in your services"
    />
  )
}
```

### Custom Event Tracking
```tsx
'use client'

import { trackCTAClick, trackLead } from '@/lib/analytics'

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // ... submit logic ...
    trackLead('contact_form', 'organic')
    trackCTAClick('Submit Contact', 'contact-page')
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

### Track Service Page Views
```tsx
'use client'

import { useEffect } from 'react'
import { trackServiceView } from '@/lib/analytics'

export default function WebDevelopmentPage() {
  useEffect(() => {
    trackServiceView('Web Development', '/web-development-services')
  }, [])

  return <div>...</div>
}
```

---

## Key Events to Track (Configured for GA4)

### 1. **Lead Generation** (Primary KPI)
- WhatsApp clicks
- Phone call clicks
- Contact form submissions
- Demo requests

### 2. **Engagement Metrics**
- Service page views (duration on page, scroll depth)
- Blog post views (reading time, completeness)
- FAQ expands (shows interest areas)
- CTA button clicks

### 3. **Conversion Funnels**
- Hero CTA → Service Page → Contact
- Blog Post → Related Service → Lead

---

## Verifying GA4 is Working

### 1. **Realtime Dashboard**
1. Go to Google Analytics 4
2. Click **Realtime** → **Real-time report**
3. Load your website
4. You should see:
   - Active users (1+)
   - Page view events
   - Custom events (WhatsApp clicks, etc.)

### 2. **Check Events**
1. Go to **Events** section
2. Look for:
   - `page_view` (standard)
   - `whatsapp_click` (custom)
   - `phone_click` (custom)
   - `cta_click` (custom)
   - `generate_lead` (custom - key event)

### 3. **Browser DevTools**
```js
// In browser console, you can manually fire events:
gtag('event', 'test_event', { test: true })
```

---

## Link GA4 to Google Search Console

**Why**: Combine organic keywords with on-site behavior

1. **In GA4**:
   - Admin → Property → Property Settings
   - Scroll to "Search Console"
   - Click "Link with Search Console"

2. **Search Console Integration**:
   - Shows which keywords drive clicks
   - Reveals pages with high impressions but low CTR
   - Guides SEO optimization priorities

---

## Conversion Events (Mark as Key Events)

Go to **GA4 Admin** → **Events** and mark these as **Key Events**:

✓ `generate_lead` - Contact form, WhatsApp, phone calls
✓ `form_submit` - Track form completions
✓ `service_view` - Track service page engagement

This makes them appear prominently in GA4 dashboards and reports.

---

## Performance Impact

✅ **No blocking**: GA4 uses `lazyOnload` strategy
✅ **No render delay**: Loads after page is interactive
✅ **Optimized**: ~70KB, gzipped and cached
✅ **Consent mode**: If you add a cookie banner, update consent before tracking

---

## Best Practices

1. **Track meaningful conversions only** - WhatsApp, phone, contact form
2. **Use consistent event names** - Avoid duplicates (already handled in tracking functions)
3. **Test in Realtime** - Verify events fire before going live
4. **Monitor bounce rate** - If GA4 bloats site speed, use `asyncScriptOnIdle` instead
5. **Regular audits** - Check for duplicate or missing events quarterly

---

## Troubleshooting

### "Events not appearing in realtime"
- Wait 5-10 minutes (initial delay is normal)
- Check that GA measurement ID matches in `.env.local`
- Verify `GoogleAnalytics` component is in `layout-client.tsx`

### "Events firing twice"
- Check for duplicate `<Script>` tags
- Ensure GA4 not loaded from multiple places

### "Search Console not connecting"
- GA4 property must be linked to the correct domain
- Search Console must already have your site verified

---

## Files Created/Modified

```
✅ src/components/analytics/GoogleAnalytics.tsx - GA4 integration
✅ src/lib/analytics.ts - Event tracking helpers
✅ src/app/layout-client.tsx - GA4 component loaded here
✅ src/app/services/saas-development-company-hyderabad/whatsapp-button.tsx - Tracking button
✅ .env.local - Contains NEXT_PUBLIC_GA_ID
```

---

## Next Steps

1. ✅ **Verify in GA4 Realtime** - Load your site and check for events
2. ⬜ **Link to Search Console** - Connect GA4 to GSC for keyword insights
3. ⬜ **Mark key events** - Set `generate_lead` as Key Event in GA4 admin
4. ⬜ **Add to other pages** - Use `trackServiceView()`, `trackBlogView()` on relevant pages
5. ⬜ **Create dashboard** - Build a custom dashboard for conversion tracking

---

**Questions?** Check GA4 Real-time report first - it's the best debugging tool!
