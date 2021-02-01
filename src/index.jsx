import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';

import App from './App';
import config from './aws-exports.js';

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('simple__react__amplify__app')
);
