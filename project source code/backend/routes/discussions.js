const express = require("express");

const DiscussionController = require("../controllers/discussions");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

// router.post("/signup", UserController.createUser);

// router.post("/login", UserController.userLogin);

// router.get("", checkAuth, UserController.getSimilarUsers);

// router.get("/myFriends", checkAuth, UserController.getMyFriends);

router.put("/addAnswer/:disId", checkAuth, DiscussionController.addAnswer);

router.put("/addVote/:disId", checkAuth, DiscussionController.addVote);

// router.put("/unfriend/:fId", checkAuth, UserController.deleteFriend);

router.post("", checkAuth, DiscussionController.createDiscussion);

router.get("", checkAuth, DiscussionController.getDiscussions);

router.get("/myDiscussions", checkAuth, DiscussionController.getMyDiscussions);

router.delete("/:id", checkAuth, DiscussionController.deleteDiscussion);

module.exports = router;
