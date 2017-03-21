// discussion controllers
const getDiscussion = require('./controller').getDiscussion;
const createDiscussion = require('./controller').createDiscussion;

/**
 * discussion apis
 */
const discussionAPI = (app) => {
  // get signle discussion
  app.get('/api/discussion/:discussion_slug', (req, res) => {
    const { discussion_slug } = req.params;
    getDiscussion(discussion_slug).then(
      (result) => { setTimeout(() => { res.send(result); }, 3000); },
      (error) => { res.send(error); }
    );
  });

  // create a new discussion
  app.post('/api/discussion/newDiscussion', (req, res) => {
    createDiscussion(req.body).then(
      (result) => { setTimeout(() => { res.send({ postCreated: true }); }, 3000); },
      (error) => { setTimeout(() => { res.send({ postCreated: false }); }, 3000); }
    );
  });
};

module.exports = discussionAPI;
