import { fetchGraphQL } from '@/lib/graphqlUtils';
import { home } from '@/queries/home';
import { ourProjects } from '@/queries/ourProjects';
import { allServices } from '@/queries/services';
import { allPosts } from '@/queries/posts';
import HomePage from '@/components/ui/HomePage';
import OurProjects from '@/components/ui/OurProjects';
import Services from '@/components/ui/Services';
import FeaturedPosts from '@/components/ui/Posts';

export default async function Home() {
  const { homePage } = await fetchGraphQL(home);
  const ourProjectsData = await fetchGraphQL(ourProjects);
  const { aboutCard } = await fetchGraphQL(allServices);
  const { posts } = await fetchGraphQL(allPosts, { next: { tags: ['posts'] } });

  return (
    <div className='flex  lg:w-full xl:flex  flex-col self-stretch'>
      <main>
        <HomePage data={homePage} />
        <OurProjects data={ourProjectsData} />
        <Services data={aboutCard} />
        <FeaturedPosts data={posts} />
      </main>
    </div>
  );
}
