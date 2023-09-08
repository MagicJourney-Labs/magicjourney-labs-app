'use client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormItem from './FormItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

const ContactsForm = () => {
  const [contacts, setContacts] = useState('');

  useEffect(() => {
    fetch('/api/getFormTexts') // Replace with your API endpoint
      .then((response) => response.json())
      .then((result) => setContacts(result))
      .catch((error) => console.error('Error:', error));
  }, []);

  if (!contacts) {
    return;
  }
  const {
    title,
    formInputsTexts,
    inputErrorTexts,
    requiredTexts,
    submissionToastTexts,
  } = contacts.form;
  console.log(submissionToastTexts);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(requiredTexts[0].requiredText),
    email: Yup.string()
      .email(inputErrorTexts[0].inputErrorText)
      .required(requiredTexts[1].requiredText),
    phone: Yup.string()
      .matches(/^(\+370|8)\d{8}$/, inputErrorTexts[1].inputErrorText)
      .required(requiredTexts[2].requiredText),
    message: Yup.string().required(requiredTexts[3].requiredText),
  });

  const handleSubmit = async (values, actions) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        actions.resetForm();
        toast.success(submissionToastTexts[0].toastText);
      } else {
        throw new Error(submissionToastTexts[1].toastText);
      }
    } catch (error) {
      console.error(error);
      toast.error(submissionToastTexts[2].toastText);
    }
  };

  return (
    <div className='max-w-md mx-auto p-4 bg-white rounded shadow-md'>
      <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <FormItem
            formInputsTexts={formInputsTexts}
            errors={errors}
            touched={touched}
          />
        )}
      </Formik>
    </div>
  );
};

export default ContactsForm;
