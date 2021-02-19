import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import AuthContext from '../../contexts/AuthContext';
import { confirmSignUp } from '../../actions/auth';

const ConfirmSignup = () => {
  const { dispatch } = React.useContext(AuthContext);
  const history = useHistory();
  const initialValues = {
    username: '',
    code: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username must not be empty!'),
    code: Yup.string().required('Code must not be empty!'),
  });

  const onSubmit = (value) => dispatch(confirmSignUp(value, dispatch, history));

  return (
    <div className='confirm__sign__up flex flex-col justify-center items-center min-h-screen'>
      <div className='container mx-auto px-4 space-y-6 w-1/2'>
        <h1 className='text-3xl font-bold text-blue-500 antialiased'>
          Confirm Your Email
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
                  htmlFor='code'
                >
                  Confirmation Code *
                </label>
                <Field name='code'>
                  {(props) => {
                    const { field, meta } = props;
                    return (
                      <input
                        id='code'
                        type='text'
                        className={`shadow appearance-none outline-none border-2 border-transparent rounded w-full py-2 px-3 text-grey-darker  ${
                          meta.touched && meta.error ? 'border-red-600 ' : null
                        }`}
                        placeholder='Enter your code'
                        {...field}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name='code'
                  component='div'
                  className='text-xs text-red-600 font-bold'
                />
              </div>
              <div className='flex items-center justify-between'>
                <button
                  className='bg-blue-600 text-white py-3 px-8 rounded'
                  type='submit'
                >
                  CONFIRM
                </button>
                <Link className='text-sm text-blue-500' to='/sign-up'>
                  Sign Up again?
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ConfirmSignup;
