// discussion controllers
const getDiscussion = require('./controller').getDiscussion;

/**
 * discussion apis
 */
const discussionAPI = (app) => {
  // get signle discussion
  app.get('/api/discussion/:forum_id/:discussion_slug', (req, res) => {
    const { forum_id, discussion_slug } = req.params;
    setTimeout(() => {
      res.send(getDiscussion(forum_id, discussion_slug));
    }, 3000);
  });
};

module.exports = discussionAPI;
