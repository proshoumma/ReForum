const asyncEach = require('async/each');

const Opinion = require('./model');
const Discussion = require('../discussion/model');
const User = require('../user/model');

// TODO: clean up this mess
const getAllOpinions = (forum_id, discussion_slug) => {
  return new Promise((resolve, reject) => {

    // get discussion id first
    Discussion.findOne({ discussion_slug }, (error, discussion) => {
      if (error) reject(error);
      else {
        const discussion_id = discussion._id;

        // find all opinion under discussion_id
        Opinion.find({ discussion_id }, (error, opinions) => {
          // attach user to the opinions
          asyncEach(opinions, (eachOpinion, callback) => {
            User.findOne({ _id: eachOpinion.user_id }, (error, user) => {
              if (error) callback(error);
              else {
                // add the user to opinion doc
                eachOpinion._doc.user = user;
                callback();
              }
            });
          }, (error) => {
            if (error) reject(error);
            else resolve(opinions);
          });
        });
      }
    });
    // Opinion.find({ forum_id });
  });
};

const getOpinion = (forum_id, discussion_id, opinion_id) => {

};

const createOpinion = (forum_id, discussion_id) => {

};

const updateOpinion = (forum_id, discussion_id, opinion_id) => {

};

const deleteOpinion = (forum_id, discussion_id, opinion_id) => {

};

module.exports = {
  getAllOpinions,
  getOpinion,
  createOpinion,
  updateOpinion,
  deleteOpinion,
};

// // create some dummy opinions
// const opinion1 = new Opinion({
//   'forum_id': '58c23d2efce8810b6f20b0b3',
//   'discussion_id': '58c24467ff4c770d8deb8e7f',
//   'user_id': '58c242a96ba2030d170f86f9',
//   'date': 1486450269704,
//   'content': 'These discussions!!!',
// });
//
// opinion1.save();
