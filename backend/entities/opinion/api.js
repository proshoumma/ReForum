// opinion controllers
const getAllOpinions = require('./controller').getAllOpinions;

/**
 * opinion apis
 */
const opinionAPI = (app) => {
  // get all opinions
  app.get('/api/opinion/:forum_id/:discussion_id', (req, res) => {
    const { forum_id, discussion_id } = req.params;
    const opinions = getAllOpinions(forum_id, discussion_id);
    res.send(opinions);
  });
};

module.exports = opinionAPI;
