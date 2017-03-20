const passport = require('passport');
const signIn = require('./controller').signIn;

/**
 * user apis
 */
const userAPI = (app) => {
  // get authenticated user
  app.get('/api/user/getUser', (req, res) => {
    console.log(req);
    if (req.user) res.send(req.user);
    else res.send(null);
  });

  app.get('/api/user/signout', (req, res) => {
    req.logout();
    res.send({ authenticated: false });
  });
};

module.exports = userAPI;
