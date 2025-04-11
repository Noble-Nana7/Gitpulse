// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  bio: String,
  avatar_url: String,
  public_repos: Number,
  followers: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
