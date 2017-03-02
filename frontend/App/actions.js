import {
  START_FETCHING_FORUMS,
  STOP_FETCHING_FORUMS,
  FETCHING_FORUMS_SUCCESS,
  FETCHING_FORUMS_FAILURE,
  UPDATECURRENTFORUM,
} from './constants';
import { fetchForums } from './api';

export const getForums = () => {
  return (dispatch, getState) => {
    dispatch({ type: START_FETCHING_FORUMS });

    fetchForums().then(
      data => dispatch({ type: FETCHING_FORUMS_SUCCESS, payload: data.data }),
      error => dispatch({ type: FETCHING_FORUMS_FAILURE })
    );
  };
};

export const updateCurrentForum = (currentForum) => {
  return {
    type: UPDATECURRENTFORUM,
    payload: currentForum,
  };
};
