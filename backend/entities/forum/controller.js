const asyncEach = require('async/each');

// models
const Forum = require('./model');
const Discussion = require('../discussion/model');

// controllers
const getAllOpinions = require('../opinion/controller').getAllOpinions;
const getUser = require('../user/controller').getUser;

/**
 * get all forums list
 * @type {Promise}
 */
const getAllForums = () => {
  return new Promise((resolve, reject) => {
    Forum
    .find({})
    .exec((error, results) => {
      if (error) { console.log(error); reject(error); }
      else if (!results) reject(null);
      else resolve(results);
    });
  });
};

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
    .populate('forum')
    .populate('user')
    .lean()
    .exec((error, discussions) => {
      if (error) { console.error(error); reject(error); }
      else if (!discussions) reject(null);
      else {
        // attach opinion count to each discussion
        asyncEach(discussions, (eachDiscussion, callback) => {
          // add opinion count
          getAllOpinions(eachDiscussion._id).then(
            (opinions) => {
              // add opinion count to discussion doc
              eachDiscussion.opinion_count = opinions ? opinions.length : 0;
              callback();
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
