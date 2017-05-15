/**
 * forum model
 */
const mongoose = require('mongoose');

const forumSchema = mongoose.Schema({
  forum_slug: String,
  forum_name: String,
});

module.exports = mongoose.model('forum', forumSchema);
