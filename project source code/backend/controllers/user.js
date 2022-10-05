const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/user");

const User = require("../models/user");

exports.createUser = (req, res, next) => {
  console.log();
  bcrypt.hash(req.body.password, 10).then(hash => {
    console.log(hash)
    const user = new User({
      email: req.body.email,
      password: hash,
      username: req.body.username,
      friends: [],
      interests: req.body.interests
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Invalid authentication credentials!"
        });
      });
  });
}

exports.userLogin = (req, res, next) => {
  let fetchedUser;
  console.log(req.body.email, req.body.password);
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id, username: fetchedUser.username },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id,
        username: fetchedUser.username
      });
    })
    .catch(err => {
     res.status(401).json({ 
        message: "Invalid authentication credentials!"
      });
    });

    }
    
    exports.getSimilarUsers = (req, res, next) => {
      let similarUsers = []
      User.findOne({"_id" : req.userData.userId})
      .then(user => {
        n = user.username
        console.log("ssssssssssssssssss"+user)
        User.find({$and: [{ "username": { $nin: user.friends} }, {$or: [{"interests":user.interests[0]}, {"interests":user.interests[1]}]}]})
        .then(filteredUsers => {
          similarUsers = filteredUsers;
          return User.count()
        })
        .then(count => {
          res.status(200).json({
            message: "Similar friends fetched successfully!",
            similarfriends: similarUsers,
            maxSimilarFriends: count
          });
        })
        .catch(error => {
          res.status(500).json({
            message: error
          });
        });
      })

    }

    exports.getMyFriends = (req, res, next) => {

      let myFriends = []
      User.findOne({"_id" : req.userData.userId})
      .then(user => {
        myFriends = user.friends
        res.status(200).json({
          message: "Friends fetched successfully!",
            friends: myFriends
        })
        })
        .catch(error => {
          res.status(500).json({
            message: "Fetching  friends failed!"
          });
        });

    }


    exports.addFriend = (req, res, next) => {

      let id = req.userData.userId;

      User.findById({ _id: id})
      .then(user => {
        user.friends.push(req.body.username)
        User.updateOne({ _id: id}, user)
        .then(result => {
          if (result.n > 0) {
            res.status(200).json({ message: "Update successful!" });
          } else {
            res.status(401).json({ message: "Not authorized!" });
          }
        })
        .catch(error => {
          res.status(500).json({
            message: "Couldn't add Friend!"
          });
      })
    })
}


exports.deleteFriend = (req, res, next) => {
  console.log("in delete friend")
  let id = req.userData.userId;

  User.findById({ _id: id})
  .then(user => {
    for( var i = 0; i < user.friends.length; i++){ 
      if ( user.friends[i] === req.body.username) { 
  
          user.friends.splice(i, 1); 
      }
  
  }
    // user.friends.push(req.body.id)
    User.updateOne({ _id: id}, user)
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't delete Friend!"
      });
  })
})

}



exports.changePassword = (req, res, next) => {
  let fetchedUser;
  
  User.findOne({ _id: req.userData.userId })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      
      return bcrypt.compare(req.body.cp, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }

      bcrypt.hash(req.body.np, 10).then(hash => {
        id = req.userData.userId
        User.update({_id: id}, {$set: {password: hash}})
        .then(result => {
          console.log(result)
          if (!result) {
            return res.status(401).json({
              message: "Change Password Failed"
            });
          }
    
          if (result.n > 0) {
            res.status(200).json({ message: "Update successful!" });
          } else {
            res.status(401).json({ message: "Not authorized!" });
          }
        })
        .catch(error => {
          res.status(500).json({
            message: "Couldn't Change Password!"
          });
      })
      })

    })
  }