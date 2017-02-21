import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';

import { appReducer } from './reducers';

// root reducer for app
const rootReducer = combineReducers({
  user: (state = {}, action) => { return state; },
  app: appReducer,
});

// dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// application store
let store = createStore(
  rootReducer,
  /* preloaded state, */
  composeEnhancers(
    applyMiddleware()
  )
);

export default store;
