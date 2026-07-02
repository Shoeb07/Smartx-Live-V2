import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowUpRight } from 'lucide-react'
import { absoluteUrl } from '@/lib/seo'
import { blogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Software Development Blog - Guides & Resources',
  description:
    'SmartX Solutions blog posts about software development, custom web applications, IT services, product development, and digital innovation.',
  alternates: { canonical: absoluteUrl('/blog') },
  openGraph: {
    title: 'Software Development Blog - Guides & Resources',
    description:
      'Guides from SmartX Solutions on software development, IT services, product development, and digital innovation.',
    url: absoluteUrl('/blog'),
    siteName: 'SmartX Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SmartX Solutions Blog - Software Development Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Blog - Guides & Resources',
    description:
      'Guides from SmartX Solutions on software development, IT services, product development, and digital innovation.',
    images: ['/og-image.png'],
  },
}

export default function BlogPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="bg-[#050508] text-white pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#00e5b0] text-sm font-dm uppercase tracking-widest mb-4">Blog</p>
          <h1 className="font-syne font-bold text-[clamp(42px,7vw,80px)] leading-tight mb-6">
            SmartX Growth Guides
          </h1>
          <p className="text-white/65 text-lg max-w-3xl leading-relaxed mb-12">
            Practical guides for businesses comparing software development companies, IT services partners, product development teams, and digital innovation agencies. Our blog helps founders, operations leaders, and technology decision-makers make informed choices about digital investments.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 mb-16 max-w-3xl">
            <h2 className="font-syne font-bold text-2xl mb-4">What You'll Learn</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Choosing technology partners, building products, and modernizing systems requires clear thinking. This blog provides research-backed guides that cut through marketing noise and deliver practical frameworks for evaluating partners, planning projects, and understanding digital capabilities that impact your business.
            </p>
            <ul className="space-y-3 text-white/65">
              <li className="flex items-start gap-3">
                <span className="text-[#00e5b0] mt-1">•</span>
                <span><strong>Vendor evaluation:</strong> How to assess software development companies, IT services partners, and digital agencies based on capability, communication, and fit.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00e5b0] mt-1">•</span>
                <span><strong>Product development:</strong> Best practices for planning, designing, and launching digital products that solve real problems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00e5b0] mt-1">•</span>
                <span><strong>Technology strategy:</strong> Understanding custom software, web development, mobile apps, AI automation, and cloud systems in practical business terms.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00e5b0] mt-1">•</span>
                <span><strong>Growth decisions:</strong> Connecting digital capability with business outcomes so your investment delivers measurable results.</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group rounded-2xl border border-white/[0.08] bg-[#0d0d14] p-6 hover:border-white/[0.16] transition-all">
                {post.image && (
                  <Link href={`/${post.slug}`} className="block mb-5 overflow-hidden rounded-xl border border-white/[0.06]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={315}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </Link>
                )}
                <p className="text-[#6c63ff] text-xs uppercase tracking-widest mb-3">{post.keyword}</p>
                <h2 className="font-syne font-bold text-xl mb-3 group-hover:text-[#a89eff] transition-colors">
                  <Link href={`/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-white/58 text-sm leading-relaxed mb-5">{post.description}</p>
                <Link
                  href={`/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  Read guide <ArrowUpRight size={14} />
                </Link>
              </article>
            ))}
          </div>

          <section className="mt-20 pt-16 border-t border-white/[0.08]">
            <h2 className="font-syne font-bold text-3xl mb-6">Why Smart Companies Read This Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-syne font-bold text-lg mb-3">Make Better Decisions</h3>
                <p className="text-white/65 leading-relaxed">
                  Technology decisions require judgment. Our guides provide frameworks for evaluating vendors, prioritizing features, and understanding tradeoffs so your choices align with business strategy.
                </p>
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg mb-3">Reduce Project Risk</h3>
                <p className="text-white/65 leading-relaxed">
                  Most software projects struggle from unclear requirements or poor vendor selection. These guides help you plan better, ask better questions, and create partnerships that deliver results.
                </p>
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg mb-3">Build Internal Capability</h3>
                <p className="text-white/65 leading-relaxed">
                  Whether you work with external teams or build in-house, understanding digital products, software development, and technology strategy improves decision-making at every level.
                </p>
              </div>
            </div>

            <div className="bg-[#6c63ff]/10 border border-[#6c63ff]/30 rounded-2xl p-8">
              <h3 className="font-syne font-bold text-xl mb-3">Need Help Planning a Technology Project?</h3>
              <p className="text-white/70 mb-6">
                Read the relevant guides in this blog, then reach out to discuss your specific situation. SmartX Solutions helps businesses plan, build, and launch digital products with confidence.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#6c63ff] text-white rounded-lg hover:bg-[#7d72ff] transition-colors"
              >
                Start a conversation <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-10 pt-10 border-t border-white/[0.08]">
              <h3 className="font-syne font-bold text-xl mb-5">Further Reading</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/best-software-development-companies-hyderabad"
                  className="group rounded-xl border border-white/[0.08] bg-[#0d0d14] p-5 hover:border-white/[0.16] transition-all"
                >
                  <p className="text-[#6c63ff] text-[10px] uppercase tracking-widest mb-2">Hyderabad Market</p>
                  <p className="font-syne font-bold text-base mb-1 group-hover:text-[#a89eff] transition-colors">
                    10 Best Software Development Companies in Hyderabad (2026)
                  </p>
                  <p className="text-white/45 text-sm">Honest comparison of top Hyderabad agencies for startups and SMEs.</p>
                </Link>
                <Link
                  href="/software-development-agency-vs-upwork"
                  className="group rounded-xl border border-white/[0.08] bg-[#0d0d14] p-5 hover:border-white/[0.16] transition-all"
                >
                  <p className="text-[#6c63ff] text-[10px] uppercase tracking-widest mb-2">Agency Comparison</p>
                  <p className="font-syne font-bold text-base mb-1 group-hover:text-[#a89eff] transition-colors">
                    Software Development Agency vs Upwork (2026)
                  </p>
                  <p className="text-white/45 text-sm">When to use Upwork and when to hire an agency — with real cost examples.</p>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
