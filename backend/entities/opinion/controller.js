// models
const Opinion = require('./model');

/**
 * get all opinion regarding a single discussion
 * @param  {ObjectId} discussion_id
 * @return {Promise}
 */
const getAllOpinions = (discussion_id) => {
  return new Promise((resolve, reject) => {
    Opinion
    .find({ discussion_id })
    .populate('user')
    .sort({ date: -1 })
    .exec((error, opinions) => {
      if (error) { console.log(error); reject(error); }
      else if (!opinions) reject(null);
      else resolve(opinions);
    });
  });
};

/**
 * create an opinion regarding a discussion
 * @param  {ObjectId} forum_id
 * @param  {ObjectId} discussion_id
 * @param  {ObjectId} user_id
 * @param  {Object} content
 * @return {Promise}
 */
const createOpinion = ({ forum_id, discussion_id, user_id, content }) => {
  return new Promise((resolve, reject) => {
    const newOpinion = new Opinion({
      forum_id,
      discussion_id,
      discussion: discussion_id,
      user_id,
      user: user_id,
      content,
      date: new Date(),
    });

    newOpinion.save((error) => {
      if (error) { console.log(error); reject(error); }
      else { resolve(newOpinion); }
    });
  });
};

const updateOpinion = (opinion_id) => {
  // TODO: implement update for opinion
};

/**
 * delete a single opinion
 * @param  {ObjectId} opinion_id
 * @return {Promise}
 */
const deleteOpinion = (opinion_id) => {
  return new Promise((resolve, reject) => {
    Opinion
    .remove({ _id: opinion_id })
    .exec((error) => {
      if (error) { console.log(error); reject(error); }
      else resolve('deleted');
    });
  });
};

module.exports = {
  getAllOpinions,
  createOpinion,
  updateOpinion,
  deleteOpinion,
};
