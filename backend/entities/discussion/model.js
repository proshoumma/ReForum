/**
 * discussion model
 */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  forum_id: mongoose.Schema.ObjectId,
  discussion_slug: String,
  user_id: mongoose.Schema.ObjectId,
  date: Date,
  content: String,
  favorite_count: Number,
  tags: Array,
  pinned: Boolean,
});

module.exports = mongoose.model('discussions', userSchema);
