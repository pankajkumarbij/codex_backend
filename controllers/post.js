const Post = require('../models/post');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

var postController = { 
  Post(req, res){
        const {  UserId, title, body, tag, posterImage } = req.body;
        var newPost = new Post({  UserId, title, body, tag, posterImage });
        newPost.save()
        .then(post => {
          var message={success: true, message: "successfully registered!"};
          res.json(message);
        })
        .catch(err => {
          res.json({error: err, message: "something went wrong!!"});
        })
    },
  GetPosts(req, res){
    Post.find({})
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.json(err);
    })
  },
  GetPostById(req, res){
    Post.find({"_id": req.params.id})
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.json(err);
    })
  },
}

module.exports = postController;