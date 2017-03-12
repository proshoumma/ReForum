const signIn = require('./controller').signIn;

/**
 * user apis
 */
const userAPI = (app) => {
  app.get('api/user/signin/:gitHandler', (req, res) => {
    res.send(true);
  });
};

module.exports = userAPI;
