const { TeamModel } = require("../model/team")
const TournamentTeamsModel = require("../model/tournamentEntry")
const reply = require('../helper/reply');
const { TournamentModel } = require("../model/tournament")

const lang = require('../language/en');
const UserModel = require("../model/user");


const setEntry = async (req, res) => {
    try {
        const tournametId = req.body
        const user = req.user._id
        const teamid = await UserModel.findOne({
            _id: user
        })
        const team_id = (teamid.team)
        const entry = new TournamentTeamsModel({
            tournametId: tournametId.id,
            teamID: team_id,
            status: "true"
        });
        entry.save()
        res.status(200).json(reply.success(lang.TOURNAMENT_TEAM_REGISTERATION))
    } catch (error) {
        return res.json("Entry note done", error)
    }
}

const setTeam = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const data = await TournamentTeamsModel.findOne({ tournametId: id })
    } catch (error) {
        return res.json("error in getting tournament teams", error)
    }
}

module.exports = {
    setEntry, setTeam
}