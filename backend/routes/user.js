const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const { verifyJWT } = require('../services/JWT');


router.get("/getProfile", verifyJWT, UserController.getProfile);
router.get("/getGoals", UserController.getGoals);
router.get("/getCourse/:courseId", UserController.getCourse);
router.get("/gettournament", UserController.gettournament);
router.get("/getcountry", UserController.getcountry);
router.get("/getstate/:country", UserController.getstate);
router.get("/getcity/:state", UserController.getcity);
router.put("/updateProfile", verifyJWT, UserController.UpdateProfile);
router.post("/teamcontrol", verifyJWT, UserController.setteam);
router.get("/getFriend", verifyJWT, UserController.getFriends)



module.exports = router;

