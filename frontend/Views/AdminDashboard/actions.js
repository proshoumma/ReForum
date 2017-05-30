import {
  GET_ALL_INFO_START,
  GET_ALL_INFO_SUCCESS,
  GET_ALL_INFO_FAILURE,

  GET_FORUMS,
  GET_FORUMS_SUCCESS,
  GET_FORUMS_FAILURE,

  CREATE_FORUM,
  CREATE_FORUM_SUCCESS,
  CREATE_FORUM_FAILURE,

  DELETE_FORUM,
  DELETE_FORUM_SUCCESS,
  DELETE_FORUM_FAILURE,
} from './constants';

import {
  getAdminDashboardInfoAPI,
  getForumsAPI,
  createForumAPI,
  deleteForumAPI,
} from './api';

export const getAdminDashboardInfo = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_ALL_INFO_START });

    getAdminDashboardInfoAPI().then(
      data => dispatch({ type: GET_ALL_INFO_SUCCESS, payload: data.data }),
      error => dispatch({ type: FETCHING_DISCUSSIONS_FAILURE, payload: error })
    );
  };
};

export const getForums = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_FORUMS });

    getForumsAPI().then(
      data => dispatch({ type: GET_FORUMS_SUCCESS }),
      error => dispatch({ type: GET_FORUMS_FAILURE })
    );
  };
};

export const createForum = (forumObj) => {
  return (dispatch, getState) => {
    dispatch({ type: CREATE_FORUM });

    createForumAPI(forumObj).then(
      data => {

        if (data.data.created) { dispatch({ type: CREATE_FORUM_SUCCESS }); }
        else dispatch({ type: CREATE_FORUM_FAILURE });
      },
      error => dispatch({ type: CREATE_FORUM_FAILURE })
    );
  };
};

export const deleteForum = (forumId) => {
  return (dispatch, getState) => {
    dispatch({ type: DELETE_FORUM });

    deleteForumAPI(forumId).then(
      data => {
        if (data.data.deleted) { dispatch({ type: DELETE_FORUM_SUCCESS }); }
        else dispatch({ type: DELETE_FORUM_FAILURE });
      },
      error => dispatch({ type: DELETE_FORUM_FAILURE })
    );
  };
};
