import {
  FETCHING_SINGLE_DISC_START,
  FETCHING_SINGLE_DISC_END,
  FETCHING_SINGLE_DISC_SUCCESS,
  FETCHING_SINGLE_DISC_FAILURE,
  TOGGLE_FAVORITE_START,
  TOGGLE_FAVORITE_SUCCESS,
  TOGGLE_FAVORITE_FAILURE,
} from './constants';

const initialState = {
  fetchingDiscussion: true,
  toggleingFavorite: false,
  discussion: null,
  error: null,
};

export const singleDiscussionReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SINGLE_DISC_START:
      return Object.assign({}, state, {
        fetchingDiscussion: true,
      });

    case FETCHING_SINGLE_DISC_END:
      return Object.assign({}, state, {
        fetchingDiscussion: false,
      });

    case FETCHING_SINGLE_DISC_SUCCESS:
      return Object.assign({}, state, {
        discussion: action.payload,
        fetchingDiscussion: false,
        error: null,
      });

    case FETCHING_SINGLE_DISC_FAILURE:
      return Object.assign({}, state, {
        fetchingDiscussion: false,
        error: 'Unable to fetch discussion at the moment.',
      });

    case TOGGLE_FAVORITE_START:
      return Object.assign({}, state, {
        toggleingFavorite: true,
      });

    case TOGGLE_FAVORITE_SUCCESS:
    case TOGGLE_FAVORITE_FAILURE:
      return Object.assign({}, state, {
        toggleingFavorite: false,
      });

    default:
      return state;
  }
};
