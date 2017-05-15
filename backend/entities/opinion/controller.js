// models
const Opinion = require('./model');

const getOpinion = (forum_id, discussion_id, opinion_id) => {

};

const getAllOpinions = (discussion_id) => {
  return new Promise((resolve, reject) => {
    Opinion
    .find({ discussion_id })
    .populate('user')
    .sort({ date: -1 })
    .exec((error, opinions) => {
      if (error) reject(error);
      else resolve(opinions);
    });
  });
};

const createOpinion = ({ discussion_id, user_id, content }) => {
  return new Promise((resolve, reject) => {
    const newOpinion = new Opinion({
      discussion_id,
      discussion: discussion_id,
      user_id,
      user: user_id,
      content,
      date: new Date(),
    });

    newOpinion.save((error) => {
      if (error) reject(error);
      else { resolve(newOpinion); }
    });
  });
};

const updateOpinion = (forum_id, discussion_id, opinion_id) => {

};

const deleteOpinion = (forum_id, discussion_id, opinion_id) => {

};

module.exports = {
  getOpinion,
  getAllOpinions,
  createOpinion,
  updateOpinion,
  deleteOpinion,
};
