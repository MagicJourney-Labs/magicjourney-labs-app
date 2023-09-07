'use client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormItem from './FormItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactsForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Vardas yra privalomas.'),
    email: Yup.string()
      .email('Netinkamas el. pašto adresas.')
      .required('El. paštas yra privalomas.'),
    phone: Yup.string()
      .matches(
        /^(\+370|8)\d{8}$/,
        'Netinkamas telefono numeris. Pavyzdys: +370XXXXXXXX arba 8XXXXXXXXX'
      )
      .required('Telefono numeris yra privalomas.'),
    message: Yup.string().required('Žinutė yra privaloma.'),
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
        toast.success('Forma buvo sėkmingai pateikta.');
      } else {
        throw new Error('Formos siuntimo klaida.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Įvyko klaida siunčiant formą.');
    }
  };

  return (
    <div className='max-w-md mx-auto p-4 bg-white rounded shadow-md'>
      <h2 className='text-2xl font-semibold mb-4'>Susisiekite su mumis</h2>
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
          <FormItem errors={errors} touched={touched} />
        )}
      </Formik>
    </div>
  );
};

export default ContactsForm;
