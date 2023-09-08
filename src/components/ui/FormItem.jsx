import { Form, Field, ErrorMessage } from 'formik';
import React from 'react';

const FormItem = ({ formInputsTexts, errors, touched }) => {
  return (
    <Form className='max-w-lg mx-auto'>
      <div className='mb-4'>
        <label
          htmlFor='name'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          {formInputsTexts[0].inputText}
        </label>
        <Field
          type='text'
          id='name'
          name='name'
          className={`w-full border ${
            errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
          } rounded py-2 px-3 focus:outline-none focus:border-blue-500`}
        />
        <ErrorMessage
          name='name'
          component='p'
          className='text-red-500 text-xs italic'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          {formInputsTexts[1].inputText}
        </label>
        <Field
          type='email'
          id='email'
          name='email'
          className={`w-full border ${
            errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
          } rounded py-2 px-3 focus:outline-none focus:border-blue-500`}
        />
        <ErrorMessage
          name='email'
          component='p'
          className='text-red-500 text-xs italic'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='phone'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          {formInputsTexts[2].inputText}
        </label>
        <Field
          type='text'
          id='phone'
          name='phone'
          className={`w-full border ${
            errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
          } rounded py-2 px-3 focus:outline-none focus:border-blue-500`}
        />
        <ErrorMessage name='phone'>
          {(msg) => <p className='text-red-500 text-xs italic'>{msg}</p>}
        </ErrorMessage>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='message'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          {formInputsTexts[3].inputText}
        </label>
        <Field
          as='textarea'
          id='message'
          name='message'
          className={`w-full border ${
            errors.message && touched.message
              ? 'border-red-500'
              : 'border-gray-300'
          } rounded py-2 px-3 focus:outline-none focus:border-blue-500`}
        />
        <ErrorMessage
          name='message'
          component='p'
          className='text-red-500 text-xs italic'
        />
      </div>
      <div className='mb-4'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          {formInputsTexts[4].inputText}
        </button>
      </div>
    </Form>
  );
};

export default FormItem;
