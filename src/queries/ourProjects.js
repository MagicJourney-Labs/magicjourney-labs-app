const ourProjects = `
query OurProjects {
  ourProjectsHeader(where: {id: "clmgfujsdq1630bmhb8t6ls1x"}) {
    title
    slagon
  }
  ourProjectItems {
    icon {
      url
    }
    id
    title
    content
  }
}
  `;

export { ourProjects };
