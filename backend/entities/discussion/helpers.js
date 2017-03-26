const asyncEach = require('async/each');

const Opinion = require('../opinion/model');
const getUser = require('../user/controller').getUser;

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

module.exports = { getAllOpinions };
