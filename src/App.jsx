import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const App = () => {
  return (
    <div className='App' style={style.app}>
      <h1>Welcome</h1>
      <AmplifySignOut />
    </div>
  );
};

const style = {
  app: {
    width: '60%',
    margin: '100px auto 0',
    textAlign: 'center',
  },
};

export default withAuthenticator(App);
