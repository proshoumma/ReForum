import {
  GET_ALL_INFO_START,
  GET_ALL_INFO_SUCCESS,
  GET_ALL_INFO_FAILURE,

  CREATE_FORUM,
  CREATE_FORUM_SUCCESS,
  CREATE_FORUM_FAILURE,

  DELETE_FORUM,
  DELETE_FORUM_SUCCESS,
  DELETE_FORUM_FAILURE,
} from './constants';

import {
  getAdminDashboardInfoAPI,
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

export const createForum = (forumObj) => {
  return (dispatch, getState) => {
    dispatch({ type: CREATE_FORUM });

    createForumAPI(forumObj).then(
      forumData => {
        // get admin info again to refresh the infos
        getAdminDashboardInfoAPI().then(
          data => {
            dispatch({ type: GET_ALL_INFO_SUCCESS, payload: data.data });

            if (forumData.data.created) { dispatch({ type: CREATE_FORUM_SUCCESS }); }
            else dispatch({ type: CREATE_FORUM_FAILURE });
          },
          error => dispatch({ type: FETCHING_DISCUSSIONS_FAILURE, payload: error })
        );
      },
      error => dispatch({ type: CREATE_FORUM_FAILURE })
    );
  };
};

export const deleteForum = (forumId) => {
  return (dispatch, getState) => {
    dispatch({ type: DELETE_FORUM });

    deleteForumAPI(forumId).then(
      forumData => {
        dispatch({ type: GET_ALL_INFO_START });

        // get admin info again to refresh the infos
        getAdminDashboardInfoAPI().then(
          data => {
            dispatch({ type: GET_ALL_INFO_SUCCESS, payload: data.data });

            if (forumData.data.deleted) { dispatch({ type: DELETE_FORUM_SUCCESS }); }
            else dispatch({ type: DELETE_FORUM_FAILURE });
          },
          error => dispatch({ type: FETCHING_DISCUSSIONS_FAILURE, payload: error })
        );
      },
      error => dispatch({ type: DELETE_FORUM_FAILURE })
    );
  };
};
