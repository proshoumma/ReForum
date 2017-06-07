import {
  POSTING_DISCUSSION_START,
  POSTING_DISCUSSION_SUCCESS,
  POSTING_DISCUSSION_FAILURE,

  UPDATE_DISCUSSION_TITLE,
  UPDATE_DISCUSSION_CONTENT,
  UPDATE_DISCUSSION_PIN_STATUS,
  UPDATE_DISCUSSION_TAGS,

  CLEAR_SUCCESS_MESSAGE,
} from './constants';

const initialState = {
  postingSuccess: false,
  errorMsg: null,
  postingDiscussion: false,
  title: '',
  content: null,
  tags: [],
  pinned: false,
};

export const newDiscussionReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTING_DISCUSSION_START:
      return Object.assign({}, state, {
        postingDiscussion: true,
      });

    case POSTING_DISCUSSION_SUCCESS:
      return Object.assign({}, initialState, {
        postingSuccess: true,
        postingDiscussion: false,
        errorMsg: null,
      });

    case POSTING_DISCUSSION_FAILURE:
      return Object.assign({}, state, {
        postingSuccess: false,
        postingDiscussion: false,
        errorMsg: action.payload || 'Unable to post discussion.',
      });

    case CLEAR_SUCCESS_MESSAGE:
      return Object.assign({}, initialState, {
        postingSuccess: false,
      });

    case UPDATE_DISCUSSION_TITLE:
      return Object.assign({}, state, {
        title: action.payload,
      });

    case UPDATE_DISCUSSION_CONTENT:
      return Object.assign({}, state, {
        content: action.payload,
      });

    case UPDATE_DISCUSSION_PIN_STATUS:
      return Object.assign({}, state, {
        pinned: action.payload,
      });

    case UPDATE_DISCUSSION_TAGS:
      return Object.assign({}, state, {
        tags: action.payload,
      });

    default:
      return state;
  }
};
