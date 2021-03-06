import { createContext } from 'react';

const authContext = createContext({
  loading: true,
  isAuthenticated: null,
  isSignedUp: null,
  isIdentityConfirmed: null,
  user: null,
  errors: null,
});

export default authContext;
