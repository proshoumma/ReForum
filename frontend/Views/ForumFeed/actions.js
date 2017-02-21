import axios from 'axios';
import {
  START_FETCHING_FEED,
  STOP_FETCHING_FEED,
  FETCHING_FEED_SUCCESS,
  FETCHING_FEED_FAILURE,
} from './constants';

const fetchFeed = () => {
  return axios.get('api/forum/1');
};

export const getFeeds = (forum) => {
  return (dispatch, getState) => {
    dispatch({ type: START_FETCHING_FEED });

    fetchFeed().then(
      data => dispatch({ type: FETCHING_FEED_SUCCESS, payload: data }),
      error => dispatch({ type: FETCHING_FEED_FAILURE })
    );
  };
};
