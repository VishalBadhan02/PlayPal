const sidebar = async (req, res) => {
    try {
        const data = require("../sidebar.json")
        return res.json(data)
    } catch (error) {
        return res.json({ msg: "Link not available" }, error)
    }
}

module.exports = { sidebar }