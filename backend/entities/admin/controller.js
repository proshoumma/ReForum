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
    ], (error, result) => {
      if (error) { console.log(error); reject(error); }
      else resolve(result);
    });
  });
};

module.exports = {
  getAdminDashInfo,
};
