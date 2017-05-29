const waterfall = require('async/waterfall');

// models
const Discussion = require('../discussion/model');
const Opinion = require('../opinion/model');
const Forum = require('../forum/model');
const User = require('../user/model');

const getAdminDashInfo = () => {
  return new Promise((resolve, reject) => {
    waterfall([
      (callback) => {
        Discussion.count().exec((error, count) => {
          callback(null, { discussionCount: count });
        });
      },
      (lastResult, callback) => {
        Opinion.count().exec((error, count) => {
          callback(null, Object.assign(lastResult, { opinionCount: count }));
        });
      },
      (lastResult, callback) => {
        Forum.count().exec((error, count) => {
          callback(null, Object.assign(lastResult, { forumCount: count }));
        });
      },
      (lastResult, callback) => {
        User.count().exec((error, count) => {
          callback(null, Object.assign(lastResult, { userCount: count }));
        });
      },
      (lastResult, callback) => {
        User
        .find({})
        .lean()
        .exec((error, users) => {
          callback(null, Object.assign(lastResult, { users: users }));
        });
      },
      (lastResult, callback) => {
        Forum
        .find({})
        .sort({ date: -1 })
        .lean()
        .exec((error, forums) => {
          callback(null, Object.assign(lastResult, { forums }));
        });
      },
      (lastResult, callback) => {
        Opinion
        .find({})
        .sort({ date: -1 })
        .lean()
        .exec((error, opinions) => {
          callback(null, Object.assign(lastResult, { opinions }));
        });
      },
    ], (error, result) => {
      if (error) { console.log(error); reject(error); }
      else resolve(result);
    });
  });
};

const createForum = ({ forum_name, forum_slug }) => {
  return new Promise((resolve, reject) => {
    // check if the forum exists
    Forum
    .findOne({ forum_slug })
    .exec((error, forum) => {
      if (error) { console.log(error); reject({ serverError: true }); }
      else if (forum) { reject({ alreadyExists: true }); }
      else {
        // forum does not exists, so create a new one
        const newForum = new Forum({
          forum_slug,
          forum_name,
        });

        newForum.save((error) => {
          if (error) { console.log(error); reject({ created: false }); }
          else { resolve(Object.assign({}, newForum, { created: true })); }
        });
      }
    });
  });
};

const deleteForum = ({ forum_slug }) => {
  return new Promise((resolve, reject) => {
    // first find the id of the forum
    Forum.findOne({ forum_slug }).exec((error, forum) => {
      if (error) { console.log(error); reject({ deleted: false }); }
      else if (!forum) { reject({ doesNotExist: true }); }
      else {
        const forum_id = forum._id;

        // we've got the forum id
        // now first remove any discussion regarding the forum
        Discussion.remove({ forum_id }).exec((error) => {
          if (error) { console.log(error); reject({ deleted: false }); }
          else {
            // discussions are removed
            // we need to remove any opinion regarding the forum
            Opinion.remove({ forum_id }).exec((error) => {
              if (error) { console.log(error); reject({ deleted: false }); }
              else {
                // opinions are removed
                // now we can remove the forum
                Forum.remove({ _id: forum_id }).exec((error) => {
                  if (error) { console.log(error); reject({ deleted: false }); }
                  else { resolve({ deleted: true }); }
                });
              }
            });
          }
        });
      }
    });
  });
};

const deleteUser = ({ user_id }) => {
  return new Promise((resolve, reject) => {
    // first we need to remvoe any discussion the user created
    Discussion.remove({ user_id }).exec((error) => {
      if (error) { console.log(error); reject({ deleted: false }); }
      else {
        // now we need to remove any opinions that are created by the user
        Opinion.remove({ user_id }).exec((error) => {
          if (error) { console.log(error); reject({ deleted: false }); }
          else {
            // finally we can remove the user
            User.remove({ _id: user_id }).exec((error) => {
              if (error) { console.log(error); reject({ deleted: false }); }
              else { resolve({ deleted: true }); }
            });
          }
        });
      }
    });
  });
};

const deleteDiscussion = ({ discussion_id }) => {
  return new Promise((resolve, reject) => {
    // first we need to remove any opinion regarding the discussion
    Opinion.remove({ discussion_id }).exec((error) => {
      if (error) { console.log(error); reject({ deleted: false }); }
      else {
        // now we need to remove the discussion
        Discussion.remove({ _id: discussion_id }).exec((error) => {
          if (error) { console.log(error); reject({ deleted: false }); }
          else { resolve({ deleted: true }); }
        });
      }
    });
  });
};

module.exports = {
  getAdminDashInfo,
  createForum,
  deleteForum,
  deleteUser,
  deleteDiscussion,
};
