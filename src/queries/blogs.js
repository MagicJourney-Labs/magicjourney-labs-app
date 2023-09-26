const allBlogs = `
    query Blogs {
      blogsPage(where: {id: "clmstdfl7g6g70cmfq9pp3wwy"}) {
        title
        chapterTextForAllBlogs
        chapterTextForLatest
        pagination {
          textNext
          textOf
          textPage
          textPrevious
        }
        blogPosts(orderBy: createdDate_DESC) {
          title
          author
          createdDate
          categories {
            color {
              hex
            }
            category
          }
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
