const getDiscussions = require('./controller').getDiscussions;
const getPinnedDiscussions = require('./controller').getPinnedDiscussions;

/**
 * forum apis
 */
const forumAPI = (app) => {
  app.get('/api/forum/:forum_id', (req, res) => {

  });
};

module.exports = forumAPI;
