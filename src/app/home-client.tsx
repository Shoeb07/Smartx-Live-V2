'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const CinematicLoader = dynamic(() => import('@/components/ui/CinematicLoader'), { ssr: false })
const ParticleCanvas = dynamic(() => import('@/components/ui/ParticleCanvas'), { ssr: false })

export default function HomeClient() {
  const [showLoader, setShowLoader] = useState(false)

  const resetToHero = () => {
    if (window.location.hash && window.location.hash !== '#top') return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    if (window.location.hash && window.location.hash !== '#top') return

    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    resetScroll()
    requestAnimationFrame(resetScroll)
    const shortReset = window.setTimeout(resetScroll, 120)
    const finalReset = window.setTimeout(resetScroll, 600)
    const restorationGuard = window.setInterval(resetScroll, 250)
    const stopGuard = window.setTimeout(() => window.clearInterval(restorationGuard), 3000)
    window.addEventListener('pageshow', resetScroll)
    window.addEventListener('load', resetScroll)

    return () => {
      window.clearTimeout(shortReset)
      window.clearTimeout(finalReset)
      window.clearTimeout(stopGuard)
      window.clearInterval(restorationGuard)
      window.removeEventListener('pageshow', resetScroll)
      window.removeEventListener('load', resetScroll)
    }
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktopPointer = window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches
    const visualQa = new URLSearchParams(window.location.search).has('visual-qa')
    setShowLoader(desktopPointer && !reduceMotion && !visualQa)
  }, [])

  return (
    <>
      {showLoader && <CinematicLoader onComplete={() => {
        resetToHero()
        setShowLoader(false)
        requestAnimationFrame(resetToHero)
      }} />}
      <ParticleCanvas />
    </>
  )
}
