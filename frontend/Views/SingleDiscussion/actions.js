import _ from 'lodash';
import {
  FETCHING_SINGLE_DISC_START,
  FETCHING_SINGLE_DISC_END,
  FETCHING_SINGLE_DISC_SUCCESS,
  FETCHING_SINGLE_DISC_FAILURE,
} from './constants';
import {
  fetchSingleDiscussion,
  fetchOpinions,
} from './api';

export const getDiscussion = (discussionSlug) => {
  return (dispatch, getState) => {
    dispatch({ type: FETCHING_SINGLE_DISC_START });
    fetchSingleDiscussion(discussionSlug).then(
      data => dispatch({ type: FETCHING_SINGLE_DISC_SUCCESS, payload: data.data }),
      error => dispatch({ type: FETCHING_SINGLE_DISC_FAILURE })
    );
  };
};
