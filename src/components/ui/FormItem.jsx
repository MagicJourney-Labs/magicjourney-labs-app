import { Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { Button } from './Button';

const FormItem = ({ button, formFields, errors, touched }) => {
  return (
    <Form className='max-w-lg mx-auto  py-3  '>
      <ul className=' list-none m-0 p-0 [&>*:nth-child(2)]:md:w-[calc(50%-12px)] [&>*:first-child]:md:w-[calc(50%-12px)] flex flex-wrap gap-6 '>
        {formFields.map((field, i) => (
          <li key={field.name} className=' w-full'>
            {' '}
            <label
              htmlFor={field.name}
              className='block text-gray-700 text-sm font-medium mb-2'
            >
              {field.label}
            </label>
            <Field
              type={field.type}
              as={field.type === 'textarea' ? 'textarea' : 'input'}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              className={`w-full border ${
                errors[field.name] && touched[field.name]
                  ? 'border-red-500'
                  : 'border-gray-300'
              }  rounded-md py-2 px-3 focus:outline-none focus:border-gray-900 `}
            />
            <ErrorMessage
              name={field.name}
              component='p'
              className='text-red-500 text-xs italic'
            />
          </li>
        ))}
        <Button className='bg-blue-500 text-white w-full'>{button}</Button>
      </ul>
    </Form>
  );
};

export default FormItem;
