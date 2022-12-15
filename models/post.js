const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const User = require('./user');

const postSchema = new mongoose.Schema({
  UserId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    require: true
  },
  body: {
    type: String,
    require: true
  },
  tag: {
    type: Array,
  },
  posterImage: {
    type: String,
  }
},
{
  timestamps: true,
}
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;