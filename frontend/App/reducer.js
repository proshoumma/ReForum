import { combineReducers } from 'redux';

// root reducer for app
const rootReducer = combineReducers({
  user: (state = {}, action) => { return state; },
});

export default rootReducer;
