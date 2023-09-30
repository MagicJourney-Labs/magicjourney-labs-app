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
