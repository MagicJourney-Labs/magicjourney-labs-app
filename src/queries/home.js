const home = `
  query HomePage {
    homePage(where: {id: "clm57jgdgo5l70bmm9tjrmhu3"}) {
      buttons {
        name
        page {
          slug
        }
        id
      }
      title
      paragraphs {
        html
      }
      imageUrl {
        url
      }
      pictureAlt
    }
  }
  `;
export { home };