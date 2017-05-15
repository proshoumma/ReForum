import {
  FETCHING_SINGLE_DISC_START,
  FETCHING_SINGLE_DISC_END,
  FETCHING_SINGLE_DISC_SUCCESS,
  FETCHING_SINGLE_DISC_FAILURE,
  TOGGLE_FAVORITE_START,
  TOGGLE_FAVORITE_SUCCESS,
  TOGGLE_FAVORITE_FAILURE,
  POSTING_OPINION_START,
  POSTING_OPINION_SUCCESS,
  POSTING_OPINION_FAILURE,
  DELETE_DISC_START,
  DELETE_DISC_SUCCESS,
  DELETE_DISC_FAILURE,
  DELETE_DISC_REDIRECT,
} from './constants';

const initialState = {
  fetchingDiscussion: true,
  toggleingFavorite: false,
  postingOpinion: false,
  deletingDiscussion: false,
  deletedDiscussion: false,
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

    case POSTING_OPINION_START:
      return Object.assign({}, state, {
        postingOpinion: true,
      });

    case POSTING_OPINION_SUCCESS:
      return Object.assign({}, state, {
        postingOpinion: false,
        error: null,
      });

    case POSTING_OPINION_FAILURE:
      return Object.assign({}, state, {
        postingOpinion: false,
        error: action.payload,
      });

    case DELETE_DISC_START:
      return Object.assign({}, state, {
        deletingDiscussion: true,
      });

    case DELETE_DISC_SUCCESS:
      return Object.assign({}, state, {
        deletingDiscussion: false,
        deletedDiscussion: true,
      });

    case DELETE_DISC_FAILURE:
      return Object.assign({}, state, {
        deletingDiscussion: false,
        deletedDiscussion: false,
      });

    case DELETE_DISC_REDIRECT:
      return Object.assign({}, state, {
        deletedDiscussion: false,
      });

    default:
      return state;
  }
};
