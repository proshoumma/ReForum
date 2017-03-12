import _ from 'lodash';
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

/**
 * find the id for current forum
 * @param  {Object} state   the state object
 * @param  {String} forum   current forum
 * @return {Number}         the forum id
 */
const findForumId = (state, forum) => {
  const { forums } = state.app;
  return _.find(forums, { forum_slug: forum })._id;
};

/**
 * action to fetch forum discussions
 * @param  {String}  forum               current forum slug
 * @param  {Boolean} [feedChanged=false] if the feed has been changed
 * @return {thunk}
 */
export const getDiscussions = (forum, feedChanged) => {
  return (dispatch, getState) => {
    const discussions = getState().feed.discussions;

    // check data fetching necessity
    if (feedChanged || _.isEmpty(discussions)) {
      // get the forum id from state
      const forumId = findForumId(getState(), forum);

      // start fetching discussions
      dispatch({ type: START_FETCHING_DISCUSSIONS });
      fetchDiscussions(forumId).then(
        data => dispatch({ type: FETCHING_DISCUSSIONS_SUCCESS, payload: data.data }),
        error => dispatch({ type: FETCHING_DISCUSSIONS_FAILURE })
      );
    };
  };
};

/**
 * action to fetch forum pinned discussions
 * @param  {String}  forum                current forum
 * @param  {Boolean} [feedChanged=false]  if the feed has been changed
 * @return {thunk}
 */
export const getPinnedDiscussions = (forum, feedChanged) => {
  return (dispatch, getState) => {
    const pinnedDiscussions = getState().feed.pinnedDiscussions;

    // check data fetching necessity
    if (feedChanged || _.isEmpty(pinnedDiscussions)) {
      // get the forum id from state
      const forumId = findForumId(getState(), forum);

      // start fetching pinned discussions
      dispatch({ type: START_FETCHING_PINNED_DISCUSSIONS });
      fetchPinnedDiscussions(forumId).then(
        data => dispatch({ type: FETCHING_PINNED_DISCUSSIONS_SUCCESS, payload: data.data }),
        error => dispatch({ type: FETCHING_PINNED_DISCUSSIONS_FAILURE })
      );
    };
  };
};
