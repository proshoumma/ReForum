/**
 * opinion model
 */
const mongoose = require('mongoose');

const opinionSchema = mongoose.Schema({
  forum_id: mongoose.Schema.ObjectId,
  forum: { type: mongoose.Schema.ObjectId, ref: 'forum' },
  discussion_id: mongoose.Schema.ObjectId,
  discussion: { type: mongoose.Schema.ObjectId, ref: 'discussion' },
  user_id: mongoose.Schema.ObjectId,
  user: { type: mongoose.Schema.ObjectId, ref: 'user' },
  date: Date,
  content: Object,
});

module.exports = mongoose.model('opinion', opinionSchema);
