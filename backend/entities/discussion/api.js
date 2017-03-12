// discussion controllers
const getDiscussion = require('./controller').getDiscussion;

/**
 * discussion apis
 */
const discussionAPI = (app) => {
  // get signle discussion
  app.get('/api/discussion/:forum_id/:discussion_slug', (req, res) => {
    const { forum_id, discussion_slug } = req.params;
    getDiscussion(forum_id, discussion_slug).then(
      (result) => { setTimeout(() => { res.send(result); }, 3000); },
      (error) => { res.send(error); }
    );
  });
};

module.exports = discussionAPI;
