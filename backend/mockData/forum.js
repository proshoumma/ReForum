const generalForumDiscussions = require('./forum_general').generalForum;
const generalForumPinnedDiscussions = require('./forum_general').generalForumPinned;

const forum = [
  {
    'forum_id': 1,
    'discussions': [generalForumDiscussions],
    'pinned_discussions': [generalForumPinnedDiscussions],
  },
];

module.exports = forum;
