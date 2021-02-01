import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';

import config from './aws-exports.js';
import AuthProvider from './contexts/AuthProvider';

import App from './App';
import './main.css';

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('simple__react__amplify__app')
);
