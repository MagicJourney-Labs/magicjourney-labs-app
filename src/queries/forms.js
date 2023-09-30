const contactsForm = `
query form {
    form(where: {id: "clm9din1q8ok30bmqo6oaxfgv"}) {
      kicker
      title
      subtitle
      button
      formFields {
        ... on FormField {
          name
          label
          labelLink {
            name
            page {
              slug
            }
          }
          type
          required
          error
          placeholder
        }
      }
    }
  }
`;
export { contactsForm };
