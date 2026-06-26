import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowUpRight, CalendarDays, Clock, CheckCircle2 } from 'lucide-react'
import { absoluteUrl, faqSchema } from '@/lib/seo'
import type { BlogPost } from '@/lib/blog-posts'

type BlogPostViewProps = {
  post: BlogPost
}

export default function BlogPostView({ post }: BlogPostViewProps) {
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: absoluteUrl('/og-image.png'),
    url: absoluteUrl(`/${post.slug}`),
    author: {
      '@type': 'Organization',
      name: 'SmartX Solutions',
      url: absoluteUrl('/'),
    },
    publisher: {
      '@type': 'Organization',
      name: 'SmartX Solutions',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/favicon_io/android-chrome-512x512.png'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/${post.slug}`),
    },
  }

  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
      { '@type': 'ListItem', position: 3, name: post.title, item: absoluteUrl(`/${post.slug}`) },
    ],
  }

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faqs)) }}
      />
      <main className="relative overflow-hidden bg-[#050508] text-white pt-28 pb-24">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/55">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white/75">{post.keyword}</span>
          </nav>

          <header className="pb-12 border-b border-white/[0.08]">
            <p className="text-[#00e5b0] text-sm font-dm uppercase tracking-widest mb-4">
              {post.keyword}
            </p>
            <h1 className="font-syne font-bold text-[clamp(40px,7vw,78px)] leading-[1.03] max-w-5xl mb-6">
              {post.title}
            </h1>
            <p className="text-white/68 text-lg md:text-xl leading-relaxed max-w-3xl">
              {post.intro}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={15} className="text-[#6c63ff]" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={15} className="text-[#6c63ff]" />
                {post.readTime}
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 mt-12 items-start">
            <article className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.h2}>
                  <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-5">
                    {section.h2}
                  </h2>
                  <div className="space-y-5">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-white/64 text-base md:text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="pt-4">
                <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-5">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
                      <h3 className="font-syne font-bold text-lg mb-2">{faq.question}</h3>
                      <p className="text-white/62 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <aside className="lg:sticky lg:top-28 rounded-2xl border border-white/[0.09] bg-[rgba(13,13,20,0.85)] p-5">
              <h2 className="font-syne font-bold text-lg mb-4">Related Pages</h2>
              <ul className="space-y-2">
                {post.related.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-start gap-3 rounded-xl px-3 py-3 text-sm text-white/62 hover:bg-white/[0.04] hover:text-white transition-all"
                    >
                      <CheckCircle2 size={15} className="text-[#00e5b0] mt-0.5 shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact-us"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6c63ff] px-5 py-3 text-sm font-medium text-white hover:bg-[#5a52e0] transition-all"
              >
                Start a Project
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
