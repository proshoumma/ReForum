const _ = require('lodash');

// models
const User = require('./model');

/**
 * get user doc by user id
 * @param  {ObjectId} user_id
 * @return {promise}
 */
const getUser = (user_id) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: user_id }, (error, user) => {
      if (error) reject(error);
      else resolve(user);
    });
  });
};

/**
 * sign in/up user via github provided info
 * this will signin the user if user existed
 * or will create a new user using git infos
 * @param  {Object} gitProfile    profile information provided by github
 * @return {promise}              user doc
 */
const signInViaGithub = (gitProfile) => {
  return new Promise((resolve, reject) => {

    // find if user exist on db
    User.findOne({ username: gitProfile.username }, (error, user) => {
      if (error) { console.log(error); reject(error); }
      else {
        // get the email from emails array of gitProfile
        const email = _.find(gitProfile.emails, { verified: true }).value;

        // user existed on db
        if (user) {
          // update the user with latest git profile info
          user.name = gitProfile.displayName;
          user.username = gitProfile.username;
          user.avatarUrl = gitProfile._json.avatar_url;
          user.email = email;
          user.github.id = gitProfile._json.id,
          user.github.url = gitProfile._json.html_url,
          user.github.company = gitProfile._json.company,
          user.github.location = gitProfile._json.location,
          user.github.hireable = gitProfile._json.hireable,
          user.github.bio = gitProfile._json.bio,
          user.github.followers = gitProfile._json.followers,
          user.github.following = gitProfile._json.following,

          // save the info and resolve the user doc
          user.save((error) => {
            if (error) { console.log(error); reject(error); }
            else { resolve(user); }
          });
        }

        // user doesn't exists on db
        else {
          // create a new user
          const newUser = new User({
            name: gitProfile.displayName,
            username: gitProfile.username,
            avatarUrl: gitProfile._json.avatar_url,
            email: email,
            github: {
              id: gitProfile._json.id,
              url: gitProfile._json.html_url,
              company: gitProfile._json.company,
              location: gitProfile._json.location,
              hireable: gitProfile._json.hireable,
              bio: gitProfile._json.bio,
              followers: gitProfile._json.followers,
              following: gitProfile._json.following,
            },
          });

          // save the user and resolve the user doc
          newUser.save((error) => {
            if (error) { console.log(error); reject(error); }
            else { resolve(newUser); }
          });
        }
      }
    });

  });
};

module.exports = {
  signInViaGithub,
  getUser,
};
