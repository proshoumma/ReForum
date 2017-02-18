const generalForumDiscussions = require('./forum_general').generalForum;
const generalForumPinnedDiscussions = require('./forum_general').generalForumPinned;

export const forum = [
  {
    'forum_id': 1,
    'discussions': [generalForumDiscussions],
    'pinned_discussions': [generalForumPinnedDiscussions],
  },
];
