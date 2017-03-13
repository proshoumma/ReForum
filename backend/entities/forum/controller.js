const asyncEach = require('async/each');

// models
const Forum = require('./model');
const Discussion = require('../discussion/model');

// controllers
const getAllOpinions = require('../opinion/controller').getAllOpinions;
const getUser = require('../user/controller').getUser;

// get all the forums list
const getAllForums = new Promise((resolve, reject) => {
  Forum.find((error, results) => {
    if (error) reject(error);
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
        // attach user and opinion count to each discussion
        asyncEach(discussions, (eachDiscussion, callback) => {
          // add user
          getUser(eachDiscussion.user_id).then(
            (user) => {
              // add the user to disccussion doc
              eachDiscussion._doc.user = user;

              // add opinion count
              getAllOpinions(eachDiscussion._id).then(
                (opinions) => {
                  // add opinion count to discussion doc
                  eachDiscussion._doc.opinion_count = opinions ? opinions.length : 0;
                  callback();
                },
                (error) => { callback(error); }
              );
            },
            (error) => { callback(error); }
          );
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
