import {
  START_FETCHING_DISCUSSIONS,
  STOP_FETCHING_DISCUSSIONS,
  FETCHING_DISCUSSIONS_SUCCESS,
  FETCHING_DISCUSSIONS_FAILURE,
} from './constants';

const initialState = {
  fetchingDiscussions: false,
  discussions: null,
  pinnedDiscussions: null,
  error: null,
};

export const feedReducer = (state = initialState, action) => {
  switch(action.type) {
    case START_FETCHING_DISCUSSIONS:
      return Object.assign({}, state, {
        fetchingDiscussions: true,
      });;

    case STOP_FETCHING_DISCUSSIONS:
      return Object.assign({}, state, {
        fetchingDiscussions: false,
      });;

    case FETCHING_DISCUSSIONS_SUCCESS:
      return Object.assign({}, state, {
        discussions: action.payload,
        fetchingDiscussions: false,
        error: null,
      });

    case FETCHING_DISCUSSIONS_FAILURE:
      return Object.assign({}, state, {
        fetchingDiscussions: false,
        error: 'Unable to fetch discussions at the moment.',
      });

    default:
      return state;
  }
};
