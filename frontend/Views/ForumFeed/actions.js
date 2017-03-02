import {
  START_FETCHING_DISCUSSIONS,
  STOP_FETCHING_DISCUSSIONS,
  FETCHING_DISCUSSIONS_SUCCESS,
  FETCHING_DISCUSSIONS_FAILURE,
} from './constants';
import { fetchFeed } from './api';

export const getDiscussions = (forum_id) => {
  return (dispatch, getState) => {
    dispatch({ type: START_FETCHING_DISCUSSIONS });

    fetchFeed(forum_id).then(
      data => dispatch({ type: FETCHING_DISCUSSIONS_SUCCESS, payload: data.data }),
      error => dispatch({ type: FETCHING_DISCUSSIONS_FAILURE })
    );
  };
};
