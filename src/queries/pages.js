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
          `

export { singlePage}