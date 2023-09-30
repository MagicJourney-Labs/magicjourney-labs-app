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
  const { title, button, formFields, subtitle, kicker } = contacts.form;

  const initialValues = {};

  formFields.forEach((field) => {
    if (field.type === 'checkbox') {
      initialValues[field.name] = false;
    } else {
      initialValues[field.name] = '';
    }
  });

  const validationSchema = Yup.object().shape(
    formFields.reduce((accumulator, field) => {
      let baseValidation;

      if (field.type === 'checkbox') {
        baseValidation = Yup.boolean().oneOf([true], field.required);
      } else {
        baseValidation = Yup.string().required(field.required);
      }

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
    <div className='max-w-md mx-auto px-4 bg-white rounded shadow-md py-6'>
      <div className='text-center flex flex-col gap-5 pb-14'>
        <div className='text-blue-500 text-sm font-semibold'>{kicker}</div>
        <h2 className='text-3xl font-semibold m-0  '>{title}</h2>
        <h3 className='text-sm font-normal text-gray-500 m-0'>{subtitle}</h3>
      </div>
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
