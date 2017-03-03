import {
  START_FETCHING_DISCUSSIONS,
  STOP_FETCHING_DISCUSSIONS,
  FETCHING_DISCUSSIONS_SUCCESS,
  FETCHING_DISCUSSIONS_FAILURE,
  START_FETCHING_PINNED_DISCUSSIONS,
  STOP_FETCHING_PINNED_DISCUSSIONS,
  FETCHING_PINNED_DISCUSSIONS_SUCCESS,
  FETCHING_PINNED_DISCUSSIONS_FAILURE,
} from './constants';

const initialState = {
  fetchingDiscussions: true,
  discussions: null,
  fetchingPinnedDiscussions: true,
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

    case START_FETCHING_PINNED_DISCUSSIONS:
      return Object.assign({}, state, {
        fetchingPinnedDiscussions: true,
      });;

    case STOP_FETCHING_PINNED_DISCUSSIONS:
      return Object.assign({}, state, {
        fetchingPinnedDiscussions: false,
      });;

    case FETCHING_PINNED_DISCUSSIONS_SUCCESS:
      return Object.assign({}, state, {
        pinnedDiscussions: action.payload,
        fetchingPinnedDiscussions: false,
        error: null,
      });

    case FETCHING_PINNED_DISCUSSIONS_FAILURE:
      return Object.assign({}, state, {
        fetchingPinnedDiscussions: false,
        error: 'Unable to fetch pinned discussions at the moment.',
      });

    default:
      return state;
  }
};
