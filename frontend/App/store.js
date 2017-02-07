import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';

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
