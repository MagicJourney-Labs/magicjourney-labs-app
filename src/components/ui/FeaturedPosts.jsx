import Post from "./Post";

const FeaturedPosts = async ({ data: posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </>
  );
};
export default FeaturedPosts;
