import { UPDATECURRENTFORUM } from './constants';

const initialState = {
  currentForum: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATECURRENTFORUM:
      return Object.assign({}, state, {
        currentForum: action.payload,
      });

    default:
      return state;
  }
};
