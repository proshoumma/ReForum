import _ from 'lodash';
import {
  FETCHING_SINGLE_DISC_START,
  FETCHING_SINGLE_DISC_END,
  FETCHING_SINGLE_DISC_SUCCESS,
  FETCHING_SINGLE_DISC_FAILURE,
  FETCHING_OPINIONS_START,
  FETCHING_OPINIONS_END,
  FETCHING_OPINIONS_SUCCESS,
  FETCHING_OPINIONS_FAILURE,
} from './constants';
import {
  fetchSingleDiscussion,
  fetchOpinions,
} from './api';

export const getDiscussion = (forumSlug, discussionSlug) => {
  return (dispatch, getState) => {
    const forumId = _.find(getState().app.forums, { forum_slug: forumSlug }).forum_id;

    dispatch({ type: FETCHING_SINGLE_DISC_START });
    fetchSingleDiscussion(forumId, discussionSlug).then(
      data => dispatch({ type: FETCHING_SINGLE_DISC_SUCCESS, payload: data.data }),
      error => dispatch({ type: FETCHING_SINGLE_DISC_FAILURE })
    );
  };
};

export const getOpinions = (forumSlug, discussionSlug) => {
  return (dispatch, getState) => {
    const forumId = _.find(getState().app.forums, { forum_slug: forumSlug }).forum_id;

    dispatch({ type: FETCHING_OPINIONS_START });
    fetchOpinions(forumId, discussionSlug).then(
      data => dispatch({ type: FETCHING_OPINIONS_SUCCESS, payload: data.data }),
      error => dispatch({ type: FETCHING_OPINIONS_FAILURE })
    );
  };
};
