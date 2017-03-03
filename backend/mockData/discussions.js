const discussions = [
  {
    forum_id: 0,
    pinned_discussions: [
      {
        'discussion_id': 4,
        'discussion_slug': 'a_pinned_discussion_4',
        'user_id': 1,
        'date': 1486450269704,
        'title': 'A pinned discussion',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'favorite_count': 2,
        'tags': ['react', 'redux', 'mongodb'],
      },
      {
        'discussion_id': 5,
        'discussion_slug': 'another_pinned_discussion_5',
        'user_id': 3,
        'date': 1486450269704,
        'title': 'Another pinned discussion',
        'content': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'favorite_count': 3,
        'tags': ['react', 'redux'],
      },
      {
        'discussion_id': 6,
        'discussion_slug': 'one_another_pinned_discussion_6',
        'user_id': 2,
        'date': 1486450269704,
        'title': 'One another pinned discussion',
        'content': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'favorite_count': 5,
        'tags': ['express', 'mongodb'],
      },
    ],
    discussions: [
      {
        'discussion_id': 1,
        'discussion_slug': 'a_discussion_from_general_forum_1',
        'user_id': 1,
        'date': 1486450269704,
        'title': 'A discussion from general forum',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'favorite_count': 2,
        'tags': ['react', 'redux', 'mongodb'],
      },
      {
        'discussion_id': 2,
        'discussion_slug': 'another_discussion_1',
        'user_id': 3,
        'date': 1486450269704,
        'title': 'Another discussion',
        'content': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'favorite_count': 3,
        'tags': ['react', 'redux'],
      },
      {
        'discussion_id': 3,
        'discussion_slug': 'one_another_discussion_1',
        'user_id': 2,
        'date': 1486450269704,
        'title': 'One another discussion',
        'content': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'favorite_count': 5,
        'tags': ['express', 'mongodb'],
      },
    ],
  },

  {
    forum_id: 1,
    pinned_discussions: [],
    discussions: [],
  },

  {
    forum_id: 2,
    pinned_discussions: [],
    discussions: [],
  },
];

module.exports = discussions;
