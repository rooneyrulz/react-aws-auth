import React from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import ConfirmSignUp from './ConfirmSignup';

const Signup = () => {
  const {
    authState: { isSignedUp },
  } = React.useContext(AuthContext);

  return isSignedUp ? (
    <ConfirmSignUp />
  ) : (
    <div className='sign__up flex flex-col justify-center items-center min-h-screen'>
      <div className='container mx-auto px-4 space-y-6 w-1/2'>
        <h1 className='text-3xl font-bold text-blue-500 antialiased'>
          Sign Up
        </h1>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
          <form>
            <div className='mb-4'>
              <label
                className='block text-grey-darker text-sm font-bold mb-2'
                for='username'
              >
                Username
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                id='username'
                type='text'
                placeholder='Enter your username'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-grey-darker text-sm font-bold mb-2'
                for='email'
              >
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                id='email'
                type='email'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-grey-darker text-sm font-bold mb-2'
                for='phone'
              >
                Phone Number
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                id='phone'
                type='number'
                placeholder='Enter your phone number'
              />
            </div>
            <div className='mb-6'>
              <label
                className='block text-grey-darker text-sm font-bold mb-2'
                for='password'
              >
                Password
              </label>
              <input
                className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3'
                id='password'
                type='password'
                placeholder='Enter your password'
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-600 text-white py-3 px-8 rounded'
                type='button'
              >
                SIGN UP
              </button>
              <Link className='text-sm text-blue-500' to='/sign-in'>
                Sign In?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
