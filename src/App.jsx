import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Context
import AuthContext from './contexts/AuthContext';
import { loadUser } from './actions/auth';

// Components
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/Signup';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import PublicRoute from './components/routing/PublicRoute';

const App = () => {
  const { dispatch } = React.useContext(AuthContext);
  React.useEffect(() => {
    dispatch(loadUser(dispatch));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <header></header>
      <main>
        <Switch>
          <PublicRoute exact path='/sign-in' component={SignIn} />
          <PublicRoute exact path='/sign-up' component={SignUp} />
          <PrivateRoute exact path='/' component={Dashboard} />
        </Switch>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
};

export default App;
