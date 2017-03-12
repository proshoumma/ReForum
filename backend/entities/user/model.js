/**
 * user model
 */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  username: String,
  avatarUrl: String,
});

module.exports = mongoose.model('user', userSchema);
