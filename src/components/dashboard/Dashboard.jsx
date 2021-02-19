import React from 'react';

import AuthContext from '../../contexts/AuthContext';
import { signOut } from '../../actions/auth';

const Dashboard = () => {
  const { authState, dispatch } = React.useContext(AuthContext);
  return (
    <div className='dashboard flex flex-col justify-center items-center min-h-screen'>
      <div className='container mx-auto px-4 space-y-6'>
        <h1 className='text-5xl text-blue-500 antialiased'>Dashboard</h1>
        <p className='text-base text-gray-500 antialiased'>
          Welcome {authState.user.username}
        </p>
        <button
          className='bg-blue-600 text-white py-3 px-8 rounded'
          type='button'
          onClick={(e) => dispatch(signOut(dispatch))}
        >
          SIGNOUT
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
