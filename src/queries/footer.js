const mainFooter = `
query Footer {
  footer(where: {id: "cllnuerfg02wo0bmmv8d3wnvq"}) {
    footerColumn {
      title
      links {
        id
        name
        page {
          slug
        }
      }
    }
    socialMediaIcon {
      url
      image {
        url
      }
    }
    footerInfo {
      image {
        url
      }
      name
      description
    }
    copyright {
      text
    }
  }
}
`;
export { mainFooter };
