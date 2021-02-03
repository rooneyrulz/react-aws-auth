import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signin = () => {
  const initialValues = { username: '', password: '' };

  // Validation Schema
  const validationSchema = Yup.object({
    username: Yup.string().required('Username must not be empty!'),
    password: Yup.string().required('Password must not be empty!'),
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className='sign__in flex flex-col justify-center items-center min-h-screen'>
      <div className='container mx-auto px-4 space-y-6 w-1/2'>
        <h1 className='text-3xl font-bold text-blue-500 antialiased'>
          Sign In
        </h1>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className='mb-4'>
                <label
                  className='block text-grey-darker text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Username *
                </label>
                <Field name='username'>
                  {(props) => {
                    const { field, meta } = props;
                    return (
                      <input
                        id='username'
                        type='username'
                        className={`shadow appearance-none outline-none border-2 border-transparent rounded w-full py-2 px-3 text-grey-darker  ${
                          meta.touched && meta.error ? 'border-red-600 ' : null
                        }`}
                        placeholder='Enter your username'
                        {...field}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name='username'
                  component='div'
                  className='text-xs text-red-600 font-bold'
                />
              </div>
              <div className='mb-6'>
                <label
                  className='block text-grey-darker text-sm font-bold mb-2'
                  htmlFor='password'
                >
                  Password *
                </label>
                <Field name='password'>
                  {(props) => {
                    const { field, meta } = props;
                    return (
                      <input
                        id='password'
                        type='password'
                        placeholder='Enter your password'
                        className={`shadow appearance-none outline-none border-2 border-transparent rounded w-full py-2 px-3 text-grey-darker ${
                          meta.touched && meta.error ? 'border-red-600' : null
                        }`}
                        {...field}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-xs text-red-600 font-bold'
                />
              </div>
              <div className='flex items-center justify-between'>
                <button
                  className='bg-blue-600 text-white py-3 px-8 rounded'
                  type='submit'
                >
                  SIGN IN
                </button>
                <Link className='text-sm text-blue-500' to='/sign-up'>
                  Sign Up?
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signin;
