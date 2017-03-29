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
    getDiscussions(req.params.forum_id, false, req.query.sorting_method).then(
      (result) => setTimeout(()=>{ res.send(result); }, 3000),
      (error) => { console.error(error); res.send([]); }
    );
  });

  // get pinned discussions of a forum
  app.get('/api/forum/:forum_id/pinned_discussions', (req, res) => {
    getDiscussions(req.params.forum_id, true).then(
      (result) => setTimeout(()=>{ res.send(result); }, 3000),
      (error) => { console.error(error); res.send([]); }
    );
  });
};

module.exports = forumAPI;
