const mongoose = require("mongoose")

const TournamnetSchema = mongoose.Schema({
    // name: String,
    // type_of_game: String,
    // contact: String,
    // rank: String,
    // img: String,
    // start_date: String,
    // end_date: String,
    // total_team_participation: String,
    // minimum_team: String,
    // location: String,
    // state: String,
    // city: String,
    // tournament_day: String,
    // address: String,
    // eligibility: {
    //     age: String,
    //     proof: String,
    //     entry: String,
    //     gender: String,
    //     players: {
    //         playing: String,
    //         extra: String,
    //     }
    // }
    name: String,
    type_of_game: String,
    contact: String,
    start_date: String,
    end_date: String,
    total_team_participation: String,
    location: String,
    selectCountry: String,
    selectState: String,
    selectCity: String,
    address: String,
    password: String,
    conform_password: String,
    tournament_key: String,
    key: String
}, { timestamps: true })

const TournamentModel = mongoose.model("tournaments", TournamnetSchema)

module.exports = { TournamentModel }






