// opinion controllers
const getAllOpinions = require('./controller').getAllOpinions;

/**
 * opinion apis
 */
const opinionAPI = (app) => {
  // get all opinions
  app.get('/api/opinion/:forum_id/:discussion_slug', (req, res) => {
    const { forum_id, discussion_slug } = req.params;
    const opinions = getAllOpinions(forum_id, discussion_slug);
    setTimeout(() => { res.send(opinions); }, 3000);
  });
};

module.exports = opinionAPI;
