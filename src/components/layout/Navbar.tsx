'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about-us' },
]

const serviceRoutes = [
  '/services',
  '/web-development-services',
  '/mobile-app-development',
  '/software-development-company',
  '/digital-marketing-services',
  '/ai-automation-services',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()
  const headerProgress = useSpring(scrollYProgress, { stiffness: 130, damping: 24, mass: 0.25 })
  const isActive = (href: string) => {
    if (href === '/services') return serviceRoutes.includes(pathname)
    if (href === '/blog') return pathname === '/blog' || pathname.startsWith('/blog/')
    return pathname === href
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
 
  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(5,5,8,0.85)] backdrop-blur-2xl border-b border-white/[0.06] py-4'
            : 'bg-transparent py-6'
        )}
      >
        <motion.div
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-[#6c63ff] via-[#00e5b0] to-[#6c63ff]"
          style={{ scaleX: headerProgress }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.035 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="SmartX Solutions homepage">
              <motion.div
                className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white font-syne font-bold text-sm overflow-hidden"
                animate={{ boxShadow: ['0 0 0 rgba(108,99,255,0)', '0 0 22px rgba(108,99,255,.38)', '0 0 0 rgba(108,99,255,0)'] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.span
                  className="absolute inset-y-0 w-5 -skew-x-12 bg-white/30 blur-sm"
                  animate={{ x: [-35, 55] }}
                  transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.5 }}
                />
                <span className="relative">SX</span>
              </motion.div>
              <span className="font-syne font-bold text-[18px] tracking-tight text-white">
                SmartX<span className="text-accent2">.</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.055, duration: 0.45 }}
                className="relative"
              >
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={cn(
                    'text-sm transition-colors duration-200 font-dm',
                    isActive(link.href) ? 'text-white' : 'text-white/60 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
                {isActive(link.href) && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#00e5b0] shadow-[0_0_10px_#00e5b0]"
                  />
                )}
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact-us"
              aria-current={pathname === '/contact-us' ? 'page' : undefined}
              className="px-5 py-2.5 rounded-full border border-white/10 text-sm text-white/70 hover:text-white hover:border-white/25 transition-all duration-200"
            >
              Contact
            </Link>
            <motion.div whileHover={{ scale: 1.045 }} whileTap={{ scale: 0.97 }} className="relative overflow-hidden rounded-full">
              <Link
                href="/contact-us"
                className="relative px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-all duration-200 flex items-center gap-1.5 overflow-hidden"
              >
                <motion.span
                  className="absolute inset-y-0 w-8 -skew-x-12 bg-white/25 blur-sm"
                  animate={{ x: [-55, 150] }}
                  transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2.8 }}
                />
                <span className="relative">Get Started</span>
                <ArrowUpRight size={14} className="relative" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="relative lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white overflow-hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#050508]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={cn(
                      'text-3xl font-syne font-bold hover:text-accent2 transition-colors',
                      isActive(link.href) ? 'text-accent2' : 'text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <Link
                  href="/contact-us"
                  onClick={() => setOpen(false)}
                  className="mt-4 px-8 py-3 rounded-full bg-accent text-white font-medium text-lg"
                >
                  Get Started
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
