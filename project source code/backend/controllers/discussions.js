const Discussion = require("../models/discussions");


exports.createDiscussion = (req, res, next) => {

    console.log(req.body.content)
    const discussion = new Discussion({
        title: req.body.title,
        content: req.body.content,
        answers: req.body.answers,
        creator: req.userData.userId
      });
      discussion
        .save()
        .then(createdDiscussion => {
          res.status(201).json({
            message: "Discussion added successfully",
            discussion: {
              ...createdDiscussion,
              id: createdDiscussion._id
            }
          });
        })
        .catch(error => {
          res.status(500).json({
            message: error
          });
        });
}



exports.getDiscussions = (req, res, next) => {

  const discussionQuery = Discussion.find({"creator" : { $ne: req.userData.userId} });
  let fetchedDiscussions;
  // if (pageSize && currentPage) {
  //   postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  // }
  discussionQuery
    .then(documents => {
      fetchedDiscussions = documents;
      return Discussion.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        discussions: fetchedDiscussions
      });
    })
    .catch(error => {
      res.status(500).json({
        message: error.message
      });
    });

}

exports.getMyDiscussions = (req, res, next) => {
  console.log("came here");
  const discussionQuery = Discussion.find({"creator" : req.userData.userId});
  let fetchedDiscussions;
  // if (pageSize && currentPage) {
  //   postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  // }
  discussionQuery
    .then(documents => {
      fetchedDiscussions = documents;
      return Discussion.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        discussions: fetchedDiscussions
      });
    })
    .catch(error => {
      res.status(500).json({
        message: error
      });
    });

}

exports.addAnswer = (req, res, next) => {

  let id = req.params.disId;

      Discussion.findById({ _id: id})
      .then(discussion => {
        discussion.answers.push({answer: req.body.answer, answeredby: req.userData.userId, upVotes: 0, downVotes: 0})
        Discussion.updateOne({ _id: id}, discussion)
        .then(result => {
          if (result.n > 0) {
            res.status(200).json({ message: "Update successful!" });
          } else {
            res.status(401).json({ message: "Not authorized!" });
          }
        })
        .catch(error => {
          res.status(500).json({
            message: "Couldn't update answer!"
          });
      })
    })

}


exports.addVote = (req, res, next) => {

  let id = req.params.disId;

      Discussion.findById({ _id: id})
      .then(discussion => {
        console.log("before" + discussion)
        console.log("req  "+ req.body.answer)
        discussion.answers.forEach(answer => {
          
          if(answer.answer === req.body.answer && req.body.type === "upvotes") {
            
            answer.upVotes = answer.upVotes + 1;
          }
          else if (answer.answer === req.body.answer && req.body.type === "downvotes") {
            answer.downVotes = answer.downVotes + 1;
          }
        });
        // discussion.answers.push({answer: req.body.answer, answeredby: req.userData.userId})
        console.log("after" + discussion)
        Discussion.updateOne({ _id: id}, discussion)
        .then(result => {
          if (result.n > 0) {
            res.status(200).json({ message: "Update successful!" });
          } else {
            res.status(401).json({ message: "Not authorized!" });
          }
        })
        .catch(error => {
          res.status(500).json({
            message: "Couldn't update answer!"
          });
      })
    })

}

exports.deleteDiscussion = (req, res, next) => {
  console.log("came to controller")
  Discussion.deleteOne({ _id: req.params.id, creator: req.userData.userId})
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting posts failed!"
      });
    });
};











