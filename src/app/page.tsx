'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import Services from '@/components/sections/Services'
import WhyChooseSmartX from '@/components/sections/WhyChooseSmartX'
import Work from '@/components/sections/Work'
import Industries from '@/components/sections/Industries'
import Process from '@/components/sections/Process'
import About from '@/components/sections/About'
import FAQ from '@/components/sections/FAQ'
import Testimonials from '@/components/sections/Testimonials'
import Insights from '@/components/sections/Insights'
import CTABanner from '@/components/sections/CTABanner'
import Contact from '@/components/sections/Contact'
import Analytics from '@/components/ui/Analytics'

// Dynamic imports — these need browser APIs (canvas, mousemove)
const CinematicLoader = dynamic(() => import('@/components/ui/CinematicLoader'), { ssr: false })
const ParticleCanvas = dynamic(() => import('@/components/ui/ParticleCanvas'), { ssr: false })

export default function HomePage() {
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktopPointer = window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches
    setShowLoader(desktopPointer && !reduceMotion)
  }, [])

  return (
    <>
      {showLoader && <CinematicLoader onComplete={() => setShowLoader(false)} />}

      {/* Particle mesh background — fixed, behind everything */}
      <ParticleCanvas />

      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChooseSmartX />
        <Work />
        <Industries />
        <Process />
        <About />
        <FAQ />
        <Testimonials />
        <Insights />
        <CTABanner />
        <Contact />
      </main>

      <Footer />
      <Analytics />
    </>
  )
}
