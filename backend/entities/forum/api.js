// forum controllers
const getAllForums = require('./controller').getAllForums;
const getDiscussions = require('./controller').getDiscussions;

/**
 * forum apis
 */
const forumAPI = (app) => {
  // get all forums
  app.get('/api/forum', (req, res) => {
    getAllForums.then(
      (result) => setTimeout(()=>{ res.send(result); }, 3000),
      (error) => res.send(error)
    );
  });

  // get discussions of a forum
  app.get('/api/forum/:forum_id/discussions', (req, res) => {
    // console.log(req.params.forum_id);
    // const discussions = getDiscussions(req.params.forum_id);
    // setTimeout(() => { res.send(discussions); }, 3000);

    getDiscussions(req.params.forum_id, false).then(
      (result) => setTimeout(()=>{ res.send(result); }, 3000),
      (error) => res.send([])
    );
  });

  // get pinned discussions of a forum
  app.get('/api/forum/:forum_id/pinned_discussions', (req, res) => {
    // setTimeout(() => { res.send(getDiscussions(req.params.forum_id, true)); }, 3000);

    getDiscussions(req.params.forum_id, true).then(
      (result) => setTimeout(()=>{ res.send(result); }, 3000),
      (error) => res.send([])
    );
  });
};

module.exports = forumAPI;
