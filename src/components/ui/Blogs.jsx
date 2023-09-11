import Blog from './BlogItem';

const Blogs = async ({ data: blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <Blog key={blog.id} data={blog} />
      ))}
    </>
  );
};
export default Blogs;
