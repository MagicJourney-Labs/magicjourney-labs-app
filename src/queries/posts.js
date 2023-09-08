const allPosts = `
query Posts {
  posts {
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
`;
export { allPosts };
