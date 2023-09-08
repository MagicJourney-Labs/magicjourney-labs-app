const contactsForm = `
query form {
    form(where: {id: "clm9din1q8ok30bmqo6oaxfgv"}) {
      title
      formInputsTexts {
        ... on FormInputsText {
          inputText
        }
      }
      submissionToastTexts {
        ... on FormSubmissionToastText {
          toastText
        }
      }
      requiredTexts {
        ... on FormRequiredText {
          requiredText
        }
      }
      inputErrorTexts {
        ... on FormInputsErrorText {
          inputErrorText
        }
      }
    }
  }
`;
export { contactsForm };
