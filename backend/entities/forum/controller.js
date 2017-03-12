const asyncEach = require('async/each');

// models
const Forum = require('./model');
const Discussion = require('../discussion/model');
const User = require('../user/model');

// get all the forums list
const getAllForums = new Promise((resolve, reject) => {
  Forum.find((err, results) => {
    if (err) reject('Something is wrong with getAllForums');
    else resolve(results);
  });
});

// get discussion for selected forum
const getDiscussions = (forum_id, pinned) => {
  return new Promise((resolve, reject) => {
    // match discussion id and pinned status
    Discussion.find({ forum_id: forum_id, pinned: pinned }, (error, discussions) => {
      if (error) { reject(error); }
      else {
        // attach user to each discussion
        asyncEach(discussions, (eachDiscussion, callback) => {
          User.findOne({ _id: eachDiscussion.user_id }, (error, user) => {
            if (error) callback(error);
            else {
              // add the user to disccussion doc
              eachDiscussion._doc.user = user;
              callback();
            }
          });
        }, (error) => {
          if (error) reject(error);
          else resolve(discussions);
        });
      }
    });
  });
};

module.exports = {
  getAllForums,
  getDiscussions,
};
