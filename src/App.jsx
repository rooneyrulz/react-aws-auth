import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/Signup';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <header></header>
      <main>
        <Switch>
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
};

export default App;
