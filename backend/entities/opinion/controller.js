// models
const Opinion = require('./model');

// controllers
const getDiscussion = require('../discussion/controller').getDiscussion;

const getOpinion = (forum_id, discussion_id, opinion_id) => {

};

const createOpinion = ({ discussion_id, user_id, content }) => {
  return new Promise((resolve, reject) => {
    const newOpinion = new Opinion({
      discussion_id,
      user_id,
      content,
      date: new Date(),
    });

    newOpinion.save((error) => {
      if (error) reject(error);

      getDiscussion(null, discussion_id).then(
        (result) => resolve(result),
        (error) => reject(error)
      );
    });
  });
};

const updateOpinion = (forum_id, discussion_id, opinion_id) => {

};

const deleteOpinion = (forum_id, discussion_id, opinion_id) => {

};

module.exports = {
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
