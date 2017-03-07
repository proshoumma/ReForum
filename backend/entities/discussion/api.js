// discussion controllers
const getDiscussion = require('./controller').getDiscussion;

/**
 * discussion apis
 */
const discussionAPI = (app) => {
  // get signle discussion
  app.get('/api/discussion/:forum_id/:discussion_id', (req, res) => {
    const { forum_id, discussion_id } = req.params;
    res.send(getDiscussion(forum_id, discussion_id));
  });
};

module.exports = discussionAPI;
