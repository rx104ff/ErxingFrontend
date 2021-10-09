import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

export const API_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';
export const ACCESS_TOKEN = 'accessToken';
export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 15;
export const EMAIL_MAX_LENGTH = 40;

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

ReactDOM.render(
  <Router history={history}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
