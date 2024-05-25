const { mongoose } = require("mongoose")

const TournamnetSchema = mongoose.Schema({
    name: String,
    location_id: {
        type: String,
        ref: "locations"
    },
    type_of_game: String,
    rank: String,
    img: String,
    start_date: String,
    end_date: String,
    total_team_participation: String,
    minimum_team: String,
    tournament_day: String
}, { timestamps: true })

const TournamentModel = mongoose.model("tournaments", TournamnetSchema)

module.exports = { TournamentModel }