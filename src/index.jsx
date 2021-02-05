import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { debugContextDevtool } from 'react-context-devtool';

import config from './aws-exports.js';
import AuthProvider from './contexts/AuthProvider';

import App from './App';
import './main.css';

Amplify.configure(config);

const root = document.getElementById('simple__react__amplify__app');

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  root
);

debugContextDevtool(root);
