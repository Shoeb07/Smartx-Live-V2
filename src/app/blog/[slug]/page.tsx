import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import BlogPostView from '@/components/blog/BlogPostView'
import { blogPostMap, blogPosts, buildBlogMetadata } from '@/lib/blog-posts'

type BlogSlugPageProps = {
  params: Promise<{ slug: string }>
}

// Pre-render posts that live under /blog/<slug> (cluster posts use a 'blog/' slug prefix)
export function generateStaticParams() {
  return blogPosts
    .filter((post) => post.slug.startsWith('blog/'))
    .map((post) => ({ slug: post.slug.slice('blog/'.length) }))
}

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPostMap.get(`blog/${slug}`)
  if (!post) return {}
  return buildBlogMetadata(post)
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params
  const post = blogPostMap.get(`blog/${slug}`)

  if (post) {
    return <BlogPostView post={post} />
  }

  // Legacy blog posts are served at the root level (e.g. /custom-web-application-company)
  redirect(`/${slug}`)
}
