import {
  POSTING_DISCUSSION_START,
  POSTING_DISCUSSION_SUCCESS,
  POSTING_DISCUSSION_FAILURE,
} from './constants';

const initialState = {
  error: null,
  postingDiscussion: false,
};

export const newDiscussionReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTING_DISCUSSION_START:
      return Object.assign({}, state, {
        postingDiscussion: true,
      });

    case POSTING_DISCUSSION_SUCCESS:
      return Object.assign({}, state, {
        postingDiscussion: false,
        error: null,
      });

    case POSTING_DISCUSSION_FAILURE:
      return Object.assign({}, state, {
        postingDiscussion: false,
        error: action.payload || 'Unable to post discussion.',
      });

    default:
      return state;
  }
};
