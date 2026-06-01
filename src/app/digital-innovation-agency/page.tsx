import type { Metadata } from 'next'
import BlogPostView from '@/components/blog/BlogPostView'
import { blogPostMap, buildBlogMetadata } from '@/lib/blog-posts'

const post = blogPostMap.get('digital-innovation-agency')!

export const metadata: Metadata = buildBlogMetadata(post)

export default function DigitalInnovationAgencyPage() {
  return <BlogPostView post={post} />
}
