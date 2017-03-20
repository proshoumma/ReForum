const passport = require('passport');
const signIn = require('./controller').signIn;

/**
 * user apis
 */
const userAPI = (app) => {
  // get authenticated user
  app.get('/api/user/getUser', (req, res) => {
    setTimeout(() => {
      if (req.user) res.send(req.user);
      else res.send(null);
    }, 3000);
  });

  app.get('/api/user/signout', (req, res) => {
    setTimeout(() => {
      req.logout();
      res.redirect('/');
    }, 3000);
  });
};

module.exports = userAPI;
