'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const CinematicLoader = dynamic(() => import('@/components/ui/CinematicLoader'), { ssr: false })
const ParticleCanvas = dynamic(() => import('@/components/ui/ParticleCanvas'), { ssr: false })

export default function HomeClient() {
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktopPointer = window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches
    setShowLoader(desktopPointer && !reduceMotion)
  }, [])

  return (
    <>
      {showLoader && <CinematicLoader onComplete={() => setShowLoader(false)} />}
      <ParticleCanvas />
    </>
  )
}
