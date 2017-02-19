const getDiscussions = require('./controller').getDiscussions;
const getPinnedDiscussions = require('./controller').getPinnedDiscussions;

/**
 * forum apis
 */
const forumAPI = (app) => {
  app.get('/api/forum/:forum_id', (req, res) => {
    console.log('got requrest for forum id: ' + req.params.forum_id);
    const discussions = getDiscussions();
    res.send(discussions);
  });
};

module.exports = forumAPI;
