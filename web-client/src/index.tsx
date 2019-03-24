import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import App from './components/App';

// import * as serviceWorker from './serviceWorker';
// import axios from 'axios';
// import {
//   AxiosProvider,
//   Request,
//   Get,
//   Delete,
//   Head,
//   Post,
//   Put,
//   Patch,
//   withAxios
// } from 'react-axios';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
