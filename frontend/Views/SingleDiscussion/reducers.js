import {
  FETCHING_SINGLE_DISC_START,
  FETCHING_SINGLE_DISC_END,
  FETCHING_SINGLE_DISC_SUCCESS,
  FETCHING_SINGLE_DISC_FAILURE,
  FETCHING_OPINIONS_START,
  FETCHING_OPINIONS_END,
  FETCHING_OPINIONS_SUCCESS,
  FETCHING_OPINIONS_FAILURE,
} from './constants';

const initialState = {
  fetchingDiscussion: true,
  discussion: null,
  fetchingOpinions: true,
  opinions: null,
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

    case FETCHING_OPINIONS_START:
      return Object.assign({}, state, {
        fetchingOpinions: true,
      });

    case FETCHING_OPINIONS_END:
      return Object.assign({}, state, {
        fetchingOpinions: false,
      });

    case FETCHING_OPINIONS_SUCCESS:
      return Object.assign({}, state, {
        opinions: action.payload,
        fetchingOpinions: false,
        error: null,
      });

    case FETCHING_SINGLE_DISC_FAILURE:
      return Object.assign({}, state, {
        fetchingOpinions: false,
        error: 'Unable to fetch opinions at the moment.',
      });

    default:
      return state;
  }
};
