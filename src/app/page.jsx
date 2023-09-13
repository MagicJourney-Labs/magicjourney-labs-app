import { fetchGraphQL } from '@/lib/graphqlUtils';
import OurProjects from '@/components/ui/OurProjects';
import { home } from '@/queries/home';
import HomePage from '@/components/ui/HomePage';

export default async function Home() {
  const { homePage } = await fetchGraphQL(home);

  return (
    <div className='flex  lg:w-full xl:flex  flex-col self-stretch'>
      <main className=' sm:px-8 md:px-8 lg:px-8 w-fit '>
        <HomePage data={homePage} />
        <OurProjects />
      </main>
    </div>
  );
}
