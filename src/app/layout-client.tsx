'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'

// Defer heavy client components
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), {
  loading: () => null,
  ssr: false,
})

const GlobalAIChatWidget = dynamic(() => import('@/components/ui/GlobalAIChatWidget'), {
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
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      {children}
      <Suspense fallback={null}>
        <GlobalAIChatWidget />
      </Suspense>
    </>
  )
}
