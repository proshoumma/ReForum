import {
  POSTING_DISCUSSION_START,
  POSTING_DISCUSSION_END,
  POSTING_DISCUSSION_SUCCESS,
  POSTING_DISCUSSION_FAILURE,
  UPDATE_DISCUSSION_TITLE,
  UPDATE_DISCUSSION_CONTENT,
  UPDATE_DISCUSSION_PIN_STATUS,
  UPDATE_DISCUSSION_TAGS,
  CLEAR_SUCCESS_MESSAGE,
} from './constants';
import { postDiscussionApi } from './api';

export const postDiscussion = (userId, forumId) => {
  return (dispatch, getState) => {
    dispatch({ type: POSTING_DISCUSSION_START });

    // validate discussion inputs
    const {
      title,
      content,
      tags,
      pinned,
    } = getState().newDiscussion;

    let validated = true;

    if (!userId || !forumId) {
      validated = false;
      return dispatch({
        type: POSTING_DISCUSSION_FAILURE,
        payload: 'Something is wrong with user/forum.',
      });
    }

    if (title === null || title.length < 20) {
      validated = false;
      return dispatch({
        type: POSTING_DISCUSSION_FAILURE,
        payload: 'Title should be at least 20 characters.',
      });
    }

    if (content === null || content.length < 100) {
      validated = false;
      return dispatch({
        type: POSTING_DISCUSSION_FAILURE,
        payload: 'Content should be at least 100 characters.',
      });
    }

    if (tags === null || tags.length === 0) {
      validated = false;
      return dispatch({
        type: POSTING_DISCUSSION_FAILURE,
        payload: 'Please provide some tags.',
      });
    }

    // make api call if post is validated
    if (validated) {
      postDiscussionApi({
        userId,
        forumId,
        title,
        content,
        tags,
        pinned,
      }).then(
        (data) => {
          if (data.data.postCreated === true) {
            dispatch({ type: POSTING_DISCUSSION_SUCCESS });
            setTimeout(() => { dispatch({ type: CLEAR_SUCCESS_MESSAGE }); }, 2000);
          } else {
            dispatch({
              type: POSTING_DISCUSSION_FAILURE,
              payload: 'Something is wrong at our server end. Please try again later',
            });
          }
        },
        (error) => {
          dispatch({
            type: POSTING_DISCUSSION_FAILURE,
            payload: error,
          });
        }
      );
    }
  };
};

export const updateDiscussionTitle = (value) => {
  return {
    type: UPDATE_DISCUSSION_TITLE,
    payload: value,
  };
};

export const updateDiscussionContent = (value) => {
  return {
    type: UPDATE_DISCUSSION_CONTENT,
    payload: value,
  };
};

export const updateDiscussionPinStatus = (value) => {
  return {
    type: UPDATE_DISCUSSION_PIN_STATUS,
    payload: value,
  };
};

export const updateDiscussionTags = (value) => {
  return {
    type: UPDATE_DISCUSSION_TAGS,
    payload: value,
  };
};
