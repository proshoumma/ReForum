/**
 * opinion model
 */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  forum_id: mongoose.Schema.ObjectId,
  discussion_id: mongoose.Schema.ObjectId,
  user_id: mongoose.Schema.ObjectId,
  date: Date,
  content: String,
});

module.exports = mongoose.model('opinions', userSchema);
