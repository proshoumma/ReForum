/**
 * user model
 */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  username: String,
  avatarUrl: String,
  githubUrl: String,
  githubLocation: String,
  githubBio: String,
});

module.exports = mongoose.model('user', userSchema);
