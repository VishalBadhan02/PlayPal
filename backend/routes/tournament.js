const express = require("express");
const Route = express.Router();
const TournamentControlller = require("../controller/TournamentController");
const { verifyJWT } = require('../services/JWT');

Route.post('/setEntry', verifyJWT, TournamentControlller.setEntry)
Route.get('/setTeams/:id', TournamentControlller.setTeam)

module.exports = Route;