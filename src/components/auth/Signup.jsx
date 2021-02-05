import React from 'react';
import AuthContext from '../../contexts/AuthContext';
import ConfirmSignUp from './ConfirmSignup';
import CreateAccount from './CreateAccount';

const Signup = () => {
  const {
    authState: { isSignedUp },
  } = React.useContext(AuthContext);

  return isSignedUp ? <ConfirmSignUp /> : <CreateAccount />;
};

export default Signup;
