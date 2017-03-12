const _ = require('lodash');
const Discussion = require('./model');

// mock data
const discussionsMock = require('../../mockData/discussions');
const userMock = require('../../mockData/users');

const getDiscussion = (forum_id, discussion_slug) => {
  let discussion = _.find(discussionsMock, {
    forum_id: Number(forum_id),
    discussion_slug: discussion_slug,
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

const updateDiscussion = (forum_id, discussion_slug) => {

};

const deleteDiscussion = (forum_id, discussion_slug) => {

};

module.exports = {
  getDiscussion,
  createDiscussion,
  updateDiscussion,
  deleteDiscussion,
};

// create some dummy forum discussions
// const discussion = new Discussion({
//   'forum_id': '58c23d2efce8810b6f20b0b3',
//   'discussion_slug': 'a_discussion_from_general_forum_1',
//   'user_id': '58c242e2fb2e150d2570e02b',
//   'date': 1486450269704,
//   'title': 'A discussion from general forum',
//   'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   'favorite_count': 2,
//   'tags': ['react', 'redux', 'mongodb'],
//   'pinned': false,
// });
//
// discussion.save();
