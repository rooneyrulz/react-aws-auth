import React from 'react';
import AuthContext from '../../contexts/AuthContext';

const Signin = () => {
  const context = React.useContext(AuthContext);
  console.log(context);

  return (
    <div className='sign__in'>
      <h1>Sign In</h1>
    </div>
  );
};

export default Signin;
