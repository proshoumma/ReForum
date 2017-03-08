const _ = require('lodash');
const Forum = require('./model');

// forum mock data
const forumsMock = require('../../mockData/forum');
const discussionsMock = require('../../mockData/discussions');
const userMock = require('../../mockData/users');
const opinionMock = require('../../mockData/opinions');

// get all the forums list
const getAllForums = new Promise((resolve, reject) => {
  Forum.find((err, res) => {
    if (err) {
      console.log(err);
      reject('Something is wrong with getAllForums');
    } else {
      resolve(res);
    }
  });
});

/**
 * get discussion of a specific forum
 * @param  {string} forum_id  froum id from url parameter
 * @param  {bool} pinned      get the pinned discussions
 * @return {array}            an array of discussion objects
 */
const getDiscussions = (forum_id, pinned) => {
  // TODO: forum_id validation

  // get the discussions based on type
  const isPinned = pinned ? true : false;
  let discussions = discussionsMock.filter((eachDiscussion) => {
    return (
      eachDiscussion.forum_id === Number(forum_id) &&
      eachDiscussion.pinned === isPinned
    );
  });

  // attach user and opinion_count to the discussion
  discussions = discussions.map((eachDiscussion) => {
    const opinions = opinionMock.filter((opinion) => {
      return (
        opinion.forum_id === Number(forum_id) &&
        opinion.discussion_id === Number(eachDiscussion.discussion_id)
      );
    });

    return Object.assign({}, eachDiscussion, {
      user: _.find(userMock, { user_id: eachDiscussion.user_id }),
      opinion_count: opinions ? opinions.length : 0,
    });
  });

  return discussions;
};

module.exports = {
  getAllForums,
  getDiscussions,
};
