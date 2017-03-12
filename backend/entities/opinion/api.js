// opinion controllers
const getAllOpinions = require('./controller').getAllOpinions;

/**
 * opinion apis
 */
const opinionAPI = (app) => {
  // get all opinions
  app.get('/api/opinion/:forum_id/:discussion_slug', (req, res) => {
    const { forum_id, discussion_slug } = req.params;
    getAllOpinions(forum_id, discussion_slug).then(
      (result) => { setTimeout(() => { res.send(result); }, 3000); },
      (error) => { res.send(error); }
    );
  });
};

module.exports = opinionAPI;
