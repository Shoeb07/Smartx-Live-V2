import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { absoluteUrl } from '@/lib/seo'
import { blogPosts } from '@/lib/blog-posts'
import type { Author } from '@/lib/blog-authors'

type AuthorProfileProps = {
  author: Author
  slug: string
  // Anchor of the matching Person node in the sitewide Organization graph
  personId: string
  expertise: string[]
}

export default function AuthorProfile({ author, slug, personId, expertise }: AuthorProfileProps) {
  const url = absoluteUrl(`/authors/${slug}`)
  const posts = blogPosts.filter((post) => post.author.name === author.name)

  const profileSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${url}#profilepage`,
        url,
        name: `${author.name} — ${author.role}, SmartX Solutions`,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${absoluteUrl('/')}#website` },
        mainEntity: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: author.name,
        jobTitle: author.role,
        description: author.bio,
        url,
        sameAs: [author.linkedin],
        worksFor: {
          '@type': 'Organization',
          '@id': `${absoluteUrl('/')}#organization`,
          name: 'SmartX Solutions',
        },
        knowsAbout: expertise,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
          { '@type': 'ListItem', position: 3, name: author.name, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <Navbar />
      <main className="bg-[#050508] text-white pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/55">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white/75">{author.name}</span>
          </nav>

          <header className="pb-12 border-b border-white/[0.08]">
            <div className="flex items-start gap-6 flex-wrap">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center font-syne font-bold text-2xl flex-shrink-0"
                style={{
                  background: author.color + '25',
                  border: `2px solid ${author.color}45`,
                  color: author.color,
                }}
              >
                {author.initials}
              </div>
              <div className="flex-1 min-w-[260px]">
                <p className="text-[#00e5b0] text-sm font-dm uppercase tracking-widest mb-2">Author</p>
                <h1 className="font-syne font-bold text-[clamp(32px,5vw,56px)] leading-tight mb-2">
                  {author.name}
                </h1>
                <p className="text-white/60 text-lg mb-4">{author.role}, SmartX Solutions</p>
                <p className="text-white/55 leading-relaxed max-w-2xl mb-5">{author.bio}</p>
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#6c63ff] hover:text-[#a89eff] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.12em] text-white/30 mb-3">Writes about</p>
              <ul className="flex flex-wrap gap-2">
                {expertise.map((topic) => (
                  <li
                    key={topic}
                    className="inline-flex items-center gap-1.5 text-[12px] text-white/60 border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 rounded-full"
                  >
                    <CheckCircle2 size={12} className="text-[#00e5b0]" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <section className="mt-12">
            <h2 className="font-syne font-bold text-2xl mb-8">
              Articles by {author.name} ({posts.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-2xl border border-white/[0.08] bg-[#0d0d14] p-5 hover:border-white/[0.16] transition-all"
                >
                  {post.image && (
                    <Link href={`/${post.slug}`} className="block mb-4 overflow-hidden rounded-xl border border-white/[0.06]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={315}
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </Link>
                  )}
                  <p className="text-[#6c63ff] text-xs uppercase tracking-widest mb-2">{post.keyword}</p>
                  <h3 className="font-syne font-bold text-lg leading-snug mb-2">
                    <Link href={`/${post.slug}`} className="hover:text-[#a89eff] transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{post.description}</p>
                  <div className="flex items-center justify-between text-xs text-white/45">
                    <span>{post.date} · {post.readTime}</span>
                    <Link
                      href={`/${post.slug}`}
                      aria-label={`Read ${post.title}`}
                      className="inline-flex items-center gap-1 hover:text-white transition-colors"
                    >
                      Read <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-2xl border border-[#6c63ff]/25 bg-[#6c63ff]/[0.07] p-8">
            <h2 className="font-syne font-bold text-xl mb-3">Work with {author.name.split(' ')[0]} and the SmartX team</h2>
            <p className="text-white/60 mb-6 max-w-2xl">
              SmartX Solutions builds web applications, mobile apps, and SaaS platforms for startups
              and enterprises. Every project starts with a free discovery call.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#6c63ff] px-6 py-3 text-sm font-medium text-white hover:bg-[#5a52e0] transition-all"
            >
              Start a Project <ArrowUpRight size={14} />
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
