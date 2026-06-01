import type { Metadata } from 'next'
import BlogPostView from '@/components/blog/BlogPostView'
import { blogPostMap, buildBlogMetadata } from '@/lib/blog-posts'

const post = blogPostMap.get('product-development-company')!

export const metadata: Metadata = buildBlogMetadata(post)

export default function ProductDevelopmentCompanyPage() {
  return <BlogPostView post={post} />
}
