import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'
import { seoPages } from '@/lib/seo-pages'

const page = seoPages.portfolio

export const metadata: Metadata = buildMetadata(page)

/*
  HOW TO ADD REAL IMAGES:

  1. Create folder: public/case-studies/
  2. For each project add:
     public/case-studies/ag-traders/thumbnail.png        (800×500)
     public/case-studies/ag-traders/hero.png             (1200×600)
     public/case-studies/ag-traders/screenshot-1.png     (1200×675)
     public/case-studies/ag-traders/screenshot-2.png     (1200×675)

  3. Replace placeholder divs with:
     <Image src="/case-studies/ag-traders/thumbnail.png"
            alt="AG Traders website"
            width={800} height={500}
            className="w-full h-48 object-cover rounded-xl mb-5" />

  Same pattern for furnexo/ and one-stop-dashboard/
*/

type Project = {
  name: string
  slug: string
  href: string | null
  industry: string
  description: string
  techStack: string[]
  timeline: string
  status: 'Live' | 'In Development'
  accentColor: string
}

const projects: Project[] = [
  {
    name: 'AG Traders',
    slug: 'ag-traders',
    href: '/portfolio/ag-traders',
    industry: 'Manufacturing · B2B',
    description:
      'Fast, SEO-optimised manufacturer website that got a Palghar fencing wire supplier ranking on Google page 1 within 6 weeks of launch.',
    techStack: ['Next.js', 'Tailwind CSS', 'Vercel', 'SEO'],
    timeline: '4 weeks',
    status: 'Live',
    accentColor: '#6c63ff',
  },
  {
    name: 'FurneXo',
    slug: 'furnexo',
    href: '/portfolio/furnexo',
    industry: 'E-Commerce · Marketplace',
    description:
      "India's first dedicated furniture exchange and resale marketplace — two-sided platform with escrow payments, image-heavy listings, and location-based discovery.",
    techStack: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
    timeline: '14 weeks',
    status: 'Live',
    accentColor: '#00e5b0',
  },
  {
    name: 'MANT Talent Solutions',
    slug: 'mant-talent',
    href: '/portfolio/mant-talent',
    industry: 'Staffing Agency - Marketing Website',
    description:
      'A conversion-focused website for a US non-IT staffing agency - built to capture enterprise leads across 13 industries and 50 states.',
    techStack: ['Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    timeline: '5 weeks',
    status: 'Live',
    accentColor: '#6c63ff',
  },
  {
    name: 'One Stop Dashboard',
    slug: 'one-stop-dashboard',
    href: '/portfolio/one-stop-dashboard',
    industry: 'SaaS · Enterprise Software',
    description:
      'ERP platform that replaced spreadsheets, WhatsApp threads, and manual month-end reporting with a single real-time operations dashboard.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    timeline: '16 weeks',
    status: 'Live',
    accentColor: '#ff5e62',
  },
  {
    name: 'Scholarship App',
    slug: 'scholarship-app',
    href: null,
    industry: 'EdTech',
    description:
      'Mobile application helping students discover, apply for, and track scholarship opportunities across India — with document management and status tracking.',
    techStack: ['Flutter', 'Firebase', 'Node.js'],
    timeline: 'In Progress',
    status: 'In Development',
    accentColor: '#f59e0b',
  },
  {
    name: "Attractions Men's Studio",
    slug: 'attractions-mens-studio',
    href: null,
    industry: 'Brand Website',
    description:
      "Brand website for a premium men's grooming studio — showcasing services, team, and enabling appointment bookings with a mobile-first responsive design.",
    techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    timeline: '3 weeks',
    status: 'Live',
    accentColor: '#a78bfa',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-[#050508] text-white pt-28 pb-24">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none bg-gradient-to-b from-[#6c63ff]/18 via-[#050508]/40 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">

          {/* Header */}
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/45">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">Portfolio</span>
          </nav>

          <div className="pb-14 border-b border-white/[0.07]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#6c63ff]/25 bg-[#6c63ff]/10 px-4 py-1.5">
              <span className="text-[#9ff8df] text-[11px] font-dm uppercase tracking-[0.16em]">
                Portfolio
              </span>
            </div>
            <h1 className="font-syne font-bold text-[clamp(38px,6vw,72px)] leading-[1.02] max-w-5xl mb-6">
              Our Portfolio — Custom Software Projects by SmartX Solutions
            </h1>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-3xl">
              A selection of projects across manufacturing, e-commerce, SaaS, and EdTech — each solving a real business problem with thoughtful engineering and design.
            </p>
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group rounded-2xl border border-white/[0.08] bg-[#0d0d14] p-5 hover:border-white/[0.16] transition-all flex flex-col"
              >
                {/* Thumbnail placeholder */}
                <div
                  className="w-full h-48 rounded-xl mb-5 flex items-center justify-center overflow-hidden flex-shrink-0"
                  style={{
                    background: `${project.accentColor}10`,
                    border: `1px solid ${project.accentColor}20`,
                  }}
                >
                  <div className="text-center">
                    <div
                      className="w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center font-syne font-bold text-lg"
                      style={{
                        background: `${project.accentColor}20`,
                        color: project.accentColor,
                      }}
                    >
                      {project.name.charAt(0)}
                    </div>
                    <p className="text-white/20 text-xs">{project.name}</p>
                  </div>
                </div>

                {/* Industry + status */}
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <span
                    className="text-[10px] uppercase tracking-widest font-medium"
                    style={{ color: project.accentColor }}
                  >
                    {project.industry}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-medium"
                    style={{
                      background: project.status === 'Live' ? 'rgba(0,229,176,0.12)' : 'rgba(245,158,11,0.12)',
                      color: project.status === 'Live' ? '#00e5b0' : '#f59e0b',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: project.status === 'Live' ? '#00e5b0' : '#f59e0b',
                      }}
                    />
                    {project.status}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-lg leading-snug mb-2">{project.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-white/55"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Timeline */}
                <p className="text-white/30 text-[11px] mb-4">
                  Timeline: {project.timeline}
                </p>

                {/* CTA */}
                {project.href ? (
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors mt-auto"
                    style={{ color: project.accentColor }}
                  >
                    View Case Study
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ) : (
                  <span className="text-white/25 text-sm mt-auto">Case study coming soon</span>
                )}
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 pt-12 border-t border-white/[0.07] text-center">
            <p className="text-[#6c63ff] text-[11px] uppercase tracking-[0.14em] mb-4">
              Work With SmartX
            </p>
            <h2 className="font-syne font-bold text-[clamp(28px,4vw,44px)] leading-tight mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto">
              We work with founders, product teams, and enterprises to build digital products that perform.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 rounded-full bg-[#6c63ff] px-7 py-3.5 text-sm font-medium text-white hover:bg-[#5a52e0] transition-all"
              >
                Start a Project
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/portfolio/ag-traders"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/70 hover:border-white/25 hover:text-white transition-all"
              >
                <CheckCircle2 size={14} className="text-[#00e5b0]" />
                Read Case Studies
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
