import Hero from '@/components/Hero';
import Intro from '@/components/Intro/Intro';
import LenisProvider from '@/components/Providers/LenisProvider';
import { ScrollProvider } from '@/components/Providers/ScrollProvider';
import RecentPosts from '@/components/RecentPosts';
import SectionContainer from '@/components/SectionContainer';
import TopTracks from '@/components/Spotify/TopTracks';
import Works from '@/components/Work/Works';
import { allCoreContent, sortedBlogPost } from '@/lib/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import { Suspense } from 'react';

export default function Page() {
  const sortedPosts = sortedBlogPost(allBlogs);
  const posts = allCoreContent(sortedPosts);

  return (
    <LenisProvider>
      <ScrollProvider>
        <Hero />
        <Intro />
        <Works />
        <SectionContainer>
          <RecentPosts posts={posts} />
          <Suspense fallback="loading..">
            <TopTracks />
          </Suspense>
        </SectionContainer>
      </ScrollProvider>
    </LenisProvider>
  );
}
