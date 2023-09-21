import { fetchGraphQL } from '@/lib/graphqlUtils';
import { allBlogs } from '@/queries/blogs';
import BlogItem from './BlogItem';

const Blogs = async () => {
  const { blogsPage } = await fetchGraphQL(allBlogs, {
    next: { tags: ['blogs'] },
  });

  const { chapterTextForAllBlogs, chapterTextForLatest, blogPosts } = blogsPage;
  const sortedBlogPosts = blogPosts.sort((a, b) => {
    const dateA = new Date(a.createdDate);
    const dateB = new Date(b.createdDate);
    return dateB - dateA;
  });
  const latestBlogPosts = sortedBlogPosts.slice(0, 3);

  return (
    <div className='container mx-auto'>
      <div>
        <h2 className=''>{chapterTextForLatest}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
          {latestBlogPosts.map((blog, index) => (
            <div
              className={`${index === 0 ? 'row-span-1' : 'row-span-2'}`}
              key={blog.id}
            >
              <BlogItem blog={blog} />
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col'>
        <h2 className=''>{chapterTextForAllBlogs}</h2>
        <div className='grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {blogPosts.map((blog) => (
            <div className='' key={blog.id}>
              <BlogItem blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blogs;
