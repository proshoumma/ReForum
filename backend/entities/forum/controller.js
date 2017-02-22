const _ = require('lodash');
const deepPropSearch = require('../../utilities/tools').deepPropSearch;

// forum mock data
const forumsMock = require('../../mockData/forum');
const discussionsMock = require('../../mockData/discussions');
const userMock = require('../../mockData/users');

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

  // attach users to the discussion
  discussions = deepPropSearch(discussions, (prop, obj) => {
    if (prop === 'user_id') { obj.user =  _.find(userMock, { user_id: obj[prop] }); }
  });

  return discussions;
};

module.exports = {
  getAllForums,
  getDiscussions,
};
