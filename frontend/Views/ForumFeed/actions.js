import {
  START_FETCHING_DISCUSSIONS,
  STOP_FETCHING_DISCUSSIONS,
  FETCHING_DISCUSSIONS_SUCCESS,
  FETCHING_DISCUSSIONS_FAILURE,
  START_FETCHING_PINNED_DISCUSSIONS,
  STOP_FETCHING_PINNED_DISCUSSIONS,
  FETCHING_PINNED_DISCUSSIONS_SUCCESS,
  FETCHING_PINNED_DISCUSSIONS_FAILURE,
} from './constants';
import {
  fetchDiscussions,
  fetchPinnedDiscussions,
} from './api';

export const getDiscussions = (forum_id) => {
  return (dispatch, getState) => {
    dispatch({ type: START_FETCHING_DISCUSSIONS });

    fetchDiscussions(forum_id).then(
      data => dispatch({ type: FETCHING_DISCUSSIONS_SUCCESS, payload: data.data }),
      error => dispatch({ type: FETCHING_DISCUSSIONS_FAILURE })
    );
  };
};

export const getPinnedDiscussions = (forum_id) => {
  return (dispatch, getState) => {
    dispatch({ type: START_FETCHING_PINNED_DISCUSSIONS });

    fetchPinnedDiscussions(forum_id).then(
      data => dispatch({ type: FETCHING_PINNED_DISCUSSIONS_SUCCESS, payload: data.data }),
      error => dispatch({ type: FETCHING_PINNED_DISCUSSIONS_FAILURE })
    );
  };
};
