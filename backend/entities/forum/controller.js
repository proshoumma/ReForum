const asyncEach = require('async/each');

// models
const Forum = require('./model');
const Discussion = require('../discussion/model');

// controllers
const getAllOpinions = require('../../utilities/helpingControllers').getAllOpinions;
const getUser = require('../user/controller').getUser;

/**
 * get all forums list
 * @type {Promise}
 */
const getAllForums = new Promise((resolve, reject) => {
  Forum.find((error, results) => {
    if (error) reject(error);
    else resolve(results);
  });
});

/**
 * get discussions of a forum
 * @param  {ObjectId} forum_id
 * @param  {Boolean} pinned
 * @return {Promise}
 */
const getDiscussions = (forum_id, pinned, sorting_method='date') => {
  return new Promise((resolve, reject) => {
    // define sorthing method
    const sortWith = { };
    if (sorting_method === 'date') sortWith.date = -1;
    if (sorting_method === 'popularity') sortWith.favorites = -1;

    // match discussion id and pinned status
    Discussion
    .find({ forum_id: forum_id, pinned: pinned })
    .sort(sortWith)
    .exec((error, discussions) => {
      if (error) { console.error(error); reject(error); }
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
                (error) => { console.error(error); callback(error); }
              );
            },
            (error) => { console.error(error); callback(error); }
          );
        }, (error) => {
          if (error) { console.error(error); reject(error); }
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
