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
router.get("/getTournamnets/:id", UserController.getTournaments)
router.get("/getNotification", verifyJWT, UserController.getNotifications)
router.get("/getProduct", UserController.getProduct)
router.get("/getInfo/:id", UserController.getTournamentInfo)
router.post("/friendRequest", verifyJWT, UserController.getFriend)
router.delete("/deleteRequest", UserController.handleDelete)



module.exports = router;

