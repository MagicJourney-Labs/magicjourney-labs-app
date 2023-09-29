const allBlogs = `
    query Blogs($first: Int, $skip: Int) {
      blogsConnection(orderBy: createdAt_DESC, first: $first, skip: $skip) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
        edges {
          node {
            id
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
