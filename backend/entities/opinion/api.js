// opinion controllers
const getAllOpinions = require('./controller').getAllOpinions;
const createOpinion = require('./controller').createOpinion;

/**
 * opinion apis
 */
const opinionAPI = (app) => {
  // get all opinions
  app.get('/api/opinion/:forum_id/:discussion_slug', (req, res) => {
    const { forum_id, discussion_slug } = req.params;
    getAllOpinions(forum_id, discussion_slug).then(
      (result) => { setTimeout(() => { res.send(result); }, 3000); },
      (error) => { setTimeout(() => { res.send(error); }, 3000); }
    );
  });

  app.post('/api/opinion/newOpinion', (req, res) => {
    if(req.user) {
      createOpinion(req.body).then(
        (result) => { setTimeout(() => { res.send(result); }, 3000); },
        (error) => { setTimeout(() => { res.send(error); }, 3000); }
      );
    } else {
      res.send({ authenticated: false });
    }
  });
};

module.exports = opinionAPI;
