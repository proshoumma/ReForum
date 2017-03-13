const asyncEach = require('async/each');

// models
const Opinion = require('./model');

// controllers
const getUser = require('../user/controller').getUser;

/**
 * get all opinion of a specific dicussion
 * @param  {ObjectId} forum_id
 * @param  {String} discussion_slug
 * @return {null}
 */
const getAllOpinions = (discussion_id) => {
  return new Promise((resolve, reject) => {
    Opinion.find({ discussion_id }, (error, opinions) => {
      // attach user to the opinions
      asyncEach(opinions, (eachOpinion, callback) => {
        getUser(eachOpinion.user_id).then(
          (user) => {
            // add user to opinion doc
            eachOpinion._doc.user = user;
            callback();
          },
          (error) => { callback(error); }
        );
      }, (error) => {
        if (error) reject(error);
        else resolve(opinions);
      });
    });
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

// create some dummy opinions
// const opinion1 = new Opinion({
//   'discussion_id': '58c641cf88336b08c76f3b50',
//   'user_id': '58c242a96ba2030d170f86f9',
//   'date': 1486450269704,
//   'content': 'These discussions!!!',
// });
//
// opinion1.save();
