'use client'

import { useEffect, useRef } from 'react'

export default function SiteMotionEnhancer() {
  const progressRef = useRef<HTMLDivElement>(null)
  const auraRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    let frame = 0
    let pointerFrame = 0

    const updateProgress = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const available = document.documentElement.scrollHeight - window.innerHeight
        const progress = available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0
        progressRef.current?.style.setProperty('--sx-scroll-progress', String(progress))
      })
    }

    const updateAura = (event: PointerEvent) => {
      if (!finePointer || reduceMotion || !auraRef.current) return
      const x = event.clientX
      const y = event.clientY
      cancelAnimationFrame(pointerFrame)
      pointerFrame = requestAnimationFrame(() => {
        auraRef.current?.style.setProperty('--sx-pointer-x', `${x}px`)
        auraRef.current?.style.setProperty('--sx-pointer-y', `${y}px`)
      })
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })
    window.addEventListener('pointermove', updateAura, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(pointerFrame)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      window.removeEventListener('pointermove', updateAura)
    }
  }, [])

  return (
    <>
      <div ref={progressRef} className="sx-scroll-progress" aria-hidden="true" />
      <div ref={auraRef} className="sx-pointer-aura" aria-hidden="true" />
    </>
  )
}
