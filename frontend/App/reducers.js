import {
  START_FETCHING_FORUMS,
  STOP_FETCHING_FORUMS,
  FETCHING_FORUMS_SUCCESS,
  FETCHING_FORUMS_FAILURE,
  UPDATECURRENTFORUM,
} from './constants';

const initialState = {
  fetchingForums: false,
  forums: null,
  currentForum: 'general',
  error: false,
};

/**
 * reducer for top level app state
 */
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_FORUMS:
      return Object.assign({}, state, {
        fetchingForums: true,
      });;

    case STOP_FETCHING_FORUMS:
      return Object.assign({}, state, {
        fetchingForums: false,
      });;

    case FETCHING_FORUMS_SUCCESS:
      return Object.assign({}, state, {
        forums: action.payload,
        fetchingForums: false,
        error: false,
      });

    case FETCHING_FORUMS_FAILURE:
      return Object.assign({}, state, {
        fetchingForums: false,
        error: 'Unable to fetch forums',
      });

    case UPDATECURRENTFORUM:
      return Object.assign({}, state, {
        currentForum: action.payload,
      });

    default:
      return state;
  }
};
