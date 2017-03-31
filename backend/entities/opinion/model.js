/**
 * opinion model
 */
const mongoose = require('mongoose');

const opinionSchema = mongoose.Schema({
  discussion_id: mongoose.Schema.ObjectId,
  user_id: mongoose.Schema.ObjectId,
  date: Date,
  content: Object,
});

module.exports = mongoose.model('opinions', opinionSchema);
