const User = require('./model');

const getUser = (user_id) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: user_id }, (error, user) => {
      if (error) reject(error);
      else resolve(user);
    });
  });
};

const signInViaGithub = (gitProfile) => {
  return new Promise((resolve, reject) => {

    // find if user exist on db
    User.findOne({ username: gitProfile.login }, (error, user) => {
      if (error) { console.log(error); reject(error); }
      else {
        // user exist on db
        if (user) resolve(user);

        // create a new user when user is not on db
        else {
          const newUser = new User({
            name: gitProfile.name,
            email: gitProfile.email,
            username: gitProfile.login,
            avatarUrl: gitProfile.avatar_url,
            githubUrl: gitProfile.html_url,
            githubLocation: gitProfile.location,
            githubBio: gitProfile.bio,
          });

          newUser.save((error) => {
            if (error) { console.log(error); reject(error); }
            else { resolve(user); }
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

// create some dummy users
// const user1 = new User({
//   "_id" : "58c242e2fb2e150d2570e02b",
//   "username" : "testuser2",
//   "email" : "testuser2@reforum.abc",
//   "avatarUrl" : "https://robohash.org/magnidictadeserunt.png?size=50x50&set=set1",
//   "name" : "Test User 2",
// });
//
// user1.save();
