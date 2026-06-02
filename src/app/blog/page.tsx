import type { Metadata } from 'next'
import Link from 'next/link'
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
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Blog - Guides & Resources',
    description:
      'Guides from SmartX Solutions on software development, IT services, product development, and digital innovation.',
  },
}

export default function BlogPage() {
  return (
    <>
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
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
