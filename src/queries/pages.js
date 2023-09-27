const singlePage = `
            query singlePage($slug: String!) {
                page(where: {slug: $slug}) {
                  title
                  slug
                  id
                  content {
                    html
                    raw
                  }
                }
              }   
          `;
const blogsPage = `
        query blogsPage {
          page(where: {id: "clm3u9q4yid7d0blamqf5jq0r"}) {
            title
            components {
              ... on BlogPage {
                id
                chapterTextForAllBlogs
                chapterTextForLatest
                paginationText {
                  textNext
                  textOf
                  textPage
                  textPrevious
                }
              }
            }
          }
        }
        `;

export { singlePage, blogsPage };
