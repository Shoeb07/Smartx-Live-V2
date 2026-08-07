import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TrackedLeadLink from '@/components/analytics/TrackedLeadLink'
import DirectAnswer from '@/components/ui/DirectAnswer'
import PeopleAlsoAsk from '@/components/ui/PeopleAlsoAsk'
import LastUpdated from '@/components/ui/LastUpdated'
import { ArrowUpRight, CalendarDays, Clock, CheckCircle2, ChevronLeft } from 'lucide-react'
import { absoluteUrl, faqSchema } from '@/lib/seo'
import { blogPosts, type BlogPost, type BlogSection } from '@/lib/blog-posts'

type BlogPostViewProps = {
  post: BlogPost
}

// Renders [label](/path) markdown-style links inside paragraph text.
// Internal paths use next/link; external URLs open in a new tab.
function RichText({ text }: { text: string }) {
  const linkPattern = /\[([^\]]+)\]\(([^)\s]+)\)/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const [full, label, href] = match
    const linkClass =
      'text-[#a89eff] underline underline-offset-2 decoration-[#6c63ff]/40 hover:text-white hover:decoration-white/60 transition-colors'
    parts.push(
      href.startsWith('/') ? (
        <Link key={match.index} href={href} className={linkClass}>
          {label}
        </Link>
      ) : (
        <a
          key={match.index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {label}
        </a>
      )
    )
    lastIndex = match.index + full.length
  }

  if (parts.length === 0) return <>{text}</>
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return <>{parts}</>
}

function SectionBlock({ section }: { section: BlogSection }) {
  return (
    <section>
      <h2 className="font-syne font-bold text-[clamp(26px,4vw,38px)] leading-tight mb-5">
        {section.h2}
      </h2>
      <div className="space-y-5">
        {section.body.map((paragraph, i) => (
          <p key={i} className="text-white/64 text-base md:text-lg leading-relaxed">
            <RichText text={paragraph} />
          </p>
        ))}
      </div>

      {section.table && (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full text-left text-sm">
            {section.table.caption && (
              <caption className="sr-only">{section.table.caption}</caption>
            )}
            <thead>
              <tr className="bg-white/[0.04]">
                {section.table.headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 font-syne font-bold text-white text-[13px] whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-white/[0.06]">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 text-white/60 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.quote && (
        <blockquote className="mt-6 rounded-2xl border-l-4 border-[#00e5b0] border-t border-r border-b border-white/[0.08] bg-[#00e5b0]/[0.04] p-6">
          <p className="text-white/75 text-base md:text-lg leading-relaxed italic mb-3">
            &ldquo;{section.quote.text}&rdquo;
          </p>
          <footer className="text-sm text-white/45">
            — <span className="text-white/70 font-medium">{section.quote.name}</span>, {section.quote.role}
          </footer>
        </blockquote>
      )}

      {section.checklist && (
        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0d0d14] p-6">
          <ul className="space-y-3">
            {section.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#00e5b0] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/65 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {section.h3s?.map((sub) => (
        <div key={sub.h3} className="mt-8">
          <h3 className="font-syne font-bold text-xl md:text-2xl mb-4">{sub.h3}</h3>
          <div className="space-y-4">
            {sub.body.map((paragraph, i) => (
              <p key={i} className="text-white/64 text-base md:text-lg leading-relaxed">
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
        </div>
      ))}

      {section.links && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {section.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm text-white/65 hover:text-white hover:border-white/[0.16] transition-all"
            >
              <ArrowUpRight
                size={15}
                className="text-[#00e5b0] mt-0.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      )}

      {section.inlineCta && (
        <div className="mt-8 p-8 rounded-2xl border border-[#00e5b0]/20 bg-[#00e5b0]/[0.05]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#00e5b0]/15 flex items-center justify-center flex-shrink-0">
              <span className="text-[#00e5b0] text-lg" aria-hidden="true">
                💡
              </span>
            </div>
            <div>
              <h3 className="font-syne font-bold text-white text-lg mb-2">
                {section.inlineCta.heading}
              </h3>
              <p className="text-white/55 text-sm mb-4 leading-relaxed">
                {section.inlineCta.body}
              </p>
              {section.inlineCta.whatsapp ? (
                <TrackedLeadLink
                  href={section.inlineCta.href}
                  eventLabel="whatsapp_click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium hover:opacity-90 transition-all"
                >
                  💬 {section.inlineCta.buttonLabel}
                </TrackedLeadLink>
              ) : (
                <Link
                  href={section.inlineCta.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6c63ff] text-white text-sm font-medium hover:bg-[#5a52e0] transition-all"
                >
                  {section.inlineCta.buttonLabel} →
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default function BlogPostView({ post }: BlogPostViewProps) {
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: absoluteUrl(post.image ?? '/og-image.png'),
    url: absoluteUrl(`/${post.slug}`),
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      url: post.author.url,
      sameAs: [
        post.author.linkedin,
        'https://www.smartxsolutions.in',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'SmartX Solutions',
        url: 'https://www.smartxsolutions.in',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'SmartX Solutions',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo.png'),
        width: 600,
        height: 60,
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
      {post.extraSchemas?.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
            {post.lastUpdated && (
              <div className="mt-5">
                <LastUpdated date={post.lastUpdated} />
              </div>
            )}

            {/* Author card */}
            <div className="flex items-center gap-4 mt-6 mb-0 pt-6 border-t border-white/[0.06]">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-syne font-bold text-sm flex-shrink-0"
                style={{
                  background: post.author.color + '30',
                  border: `2px solid ${post.author.color}40`,
                  color: post.author.color,
                }}
              >
                {post.author.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={post.author.url}
                    className="font-syne font-bold text-white text-[15px] hover:text-[#6c63ff] transition-colors"
                  >
                    {post.author.name}
                  </a>
                  <span className="text-white/20 text-xs">·</span>
                  <span className="text-white/40 text-[13px]">
                    {post.author.role}, SmartX Solutions
                  </span>
                </div>
                <p className="text-white/35 text-[12px] leading-relaxed mt-1 max-w-xl">
                  {post.author.bio}
                </p>
                <a
                  href={post.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-[11px] text-[#6c63ff] hover:text-[#a89eff] transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </header>

          {post.image && (
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                priority
                sizes="(max-width: 1024px) 100vw, 960px"
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 mt-12 items-start">
            <article className="space-y-10">
              {post.directAnswer && (
                <DirectAnswer
                  question={post.directAnswer.question}
                  answer={post.directAnswer.answer}
                  cite={post.directAnswer.cite}
                />
              )}

              {post.sections.map((section) => (
                <SectionBlock key={section.h2} section={section} />
              ))}

              {post.cta && (
                <div className="my-10 p-8 rounded-2xl border border-[#6c63ff]/25 bg-[#6c63ff]/[0.08] text-center">
                  <h3 className="font-syne font-bold text-xl text-white mb-3">
                    {post.cta.heading}
                  </h3>
                  <p className="text-white/55 mb-6 max-w-xl mx-auto">{post.cta.body}</p>
                  <Link
                    href={post.cta.href}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6c63ff] text-white font-medium hover:bg-[#5a52e0] transition-all"
                  >
                    {post.cta.buttonLabel} →
                  </Link>
                  {post.cta.note && (
                    <p className="text-white/30 text-xs mt-4">{post.cta.note}</p>
                  )}
                </div>
              )}

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

              {post.paa && post.paa.length > 0 && <PeopleAlsoAsk items={post.paa} />}

              {post.sources.length > 0 && (
                <section className="pt-4 border-t border-white/[0.07]">
                  <h2 className="font-syne font-bold text-xl mb-4 text-white/70">
                    Sources &amp; References
                  </h2>
                  <ul className="space-y-2">
                    {post.sources.map((source) => (
                      <li key={source.url} className="flex items-start gap-2 text-sm">
                        <span className="text-[#00e5b0] mt-1 flex-shrink-0">↗</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/50 hover:text-white underline underline-offset-2 decoration-white/20 hover:decoration-white/50 transition-colors"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </article>

            <aside className="lg:sticky lg:top-28 rounded-2xl border border-white/[0.09] bg-[rgba(13,13,20,0.85)] p-5">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors mb-5"
              >
                <ChevronLeft size={13} />
                All Articles
              </Link>

              {post.sidebarCta && (
                <div className="mb-6 rounded-2xl border border-[#6c63ff]/25 bg-[#6c63ff]/[0.08] p-5">
                  <h3 className="font-syne font-bold text-[15px] text-white mb-2">
                    {post.sidebarCta.heading}
                  </h3>
                  <p className="text-white/55 text-[13px] leading-relaxed mb-4">
                    {post.sidebarCta.body}
                  </p>
                  <Link
                    href={post.sidebarCta.href}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#6c63ff] px-4 py-2.5 text-[13px] font-medium text-white hover:bg-[#5a52e0] transition-all"
                  >
                    {post.sidebarCta.buttonLabel}
                  </Link>
                </div>
              )}

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

        {/* More from our blog */}
        {(() => {
          const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
          if (others.length === 0) return null
          return (
            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 mt-20 pt-12 border-t border-white/[0.08]">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-syne font-bold text-2xl">More from our blog</h2>
                <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors">
                  All articles <ArrowUpRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {others.map((p) => (
                  <article key={p.slug} className="group rounded-2xl border border-white/[0.08] bg-[#0d0d14] p-5 hover:border-white/[0.16] transition-all">
                    {p.image && (
                      <Link href={`/${p.slug}`} className="block mb-4 overflow-hidden rounded-xl border border-white/[0.06]">
                        <Image
                          src={p.image}
                          alt={p.title}
                          width={600}
                          height={315}
                          sizes="(max-width: 640px) 100vw, 320px"
                          className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </Link>
                    )}
                    <p className="text-[#6c63ff] text-xs uppercase tracking-widest mb-2">{p.keyword}</p>
                    <h3 className="font-syne font-bold text-base leading-snug mb-3">
                      <Link href={`/${p.slug}`} className="hover:text-[#a89eff] transition-colors">
                        {p.title}
                      </Link>
                    </h3>
                    <Link href={`/${p.slug}`} className="inline-flex items-center gap-1.5 text-xs text-white/55 hover:text-white transition-colors">
                      Read guide <ArrowUpRight size={12} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )
        })()}
      </main>
      <Footer />
    </>
  )
}
