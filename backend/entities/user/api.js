const passport = require('passport');
const signIn = require('./controller').signIn;

/**
 * user apis
 */
const userAPI = (app) => {
  app.get(
    '/api/user/authViaGitHub',
    passport.authenticate('github')
  );

  app.get(
    // this should match callback url of github app
    '/auth/github/callback',
    passport.authenticate('github'),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.send({ authenticated: false });
  });
};

module.exports = userAPI;
