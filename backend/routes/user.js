const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const { verifyJWT } = require('../services/JWT');


router.get("/getProfile", verifyJWT, UserController.getProfile);
router.get("/getGoals", UserController.getGoals);
router.get("/getCourse/:courseId", UserController.getCourse);



module.exports = router;

