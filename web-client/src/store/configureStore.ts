
// import {
//   applyMiddleware,
//   createStore
// } from 'redux';

// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from '../reducers';
// import loggerMiddleware from '../middleware/logger';
// import monitorReducerEnhancer from '../enhancers/monitorReducer';

// export default function configureStore(preloadedState: any) {
//   const middlewares = [loggerMiddleware, thunkMiddleware]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
//   const composedEnhancers = composeWithDevTools(...enhancers)

//   const store = createStore(
//     rootReducer,
//     preloadedState,
//     composedEnhancers
//   )

//   return store;
// }

import {
  applyMiddleware,
  createStore
} from 'redux';
import rootReducer from '../reducers';

const configureStore = () => {
  return { ...createStore(rootReducer) }
}

export default configureStore;
