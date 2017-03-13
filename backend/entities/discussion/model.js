/**
 * discussion model
 */
const mongoose = require('mongoose');

// TODO: add discussion title in model
const discussionSchema = mongoose.Schema({
  forum_id: mongoose.Schema.ObjectId,
  discussion_slug: String,
  user_id: mongoose.Schema.ObjectId,
  date: Date,
  title: String,
  content: String,
  favorite_count: Number,
  tags: Array,
  pinned: Boolean,
});

module.exports = mongoose.model('discussions', discussionSchema);
