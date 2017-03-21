import {
  POSTING_DISCUSSION_START,
  POSTING_DISCUSSION_END,
  POSTING_DISCUSSION_SUCCESS,
  POSTING_DISCUSSION_FAILURE,
} from './constants';
import { postDiscussionApi } from './api';

export const postDiscussion = (discussion) => {
  return (dispatch, getState) => {
    dispatch({ type: POSTING_DISCUSSION_START });
    postDiscussionApi(discussion).then(
      (data) => {
        dispatch({ type: POSTING_DISCUSSION_SUCCESS });
        console.log(data.data);
      },
      (error) => {
        dispatch({ type: POSTING_DISCUSSION_FAILURE });
        console.log(error);
      }
    );
  };
};
