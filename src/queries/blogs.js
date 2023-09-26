const allBlogs = `
    query Blogs {
      blogsConnection(orderBy: createdAt_DESC) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
        edges {
          node {
            author
            categories {
              category
              color {
                hex
              }
            }
            content {
              text
            }
            title
            createdAt
            createdBy {
              name
            }
            photo {
              height
              fileName
              width
              url
            }
          }
        }
      }
      }
        `;

export { allBlogs };
