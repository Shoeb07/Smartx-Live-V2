'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const AIChatWidget = dynamic(() => import('@/components/ui/AIChatWidget'), { ssr: false })

export default function GlobalAIChatWidget() {
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    const loadChat = () => setShowChat(true)
    const browserWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number
      cancelIdleCallback?: (handle: number) => void
    }

    const idleId = browserWindow.requestIdleCallback
      ? browserWindow.requestIdleCallback(loadChat, { timeout: 4500 })
      : window.setTimeout(loadChat, 3500)

    return () => {
      if (browserWindow.cancelIdleCallback) {
        browserWindow.cancelIdleCallback(idleId)
      } else {
        window.clearTimeout(idleId)
      }
    }
  }, [])

  return showChat ? <AIChatWidget /> : null
}
