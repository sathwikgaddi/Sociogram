const express = require("express");

const UserController = require("../controllers/user");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

router.get("", checkAuth, UserController.getSimilarUsers);

router.get("/myFriends", checkAuth, UserController.getMyFriends);

router.put("/addfriend/:fId", checkAuth, UserController.addFriend);

router.put("/unfriend/:fId", checkAuth, UserController.deleteFriend);

router.put("/changepassword/:uname", checkAuth, UserController.changePassword);

module.exports = router;
