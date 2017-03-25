// helpers
const generateDiscussionSlug = require('../../utilities/tools').generateDiscussionSlug;

// models
const Discussion = require('./model');
const User = require('../user/model');

// controllers
const getAllOpinions = require('../opinion/controller').getAllOpinions;
const getUser = require('../user/controller').getUser;

// get single discussion
const getDiscussion = (discussion_slug) => {
  return new Promise((resolve, reject) => {

    // match discussion slug and retrive discussion from db
    Discussion.findOne({ discussion_slug }, (error, discussion) => {
      if (error) reject(error);

      // add user to the discussion object
      getUser(discussion.user_id).then(
        (user) => {
          discussion._doc.user = user;

          // add opinions to the discussion object
          getAllOpinions(discussion._id).then(
            (opinions) => {
              discussion._doc.opinions = opinions;
              resolve(discussion);
            },
            (error) => { reject(null); }
          );
        },
        (error) => { reject(error); }
      );
    });
  });
};

const createDiscussion = (discussion) => {
  return new Promise((resolve, reject) => {
    const newDiscussion = new Discussion({
      forum_id: discussion.forumId,
      user_id: discussion.userId,
      discussion_slug: generateDiscussionSlug(discussion.title),
      date: new Date(),
      title: discussion.title,
      content: discussion.content,
      favorites: [],
      tags: discussion.tags,
      pinned: discussion.pinned,
    });

    newDiscussion.save((error) => {
      if (error) {
        console.log(error);
        reject(error);
      }

      resolve(newDiscussion);
    });
  });
};

const toggleFavorite = (discussion_id, user_id) => {
  return new Promise((resolve, reject) => {
    Discussion.findById(discussion_id, (error, discussion) => {
      if (error) reject(error);

      // add or remove favorite
      let matched = null;
      for (let i = 0; i < discussion.favorites.length; i++) {
        if (String(discussion.favorites[i]) === String(user_id)) {
          matched = i;
        }
      }

      if (matched === null) {
        discussion.favorites.push(user_id);
      } else {
        discussion.favorites = [
          ...discussion.favorites.slice(0, matched),
          ...discussion.favorites.slice(matched + 1, discussion.favorites.length),
        ];
      }

      discussion.save((error, updatedDiscussion) => {
        if (error) reject(error);
        resolve(updatedDiscussion);
      });
    });
  });

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
  toggleFavorite,
};

// create some dummy forum discussions
// const ObjectId = require('mongoose').Types.ObjectId();
// const discussion = new Discussion({
//   'forum_id': '58c23d2efce8810b6f20b0b3',
//   'discussion_slug': 'a_discussion_from_general_forum_' + ObjectId,
//   'user_id': '58c242e2fb2e150d2570e02b',
//   'date': 1486450269704,
//   'title': 'A discussion from general forum',
//   'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   'favorites': [],
//   'tags': ['react', 'redux', 'mongodb'],
//   'pinned': false,
// });
//
// discussion.save();
