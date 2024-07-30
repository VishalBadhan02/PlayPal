const express = require('express')
const route = express.Router();
const LinkController = require("../controller/LinkController")


route.get("/sideBar", LinkController.sidebar)
route.get("/setIncriment", LinkController.setIncriment)


module.exports = route;