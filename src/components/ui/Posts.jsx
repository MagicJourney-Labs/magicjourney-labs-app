import Post from './PostItem';

const FeaturedPosts = async ({ data: posts }) => {
  return (
    <div className=''>
      <div className='flex flex-col max-w-7xl gap-12 items-center mx-auto '>
        {posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedPosts;
