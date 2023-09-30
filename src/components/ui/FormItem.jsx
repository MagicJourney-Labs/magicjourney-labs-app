import { Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { Button } from './Button';
import Link from 'next/link';

const FormItem = ({ button, formFields, errors, touched }) => {
  return (
    <Form className='max-w-lg mx-auto  '>
      <ul className=' list-none m-0 p-0 [&>*:nth-child(2)]:md:w-[calc(50%-12px)] [&>*:first-child]:md:w-[calc(50%-12px)] flex flex-wrap gap-6 '>
        {formFields.map((field, i) => (
          <li key={field.name} className='w-full flex flex-col gap-1'>
            <div
              className={` ${
                field.type === 'checkbox'
                  ? ' flex flex-row-reverse justify-end gap-2 text-base'
                  : 'flex flex-col w-full gap-2 text-sm'
              }`}
            >
              <label
                htmlFor={field.name}
                className=' text-gray-700  font-medium '
              >
                {field.label}
                {field.labelLink && (
                  <Link
                    className='hover:text-blue-500 text-base underline'
                    href={`/${field.labelLink?.page.slug}`}
                  >
                    {field.labelLink?.name}
                  </Link>
                )}
              </label>
              <Field
                type={field.type}
                as={field.type === 'textarea' ? 'textarea' : 'input'}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                className={` border ${
                  errors[field.name] && touched[field.name]
                    ? 'border-red-500'
                    : 'border-gray-300'
                }  rounded-md py-2 px-3 focus:outline-none focus:border-gray-900 `}
              />
            </div>
            <ErrorMessage
              name={field.name}
              component='p'
              className='text-red-500 text-xs italic m-0 '
            />
          </li>
        ))}
        <Button className='bg-blue-500 text-white w-full '>{button}</Button>
      </ul>
    </Form>
  );
};

export default FormItem;
