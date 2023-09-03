import FeaturedPosts from '@/components/ui/Posts';
import { fetchGraphQL } from '@/lib/graphqlUtils';
import Link from 'next/link';

async function getProjects() {
  const query = `
        query Heroes {
          heroes {
            createdAt
            heroText
            id
            publishedAt
            updatedAt
          }
        }
      `;

  const data = await fetchGraphQL(query);
  return data;
}

async function getPosts() {
  const query = `
  query Posts {
    posts {
      createdAt
      content {
        text
      }
      title
      publishedAt
      updatedAt
      createdBy {
        name
      }
      id
    }
  }
`;

  const data = await fetchGraphQL(query, { next: { tags: ['posts'] } });
  return data;
}

export default async function Home() {
  const { heroes } = await getProjects();
  const { posts } = await getPosts();

  return (
    <div className='flex  lg:w-full xl:flex  flex-col self-stretch'>
      <main className=' sm:px-8 md:px-8 lg:px-8 w-fit '>
        <div className='flex  px-8 flex-col items-start gap-12'>
          <Link href='/about'>About</Link>
          <Link href='/blogs'>Blogs</Link>
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
