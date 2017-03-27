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

  // github authentication route
  app.get(
    '/api/user/authViaGitHub',
    passport.authenticate('github')
  );

  // callback route from github
  app.get(
    // this should match callback url of github app
    '/api/user/authViaGitHub/callback',
    passport.authenticate('github', { failureRedirect: '/signIn/failed' }),
    (req, res) => { res.redirect('/'); }
  );

  app.get('/api/user/signout', (req, res) => {
    setTimeout(() => {
      req.logout();
      res.redirect('/');
    }, 3000);
  });
};

module.exports = userAPI;
