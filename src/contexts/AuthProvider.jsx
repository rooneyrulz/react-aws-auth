import React from 'react';

import AuthContext from './AuthContext';
import AuthReducer from '../reducers/auth';

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = React.useReducer(AuthReducer, {
    loading: true,
    isAuthenticated: null,
    isSignedUp: null,
    user: null,
    errors: null,
  });

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
