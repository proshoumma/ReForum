const _ = require('lodash');
const Opinion = require('./model');

// mock data
const discussionMock = require('../../mockData/discussions');
const opinionMock = require('../../mockData/opinions');
const userMock = require('../../mockData/users');

const getAllOpinions = (forum_id, discussion_slug) => {
  let discussion_id = _.find(discussionMock, { discussion_slug: discussion_slug });
  discussion_id = discussion_id ? discussion_id.discussion_id : null;

  let opinions = opinionMock.filter((opinion) => {
    return (
      opinion.forum_id === Number(forum_id) &&
      opinion.discussion_id === Number(discussion_id)
    );
  });

  // attach user to the opinions
  opinions = opinions.map((opinion) => {
    return Object.assign({}, opinion, {
      user: _.find(userMock, { user_id: opinion.user_id }),
    });
  });

  return opinions;
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
