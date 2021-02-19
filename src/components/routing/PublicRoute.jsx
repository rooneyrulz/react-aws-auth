import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { authState } = React.useContext(AuthContext);
  return (
    <Route
      render={(props) => {
        if (authState.loading) {
          return <p>Loading</p>;
        } else if (!authState.isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/' />;
        }
      }}
      {...rest}
    />
  );
};

export default PublicRoute;
