// discussion controllers
const getDiscussion = require('./controller').getDiscussion;
const createDiscussion = require('./controller').createDiscussion;
const toggleFavorite = require('./controller').toggleFavorite;

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

  // add favorite to the discussion
  app.put('/api/discussion/toggleFavorite/:discussion_id', (req, res) => {
    const { discussion_id } = req.params;
    if (req.user) {
      // TODO: describe the toggle process with comments
      toggleFavorite(discussion_id, req.user._id).then(
        (result) => {
          getDiscussion(result.discussion_slug).then(
            (result) => { setTimeout(() => { res.send(result); }, 3000); },
            (error) => { setTimeout(() => { res.send({ discussionUpdated: false }); }, 3000); }
          );
        },
        (error) => { setTimeout(() => { res.send({ discussionUpdated: false }); }, 3000); }
      );
    } else {
      setTimeout(() => { res.send({ discussionUpdated: false }); }, 3000);
    }
  });


  // create a new discussion
  app.post('/api/discussion/newDiscussion', (req, res) => {
    if (req.user) {
      createDiscussion(req.body).then(
        (result) => { setTimeout(() => { res.send({ postCreated: true }); }, 3000); },
        (error) => { setTimeout(() => { res.send({ postCreated: false }); }, 3000); }
      );
    } else {
      setTimeout(() => { res.send({ postCreated: false }); }, 3000);
    }
  });
};

module.exports = discussionAPI;
