const { mongoose } = require("mongoose")

const TournamentTeamsSchema = mongoose.Schema({
    tournametId: {
        type: String,
        ref: "tournaments"
    },
    teamID: {
        type: String,
        ref: "teams"
    },
    status: String,
}, { timestamps: true })

const TournamentTeamsModel = mongoose.model("tournamentteams", TournamentTeamsSchema)

module.exports = TournamentTeamsModel;