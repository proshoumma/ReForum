import {
  START_FETCHING_FEED,
  STOP_FETCHING_FEED,
  FETCHING_FEED_SUCCESS,
  FETCHING_FEED_FAILURE,
} from './constants';
import { fetchFeed } from './apis';

export const getFeeds = (forum_id) => {
  return (dispatch, getState) => {
    dispatch({ type: START_FETCHING_FEED });

    fetchFeed(forum_id).then(
      data => dispatch({ type: FETCHING_FEED_SUCCESS, payload: data.data }),
      error => dispatch({ type: FETCHING_FEED_FAILURE })
    );
  };
};
