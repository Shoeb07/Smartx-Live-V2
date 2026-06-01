import type { Metadata } from 'next'
import BlogPostView from '@/components/blog/BlogPostView'
import { blogPostMap, buildBlogMetadata } from '@/lib/blog-posts'

const post = blogPostMap.get('software-development-company-guide')!

export const metadata: Metadata = buildBlogMetadata(post)

export default function SoftwareDevelopmentCompanyGuidePage() {
  return <BlogPostView post={post} />
}
