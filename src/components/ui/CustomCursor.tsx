'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)
  const [mounted, setMounted] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    setMounted(true)
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(finePointer && !reduceMotion)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
      setVisible(true)
    }

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    const isInteractive = (target: EventTarget | null) => {
      return target instanceof Element && Boolean(target.closest('a, button, [data-magnetic]'))
    }

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) setHovered(true)
    }

    const onOut = (e: MouseEvent) => {
      if (!isInteractive(e.relatedTarget)) setHovered(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf.current)
    }
  }, [enabled])

  if (!mounted || !enabled) return null

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-150"
        style={{
          width: hovered ? '6px' : '8px',
          height: hovered ? '6px' : '8px',
          background: hovered ? '#fff' : '#00e5b0',
          opacity: visible ? 1 : 0,
          mixBlendMode: 'screen',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200"
        style={{
          width: hovered ? '52px' : '38px',
          height: hovered ? '52px' : '38px',
          borderColor: hovered ? 'rgba(255,255,255,0.35)' : 'rgba(108,99,255,0.4)',
          opacity: visible ? 1 : 0,
          background: hovered ? 'rgba(108,99,255,0.05)' : 'transparent',
        }}
      />
    </>
  )
}
