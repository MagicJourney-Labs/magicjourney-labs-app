const allBlogs = `
    query Blogs {
      blogsPage(where: {id: "clmstdfl7g6g70cmfq9pp3wwy"}) {
        chapterTextForAllBlogs
        chapterTextForLatest
        blogPosts {
          title
          author
          createdDate
          content {
            text
          }
          id
          photo {
            fileName
            height
            width
            url
          }
        }
      }
      }
        `;
export { allBlogs };
