import Post from './PostItem';

const FeaturedPosts = async ({ data: posts }) => {
  return (
    <div className='flex  px-8 flex-col items-start gap-12'>
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
};
export default FeaturedPosts;
