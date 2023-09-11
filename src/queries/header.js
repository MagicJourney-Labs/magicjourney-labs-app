const mainHeader = `
query Header {
  header(where: {id: "cllvx2agv4q410blf7pae0erf"}) {
    headerLogo {
      name
      logo {
        url
      }
    }
    headerLinks {
      id
      links {
        id
        name
        page {
          slug
        }
      }
    }
    headerLogIn {
      name
    }
  }
}  
`;
export { mainHeader };
