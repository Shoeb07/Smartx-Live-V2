'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'

export default function Insights() {
  return (
    <section id="insights" className="py-32 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-4"
            >
              Blog
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-syne font-bold text-[clamp(36px,5vw,56px)] leading-tight"
            >
              Guides for Digital Growth
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors group"
            >
              View All Guides <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-white/[0.07] bg-[#0d0d14] hover:border-white/15 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs px-3 py-1 rounded-full font-medium bg-[#6c63ff]/15 text-[#a89eff]">
                  {post.keyword}
                </span>
                <div className="flex items-center gap-1.5 text-white/60 text-xs">
                  <Clock size={11} />
                  {post.readTime}
                </div>
              </div>

              <h3 className="font-syne font-bold text-base mb-3 group-hover:text-[#a89eff] transition-colors">
                <Link href={`/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{post.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">{post.date}</span>
                <Link
                  href={`/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                  className="text-white/60 hover:text-white transition-all"
                >
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
