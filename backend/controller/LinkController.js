const { TournamentModel } = require("../model/tournament")

const sidebar = async (req, res) => {
    try {
        const data = require("../sidebar.json")
        return res.json(data)
    } catch (error) {
        return res.json({ msg: "Link not available" }, error)
    }
}

const setIncriment = async (req, res) => {
    try {
        let key = 1;
        const new_ke = ""
        const data = await TournamentModel.find().sort({ tournament_key: -1 });
        if (data.length > 0) {
            const lastkey = data[0].tournament_key.split('-')[1];
            key = parseInt(lastkey, 10) + 1;
        }
        const new_key = `TRM-0${key}`
        return res.json(new_key)
    } catch (error) {
        return res.json(error);
    }
};

module.exports = { sidebar, setIncriment }