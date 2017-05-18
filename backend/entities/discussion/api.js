// discussion controllers
const getDiscussion = require('./controller').getDiscussion;
const createDiscussion = require('./controller').createDiscussion;
const toggleFavorite = require('./controller').toggleFavorite;
const deleteDiscussion = require('./controller').deleteDiscussion;

/**
 * discussion apis
 */
const discussionAPI = (app) => {
  // get signle discussion
  app.get('/api/discussion/:discussion_slug', (req, res) => {
    const { discussion_slug } = req.params;
    getDiscussion(discussion_slug).then(
      (result) => { res.send(result); },
      (error) => { res.send(error); }
    );
  });

  // toggle favorite to the discussion
  app.put('/api/discussion/toggleFavorite/:discussion_id', (req, res) => {
    const { discussion_id } = req.params;
    if (req.user) {
      // TODO: describe the toggle process with comments
      toggleFavorite(discussion_id, req.user._id).then(
        (result) => {
          getDiscussion(result.discussion_slug).then(
            (result) => { res.send(result); },
            (error) => { res.send({ discussionUpdated: false }); }
          );
        },
        (error) => { res.send({ discussionUpdated: false }); }
      );
    } else {
      res.send({ discussionUpdated: false });
    }
  });

  // create a new discussion
  app.post('/api/discussion/newDiscussion', (req, res) => {
    if (req.user) {
      createDiscussion(req.body).then(
        (result) => { res.send(Object.assign({}, result._doc, { postCreated: true })); },
        (error) => { res.send({ postCreated: false }); }
      );
    } else {
      res.send({ postCreated: false });
    }
  });

  // delete a discussion
  app.delete('/api/discussion/deleteDiscussion/:discussion_slug', (req, res) => {
    if (req.user) {
      deleteDiscussion(req.params.discussion_slug).then(
        (result) => { res.send({ deleted: true }); },
        (error) => { res.send({ deleted: false }); }
      );
    } else {
      res.send({ deleted: false });
    }
  });
};

module.exports = discussionAPI;
