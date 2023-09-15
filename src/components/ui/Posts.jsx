import Post from './PostItem';

const FeaturedPosts = async ({ data: posts }) => {
  return (
    <div className='pb-20'>
      <div className='flex flex-col max-w-7xl gap-12 items-center mx-auto lg:px-10 '>
        <div className='p-5 lg:p-0'>
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeaturedPosts;
