const allBlogs = `
    query Blogs {
        blogs {
          createdAt
          content {
            text
          }
          title
          publishedAt
          updatedAt
          createdBy {
            name
          }
          id
        }
      }
        `
export { allBlogs }