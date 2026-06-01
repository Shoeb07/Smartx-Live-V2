import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowUpRight } from 'lucide-react'
import { absoluteUrl } from '@/lib/seo'
import { blogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog - SmartX Solutions',
  description:
    'SmartX Solutions blog posts about software development, custom web applications, IT services, product development, and digital innovation.',
  alternates: { canonical: absoluteUrl('/blog') },
  openGraph: {
    title: 'Blog - SmartX Solutions',
    description:
      'Guides from SmartX Solutions on software development, IT services, product development, and digital innovation.',
    url: absoluteUrl('/blog'),
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - SmartX Solutions',
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
            Practical guides for businesses comparing software development companies, IT services partners, product development teams, and digital innovation agencies.
          </p>

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
        </div>
      </main>
      <Footer />
    </>
  )
}
