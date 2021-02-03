import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import AuthContext from '../../contexts/AuthContext';
import ConfirmSignUp from './ConfirmSignup';

const Signup = () => {
  const {
    authState: { isSignedUp },
  } = React.useContext(AuthContext);

  const initialValues = {
    username: '',
    email: '',
    phone: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username must not be empty!'),
    email: Yup.string()
      .email('Email is not valid!')
      .required('Email must not be empty!'),
    phone: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone number is not valid'
      )
      .min(10, 'Phone number should be at least 10 characters long!'),
    password: Yup.string().required('Password must not be empty!'),
  });

  const onSubmit = (value) => console.log(value);

  return isSignedUp ? (
    <ConfirmSignUp />
  ) : (
    <div className='sign__up flex flex-col justify-center items-center min-h-screen'>
      <div className='container mx-auto px-4 space-y-6 w-1/2'>
        <h1 className='text-3xl font-bold text-blue-500 antialiased'>
          Sign Up
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
              <div className='mb-4'>
                <label
                  className='block text-grey-darker text-sm font-bold mb-2'
                  htmlFor='email'
                >
                  Email *
                </label>
                <Field name='email'>
                  {(props) => {
                    const { field, meta } = props;
                    return (
                      <input
                        id='email'
                        type='email'
                        className={`shadow appearance-none outline-none border-2 border-transparent rounded w-full py-2 px-3 text-grey-darker  ${
                          meta.touched && meta.error ? 'border-red-600 ' : null
                        }`}
                        placeholder='Enter your email'
                        {...field}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-xs text-red-600 font-bold'
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-grey-darker text-sm font-bold mb-2'
                  htmlFor='phone'
                >
                  Phone Number
                </label>
                <Field name='phone'>
                  {(props) => {
                    const { field, meta } = props;
                    return (
                      <input
                        id='phone'
                        type='number'
                        className={`shadow appearance-none outline-none border-2 border-transparent rounded w-full py-2 px-3 text-grey-darker  ${
                          meta.touched && meta.error ? 'border-red-600 ' : null
                        }`}
                        placeholder='Enter your phone number'
                        {...field}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name='phone'
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
                  SIGN UP
                </button>
                <Link className='text-sm text-blue-500' to='/sign-in'>
                  Sign In?
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
