const Post = ({ data: post }) => {
  return (
    <div className=" group relative flex flex-col items-start">
      <div>
        <h2 className="font-semibold">{post.title}</h2>
        <p>{post.content.text}</p>
      </div>
    </div>
  );
};
export default Post;
