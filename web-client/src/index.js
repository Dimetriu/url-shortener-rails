import React from 'react';
import { render } from 'react-dom';
import './index.css';
import UrlShortener from './components/UrlShortener.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
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

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <UrlShortener />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
