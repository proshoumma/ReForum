import {
  START_FETCHING_DISCUSSIONS,
  STOP_FETCHING_DISCUSSIONS,
  FETCHING_DISCUSSIONS_SUCCESS,
  FETCHING_DISCUSSIONS_FAILURE,

  START_FETCHING_PINNED_DISCUSSIONS,
  STOP_FETCHING_PINNED_DISCUSSIONS,
  FETCHING_PINNED_DISCUSSIONS_SUCCESS,
  FETCHING_PINNED_DISCUSSIONS_FAILURE,

  UPDATE_SORTING_METHOD,
  INVALID_FORUM,
} from './constants';

const initialState = {
  fetchingDiscussions: true,
  discussions: null,
  fetchingPinnedDiscussions: true,
  pinnedDiscussions: null,
  sortingMethod: 'date',
  error: null,
};

export const feedReducer = (state = initialState, action) => {
  switch(action.type) {
    case START_FETCHING_DISCUSSIONS:
      return Object.assign({}, state, {
        fetchingDiscussions: true,
        error: null,
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
        error: null,
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


    case UPDATE_SORTING_METHOD:
      return Object.assign({}, state, {
        sortingMethod: action.payload,
      });

    case INVALID_FORUM:
      return Object.assign({}, state, {
        error: 'Sorry, couldn\'t find the forum.',
        fetchingPinnedDiscussions: false,
        fetchingDiscussions: false,
      });

    default:
      return state;
  }
};
