import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import UrlShortener from './components/UrlShortener.jsx';

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

// const middlewareEnhancer = applyMiddleware(
//   loggerMiddleware,
//   thunkMiddleware
// )

// const composedEnhancers = compose(
//   middlewareEnhancer,
//   monitorReducerEnhancer
// )

// const store = createStore(
//   rootReducer,
//   undefined,
//   composedEnhancers
// )

const store = configureStore()

render(
  <Provider store={store}>
    <UrlShortener />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
