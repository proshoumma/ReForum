// controllers
const getAllOpinions = require('./controller').getAllOpinions;
const createOpinion = require('./controller').createOpinion;

/**
 * opinion apis
 */
const opinionAPI = (app) => {
  app.post('/api/opinion/newOpinion', (req, res) => {
    if(req.user) {
      createOpinion(req.body).then(
        (result) => { res.send(result); },
        (error) => { res.send(error); }
      );
    } else {
      res.send({ authenticated: false });
    }
  });
};

module.exports = opinionAPI;
