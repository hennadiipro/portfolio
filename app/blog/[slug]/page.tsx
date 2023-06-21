import { MDXLayoutRenderer } from '@/components/MDXComponents';
import PageTitle from '@/components/PageTitle';
import { coreContent, formatBlogLink, sortedBlogPost } from '@/lib/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import PostLayout from '../../../layouts/MDX/PostLayout';
import MainLayout from '../../../layouts/MainLayout';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const slug = params?.slug;
  const sortedPosts = sortedBlogPost(allBlogs);

  const post = sortedPosts.find((p) => p.slug === slug);
  const author = post?.author || ['default'];

  const postIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const prevContent = sortedPosts[postIndex + 1] || null;
  const prev = prevContent ? coreContent(prevContent) : null;
  const nextContent = sortedPosts[postIndex - 1] || null;
  const next = nextContent ? coreContent(nextContent) : null;

  return (
    <MainLayout>
      {post && 'draft' in post && post.draft !== true ? (
        <PostLayout content={post} prev={formatBlogLink(prev)} next={formatBlogLink(next)}>
          <MDXLayoutRenderer toc={post.toc} content={post} authorDetails={author} />
        </PostLayout>
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </MainLayout>
  );
}
