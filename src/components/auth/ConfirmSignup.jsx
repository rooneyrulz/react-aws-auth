import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmSignup = () => {
  return (
    <div className='confirm__sign__up flex flex-col justify-center items-center min-h-screen'>
      <div className='container mx-auto px-4 space-y-6 w-1/2'>
        <h1 className='text-3xl font-bold text-blue-500 antialiased'>
          Confirm Your Email
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
            <div className='mb-6'>
              <label
                className='block text-grey-darker text-sm font-bold mb-2'
                for='code'
              >
                Confirmation Code
              </label>
              <input
                className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3'
                id='code'
                type='number'
                placeholder='Enter your code'
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-600 text-white py-3 px-8 rounded'
                type='button'
              >
                CONFIRM
              </button>
              <Link className='text-sm text-blue-500' to='/sign-up'>
                Sign Up again?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmSignup;
