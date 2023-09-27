import BlogItem from '@/components/ui/BlogItem';
import PaginationControls from '@/components/ui/PaginationControls';
import RecentBlogPosts from '@/components/ui/RecentBlogPosts';
import { fetchGraphQL } from '@/lib/utils/graphqlUtils';
import { allBlogs } from '@/queries/blogs';
import { blogsPage } from '@/queries/pages';

const Blogs = async ({ searchParams }) => {
  const { page } = await fetchGraphQL(blogsPage);

  const first = 200;
  const skip = 0;

  const { blogsConnection } = await fetchGraphQL(
    allBlogs,
    {
      next: { tags: ['blogs'] },
    },
    { variables: { first: first, skip: skip } }
  );

  const { chapterTextForAllBlogs, chapterTextForLatest, paginationText } =
    page.components;
  const { edges: blogs } = blogsConnection;
  const latestBlogPosts = blogs.slice(0, 3);
  const perPage = 3;

  const pageNow = searchParams['page'] || '1';
  const per_page = searchParams['per_page'] || perPage;
  const start = (Number(pageNow) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const entries = blogs.slice(start, end);

  return (
    <div className='divide-y divide-gray-200'>
      <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
        <h1 className='text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          {page.title}
        </h1>
      </div>
      <div className='pb-16 lg:pb-20'>
        <div className='prose max-w-none pt-10 pb-8'>
          <div className='container mx-auto flex flex-col gap-10'>
            <RecentBlogPosts />
            <div className='flex flex-col'>
              <h2 className=''>{chapterTextForAllBlogs}</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {entries.map((blog) => (
                  <BlogItem key={blog.node.id} blog={blog.node} />
                ))}
              </div>
            </div>
            <PaginationControls
              hasNextPage={end < blogs.length}
              hasPrevPage={start > 0}
              dataLength={blogs.length}
              perPage={perPage}
              pagination={paginationText}
              slug='blogs'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
