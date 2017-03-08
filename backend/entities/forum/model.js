/**
 * forum model
 */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  forum_slug: String,
  forum_name: String,
});

module.exports = mongoose.model('forums', userSchema);
