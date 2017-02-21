const getDiscussions = require('./controller').getDiscussions;
const getPinnedDiscussions = require('./controller').getPinnedDiscussions;

/**
 * forum apis
 */
const forumAPI = (app) => {
  app.get('/api/forum/:forum_id', (req, res) => {
    setTimeout(() => {
      res.send({
        discussions: getDiscussions(),
        pinned: getPinnedDiscussions(),
      });
    }, 3000);
  });
};

module.exports = forumAPI;
