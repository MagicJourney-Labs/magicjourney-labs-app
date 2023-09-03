import Blogs from '@/components/ui/Blogs';
import { fetchGraphQL } from '@/lib/graphqlUtils';
import Link from 'next/link';

async function getBlogs() {
  const query = `
    query Blogs {
        blogs {
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

  const data = await fetchGraphQL(query, { next: { tags: ['blogs'] } });
  return data;
}

export default async function BlogsPage() {
  const { blogs } = await getBlogs();
  return (
    <div>
      <h1>Blogs</h1>
      <Link href='/about'>About</Link>
      <Link href='/'>Home</Link>
      <Blogs data={blogs} />
    </div>
  );
}
