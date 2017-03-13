const User = require('./model');

const getUser = (user_id) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: user_id }, (error, user) => {
      if (error) reject(error);
      else resolve(user);
    });
  });
};

const signIn = () => {

};

const signUp = () => {

};

module.exports = {
  signIn,
  signUp,
  getUser,
};

// // create some dummy users
// const user1 = new User({
//   'username': 'testuser2',
//   'email': 'testuser2@reforum.abc',
//   'avatarUrl': 'https://robohash.org/magnidictadeserunt.png?size=50x50&set=set1',
//   'name': 'Test User 2',
// });
//
// user1.save();
