import { fetchGraphQL } from '@/lib/utils/graphqlUtils';
import BlogItem from './BlogItem';
import { blogsPage } from '@/queries/pages';
import { allBlogs } from '@/queries/blogs';

const RecentBlogPosts = async () => {
  const { page } = await fetchGraphQL(blogsPage);

  const first = 3;
  const skip = 0;

  const { blogsConnection } = await fetchGraphQL(
    allBlogs,
    {
      next: { tags: ['blogs'] },
    },
    { variables: { first: first, skip: skip } }
  );

  const { chapterTextForLatest } = page.components;
  const { edges: blogs } = blogsConnection;

  return (
    <div>
      <h2 className='text-xl font-bold mb-5'>{chapterTextForLatest}</h2>
      <div className='grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-2 gap-6'>
        {blogs.map((blog, index) => (
          <div
            className={` ${
              index === 0 ? ' md:row-span-2' : ' lg:col-span-2 xl:col-span-1'
            }`}
            key={blog.node.id}
          >
            <BlogItem blog={blog.node} styleLatest={true} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentBlogPosts;
