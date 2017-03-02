const _ = require('lodash');
const deepPropSearch = require('../../utilities/tools').deepPropSearch;

// forum mock data
const forumsMock = require('../../mockData/forum');
const discussionsMock = require('../../mockData/discussions');
const userMock = require('../../mockData/users');
const opinionMock = require('../../mockData/opinions');

/**
 * forum controllers
 */

/**
 * get all forums
 * @return {array} an array of forum objects
 */
const getAllForums = () => {
  return forumsMock;
};

/**
 * get discussion of a specific forum
 * @param  {string} forum_id  froum id from url parameter
 * @param  {bool} pinned      get the pinned discussions
 * @return {array}            an array of discussion objects
 */
const getDiscussions = (forum_id, pinned) => {
  // TODO: forum_id validation

  // get the discussions based on type
  let discussions = pinned ?
      _.find(discussionsMock, { forum_id: Number(forum_id) }).pinned_discussions
    : _.find(discussionsMock, { forum_id: Number(forum_id) }).discussions;

  // attach user and opinion_count to the discussion
  discussions = discussions.map((eachDiscussion) => {
    const opinions = _.find(opinionMock, {
      forum_id: Number(forum_id),
      discussion_id: eachDiscussion.discussion_id,
    });

    return Object.assign({}, eachDiscussion, {
      user: _.find(userMock, { user_id: eachDiscussion.user_id }),
      opinion_count: opinions ? opinions.opinions.length : 0,
    });
  });

  return discussions;
};

module.exports = {
  getAllForums,
  getDiscussions,
};
