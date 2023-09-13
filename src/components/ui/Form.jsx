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
    fetch('/api/getFormTexts')
      .then((response) => response.json())
      .then((result) => setContacts(result))
      .catch((error) => console.error('Error:', error));
  }, []);

  if (!contacts) {
    return;
  }
  const { title, button, formFields } = contacts.form;

  const initialValues = {};

  formFields.forEach((field) => {
    initialValues[field.name] = '';
  });

  const validationSchema = Yup.object().shape(
    formFields.reduce((accumulator, field) => {
      const baseValidation = Yup.string().required(field.required);

      accumulator[field.name] =
        field.type === 'email'
          ? baseValidation.email(field.error)
          : field.name === 'telefonas' || field.name === 'phone'
          ? baseValidation.matches(/^(\+370|8)\d{8}$/, field.error)
          : baseValidation;

      return accumulator;
    }, {})
  );

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
        toast.success(':) OK');
      } else {
        throw new Error(':( bad');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error');
    }
  };

  return (
    <div className='max-w-md mx-auto p-4 bg-white rounded shadow-md'>
      <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <FormItem
            button={button}
            formFields={formFields}
            errors={errors}
            touched={touched}
          />
        )}
      </Formik>
    </div>
  );
};

export default ContactsForm;
