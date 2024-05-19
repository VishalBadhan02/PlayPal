const { mongoose } = require("mongoose")

const TeamSchema = mongoose.Schema({

}, { timestamps: true })

const TeamModel = mongoose.model("team", TeamSchema)

module.exports = TeamModel 