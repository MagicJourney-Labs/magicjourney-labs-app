const Post = ({ data: post }) => {
  return (
    <>
      <div>
        <h2>{post.title}</h2>
        <p>{post.content.text}</p>
      </div>
    </>
  );
};
export default Post;
