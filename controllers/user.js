const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


var userController = { 
  Register(req, res){
      bcrypt.hash(req.body.password, 12, function(err, hash){
        const {userName, email, fullName, mobileNo } = req.body;
        const password= hash;
        var newUser = new User({userName, email, fullName, mobileNo, password});
        newUser.save()
        .then(user => {
          const email = user.email;
          const userId = user._id;
          const userName = user.userName;
          var token = jwt.sign({email, userName, userId}, "secretkeyforcodex", { expiresIn: "1h"});
          var message = {success: true, message: "successfully registered!", token: token};
          res.json(message);
          console.log(message);
        })
        .catch(err => {
          res.json({error: err, message: "something went wrong!!"});
          console.log(err);
        })     
      });
  },
  Login(req, res){
    const { email, password } = req.body;
    User.findOne({email},function(err,user){
    if(!user){
      console.log(user);
      res.json({error: err, message:"user not found!!"});
    }
    else if(user){
      bcrypt.compare(password, user.password,function(err,result){
        console.log(result);
        if(result){
          const email = user.email;
          const userId = user._id;
          const userName = user.userName;
          var token = jwt.sign({email, userId, userName}, "secretkeyforcodex", { expiresIn: "1h"});
          res.json({success:true, message: "Login success!", token: token});
        }
        else{
          res.json({error: err, message:"email or password is not matched!!"});
        }
      })
    }
    else{
      res.json({error: err, message:"something went wrong !!"});
    }
    })
  },
  GetUsers(req, res){
    User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    })
  },
  GetUserById(req, res){
    User.find({"_id": req.params.id})
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    })
  },
}

module.exports = userController;