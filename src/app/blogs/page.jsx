import { allBlogs } from '@/queries/blogs';
import Blogs from '@/components/ui/Blogs';
import { fetchGraphQL } from '@/lib/graphqlUtils';
import Link from 'next/link';

export default async function BlogsPage() {
  const { blogs } = await fetchGraphQL(allBlogs, { next: { tags: ['blogs'] } });
  return (
    <div>
      <h1>Blogs</h1>
      <Link href='/about'>About</Link>
      <Link href='/'>Home</Link>
      <Blogs data={blogs} />
    </div>
  );
}
