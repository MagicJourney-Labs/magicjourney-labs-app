import { Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { Button } from './Button';

const FormItem = ({ button, formFields, errors, touched }) => {
  return (
    <Form className='max-w-lg mx-auto'>
      {formFields.map((field) => (
        <div className='mb-4' key={field.name}>
          <label
            htmlFor={field.name}
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            {field.label}
          </label>
          <Field
            type={field.type}
            as={field.type === 'textarea' ? 'textarea' : 'input'}
            id={field.name}
            name={field.name}
            className={`w-full border ${
              errors[field.name] && touched[field.name]
                ? 'border-red-500'
                : 'border-gray-300'
            } rounded py-2 px-3 focus:outline-none focus:border-gray-900`}
          />
          <ErrorMessage
            name={field.name}
            component='p'
            className='text-red-500 text-xs italic'
          />
        </div>
      ))}
      <div className='mb-4'>
        <Button>{button}</Button>
      </div>
    </Form>
  );
};

export default FormItem;
