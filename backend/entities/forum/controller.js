// forum mock data
const forumMock = require('../../mockData/forum');

/**
 * controllers for data retrival for specific forum
 */

const getDiscussions = (forumId) => {
  return forumMock;
};

const getPinnedDiscussions = (forumId) => {

};

module.exports = {
  getDiscussions,
  getPinnedDiscussions,
};
