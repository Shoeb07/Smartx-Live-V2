import type { Metadata } from 'next'
import SeoLandingPage from '@/components/seo/SeoLandingPage'
import { buildMetadata } from '@/lib/seo'
import { seoPages } from '@/lib/seo-pages'

const page = seoPages['about-us']

export const metadata: Metadata = buildMetadata(page)

const linkedInSvg = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function AboutUsPage() {
  return (
    <SeoLandingPage page={page}>
      {/* Team section — injected before footer via children prop */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 py-16 border-t border-white/[0.07]">
        <p className="text-[#6c63ff] text-[11px] uppercase tracking-[0.12em] mb-4">Our Team</p>
        <h2 className="font-syne font-bold text-[clamp(28px,4vw,48px)] text-white mb-12">
          The People Behind SmartX
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {/* Shoeb Uddin */}
          <div className="p-7 rounded-2xl border border-white/[0.07] bg-[#0d0d14]">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-syne font-bold text-lg text-[#6c63ff] flex-shrink-0"
                style={{ background: 'rgba(108,99,255,0.15)', border: '2px solid rgba(108,99,255,0.25)' }}
              >
                SU
              </div>
              <div>
                <h3 className="font-syne font-bold text-white text-[16px]">Shoeb Uddin</h3>
                <p className="text-[#6c63ff] text-[12px]">Founder &amp; CEO</p>
              </div>
            </div>
            <p className="text-white/50 text-[13px] leading-relaxed">
              Leads product strategy, client relationships, and business development at SmartX Solutions.
              Passionate about helping startups and enterprises across India build world-class digital products.
            </p>
            <a
              href="https://www.linkedin.com/company/smartx-solutions-in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-[12px] text-[#6c63ff] hover:text-[#a89eff] transition-colors"
            >
              {linkedInSvg}
              Connect on LinkedIn
            </a>
          </div>

          {/* Saleha Begum */}
          <div className="p-7 rounded-2xl border border-white/[0.07] bg-[#0d0d14]">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-syne font-bold text-lg text-[#00e5b0] flex-shrink-0"
                style={{ background: 'rgba(0,229,176,0.12)', border: '2px solid rgba(0,229,176,0.25)' }}
              >
                SB
              </div>
              <div>
                <h3 className="font-syne font-bold text-white text-[16px]">Saleha Begum</h3>
                <p className="text-[#00e5b0] text-[12px]">Co-Founder &amp; CTO</p>
              </div>
            </div>
            <p className="text-white/50 text-[13px] leading-relaxed">
              Leads engineering and technical architecture at SmartX Solutions, overseeing delivery of
              web applications, mobile apps, SaaS platforms, and AI integrations for clients across India.
            </p>
            <a
              href="https://www.linkedin.com/company/smartx-solutions-in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-[12px] text-[#00e5b0] hover:text-[#a89eff] transition-colors"
            >
              {linkedInSvg}
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </SeoLandingPage>
  )
}
