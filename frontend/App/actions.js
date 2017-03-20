import _ from 'lodash';
import {
  START_FETCHING_FORUMS,
  STOP_FETCHING_FORUMS,
  FETCHING_FORUMS_SUCCESS,
  FETCHING_FORUMS_FAILURE,
  UPDATECURRENTFORUM,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILURE,
  SIGNOUT_USER_SUCCESS,
  SIGNOUT_USER_FAILURE,
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

export const getUser = () => {
  return (dispatch, getState) => {
    fetchUser().then(
      data => {
        if (!data.data._id) dispatch({ type: FETCHING_USER_FAILURE });
        else dispatch({ type: FETCHING_USER_SUCCESS, payload: data.data });
      },
      error => dispatch({ type: FETCHING_USER_FAILURE })
    );
  };
};

export const signOutUser = () => {
  return (dispatch, getState) => {
    signOut().then (
      data => {
        if (data.data.authenticated === false) dispatch({ type: SIGNOUT_USER_SUCCESS });
        else dispatch({ type: SIGNOUT_USER_FAILURE });
      }
    );
  };
};
