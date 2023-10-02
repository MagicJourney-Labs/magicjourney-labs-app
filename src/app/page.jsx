import { fetchGraphQL } from '@/lib/utils/graphqlUtils';
import { home } from '@/queries/home';
import { ourProjects } from '@/queries/ourProjects';
import { allServices } from '@/queries/services';
import HomePage from '@/components/ui/HomePage';
import OurProjects from '@/components/ui/OurProjects';
import Services from '@/components/ui/Services';
import RecentBlogPosts from '@/components/ui/RecentBlogPosts';

export default async function Home() {
  const { homePage } = await fetchGraphQL(home);
  const ourProjectsData = await fetchGraphQL(ourProjects);
  const { aboutCard } = await fetchGraphQL(allServices);

  return (
    <div className='flex  lg:w-full xl:flex  flex-col self-stretch'>
      <main>
        <HomePage data={homePage} />
        <OurProjects data={ourProjectsData} />
        <Services data={aboutCard} />
        <div className='px-10 flex flex-col items-center mx-auto max-w-7xl  lg:px-10 py-24'>
          <RecentBlogPosts />
        </div>
      </main>
    </div>
  );
}
