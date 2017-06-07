import _ from 'lodash';
import {
  START_FETCHING_FORUMS,
  STOP_FETCHING_FORUMS,
  FETCHING_FORUMS_SUCCESS,
  FETCHING_FORUMS_FAILURE,
  UPDATECURRENTFORUM,
  START_FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILURE,
} from './constants';
import {
  fetchForums,
  fetchUser,
  signOut,
} from './api';

/**
 * get all forum list
 * @return {action}
 */
export const getForums = () => {
  return (dispatch, getState) => {
    dispatch({ type: START_FETCHING_FORUMS });

    fetchForums().then(
      data => dispatch({ type: FETCHING_FORUMS_SUCCESS, payload: data.data }),
      error => dispatch({ type: FETCHING_FORUMS_FAILURE })
    );
  };
};

/**
 * update current forum when route change occurs
 * @param  {String} currentForum
 * @return {action}
 */
export const updateCurrentForum = (currentForum) => {
  return {
    type: UPDATECURRENTFORUM,
    payload: currentForum,
  };
};

/**
 * get the current user from server
 * @return {action}
 */
export const getUser = () => {
  return (dispatch, getState) => {
    dispatch({ type: START_FETCHING_USER });

    fetchUser().then(
      data => {
        if (!data.data._id) dispatch({ type: FETCHING_USER_FAILURE });
        else dispatch({ type: FETCHING_USER_SUCCESS, payload: data.data });
      },
      error => dispatch({ type: FETCHING_USER_FAILURE })
    );
  };
};
