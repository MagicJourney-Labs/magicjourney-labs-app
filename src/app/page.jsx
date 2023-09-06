import { mainHeroes } from '@/queries/heroes';
import { allPosts } from '@/queries/posts';
import FeaturedPosts from '@/components/ui/Posts';
import { fetchGraphQL } from '@/lib/graphqlUtils';
import Link from 'next/link';

export default async function Home() {
  const { heroes } = await fetchGraphQL(mainHeroes);
  const { posts } = await fetchGraphQL(allPosts, { next: { tags: ['posts'] } });
  return (
    <div className='flex  lg:w-full xl:flex  flex-col self-stretch'>
      <main className=' sm:px-8 md:px-8 lg:px-8 w-fit '>
        <div className='flex  px-8 flex-col items-start gap-12'>
          <Link href='/about'>About</Link>
          <div>MagicJourney Labs</div>
        </div>
        <FeaturedPosts data={posts} />
        <div className='flex  px-8 flex-col items-start gap-12'>
          {heroes[0].heroText}
        </div>
      </main>
    </div>
  );
}
