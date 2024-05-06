const express = require('express');
const router = express.Router();
const AuthController = require('../controller/AuthController');
const { verifyJWT } = require('../services/JWT');

router.post("/login", AuthController.login);
router.post("/register", AuthController.Register);
router.post("/otpverify", verifyJWT, AuthController.handleOTpverification);


module.exports = router;

