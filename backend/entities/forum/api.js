// forum controllers
const getAllForums = require('./controller').getAllForums;
const getDiscussions = require('./controller').getDiscussions;

/**
 * forum apis
 */
const forumAPI = (app) => {
  // get all forums
  app.get('/api/forum', (req, res) => {
    setTimeout(() => {
      res.send(getAllForums());
    }, 3000);
  });

  // get discussions of a forum
  app.get('/api/forum/:forum_id/discussions', (req, res) => {
    const discussions = getDiscussions(req.params.forum_id);
    setTimeout(() => { res.send(JSON.stringify(discussions)); }, 3000);
  });

  // get pinned discussions of a forum
  app.get('/api/forum/:forum_id/pinned_discussions', (req, res) => {
    setTimeout(() => { res.send(getDiscussions(req.params.forum_id, true)); }, 3000);
  });
};

module.exports = forumAPI;
