const _ = require('lodash');

// mock data
const discussionsMock = require('../../mockData/discussions');
const userMock = require('../../mockData/users');

const getDiscussion = (forum_id, discussion_id) => {
  let discussion = _.find(discussionsMock, {
    forum_id: Number(forum_id),
    discussion_id: Number(discussion_id),
  });

  if (discussion) {
    // attach user to the discussion
    discussion = Object.assign({}, discussion, {
      user: _.find(userMock, { user_id: discussion.user_id }),
    });
  }

  return discussion;
};

const createDiscussion = (forum_id) => {

};

const updateDiscussion = (forum_id, discussion_id) => {

};

const deleteDiscussion = (forum_id, discussion_id) => {

};

module.exports = {
  getDiscussion,
  createDiscussion,
  updateDiscussion,
  deleteDiscussion,
};
