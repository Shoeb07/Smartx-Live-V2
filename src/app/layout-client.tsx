'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import SiteMotionEnhancer from '@/components/ui/SiteMotionEnhancer'

// Defer heavy client components
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), {
  loading: () => null,
  ssr: false,
})

const GlobalAIChatWidget = dynamic(() => import('@/components/ui/GlobalAIChatWidget'), {
  loading: () => null,
  ssr: false,
})

const WhatsAppWidget = dynamic(() => import('@/components/ui/WhatsAppWidget'), {
  loading: () => null,
  ssr: false,
})

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GoogleAnalytics />
      <SiteMotionEnhancer />
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      {children}
      <Suspense fallback={null}>
        <GlobalAIChatWidget />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppWidget />
      </Suspense>
    </>
  )
}
