// helpers
const generateDiscussionSlug = require('../../utilities/tools').generateDiscussionSlug;
const getAllOpinions = require('../opinion/controller').getAllOpinions;
const getUser = require('../user/controller').getUser;

// models
const Discussion = require('./model');

// get single discussion
const getDiscussion = (discussion_slug, discussion_id) => {
  return new Promise((resolve, reject) => {
    let findObject = {};
    if (discussion_slug) findObject.discussion_slug = discussion_slug;
    if (discussion_id) findObject._id = discussion_id;

    Discussion
    .findOne(findObject)
    .populate('forum')
    .populate('user')
    .lean()
    .exec((error, result) => {
      if (error) reject(error);
      else {
        // add opinions to the discussion object
        getAllOpinions(result._id).then(
          (opinions) => {
            result.opinions = opinions;
            resolve(result);
          },
          (error) => { reject(error); }
        );
      }
    });
  });
};

const createDiscussion = (discussion) => {
  return new Promise((resolve, reject) => {
    const newDiscussion = new Discussion({
      forum_id: discussion.forumId,
      forum: discussion.forumId,
      user_id: discussion.userId,
      user: discussion.userId,
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
