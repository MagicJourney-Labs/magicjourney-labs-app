const allBlogs = `
    query Blogs {
      blogsPage(where: {id: "clmstdfl7g6g70cmfq9pp3wwy"}) {
        title
        chapterTextForAllBlogs
        chapterTextForLatest
        blogPosts(orderBy: createdDate_DESC) {
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

const latestBlogs = `
        query Blogs {
          blogsPage(where: {id: "clmstdfl7g6g70cmfq9pp3wwy"}) {
            chapterTextForAllBlogs
            chapterTextForLatest
            blogPosts(orderBy: createdDate_DESC, first: 3) {
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

export { allBlogs, latestBlogs };
