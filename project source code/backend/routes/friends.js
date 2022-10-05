const express = require("express");

const PostController = require("../controllers/friends");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

// router.post("", checkAuth, extractFile, PostController.createPost);

// router.put("/:id", checkAuth, extractFile, PostController.updatePost);

// router.get("", checkAuth, PostController.getPosts);

// router.get("/:id", PostController.getPost);

// router.delete("/:id", checkAuth, PostController.deletePost);

router.get("", checkAuth, )

module.exports = router;
