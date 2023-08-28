const Blog = ({ data: blog }) => {
    return (
      <>
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.content.text}</p>
        </div>
      </>
    );
  };
  export default Blog;
  