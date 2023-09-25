import BlogItem from '@/components/ui/BlogItem';
import PaginationControls from '@/components/ui/PaginationControls';
import { fetchGraphQL } from '@/lib/graphqlUtils';
import { allBlogs, latestBlogs } from '@/queries/blogs';

const Blogs = async ({ searchParams }) => {
  const { blogsPage } = await fetchGraphQL(allBlogs, {
    next: { tags: ['blogs'] },
  });
  const { blogsPage: latestBlogsPage } = await fetchGraphQL(latestBlogs, {
    next: { tags: ['blogs'] },
  });
  const { chapterTextForAllBlogs, chapterTextForLatest, blogPosts } = blogsPage;
  const { blogPosts: latestBlogPosts } = latestBlogsPage;

  const perPage = 5;

  const page = searchParams['page'] || '1';
  const per_page = searchParams['per_page'] || perPage;

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = blogPosts.slice(start, end);
  return (
    <div className='divide-y divide-gray-200'>
      <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
        <h1 className='text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          {blogsPage.title}
        </h1>
      </div>
      <div className='pb-16 lg:pb-20'>
        <div className='prose max-w-none pt-10 pb-8'>
          <div className='container mx-auto flex flex-col gap-10'>
            <div>
              <h2 className=''>{chapterTextForLatest}</h2>
              <div className='grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-2 gap-6'>
                {latestBlogPosts.map((blog, index) => (
                  <div
                    className={` ${
                      index === 0
                        ? ' md:row-span-2'
                        : ' lg:col-span-2 xl:col-span-1'
                    }`}
                    key={blog.id}
                  >
                    <BlogItem blog={blog} styleLatest={true} index={index} />
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-col'>
              <h2 className=''>{chapterTextForAllBlogs}</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {entries.map((blog) => (
                  <BlogItem key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
            <PaginationControls
              hasNextPage={end < blogPosts.length}
              hasPrevPage={start > 0}
              dataLength={blogPosts.length}
              perPage={perPage}
              blogsPage={blogsPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
