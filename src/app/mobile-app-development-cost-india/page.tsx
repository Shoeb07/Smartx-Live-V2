import type { Metadata } from 'next'
import BlogPostView from '@/components/blog/BlogPostView'
import { blogPostMap, buildBlogMetadata } from '@/lib/blog-posts'

const post = blogPostMap.get('mobile-app-development-cost-india')!

export const metadata: Metadata = buildBlogMetadata(post)

export default function MobileAppDevelopmentCostPage() {
  return <BlogPostView post={post} />
}
