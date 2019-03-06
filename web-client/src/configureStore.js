
import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';

import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers
  )

  return store;
}
