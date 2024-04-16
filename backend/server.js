const http = require("http");
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

const UserModel = require("./model/user")
const Config = require("./config/index");
const ExistUser = require("./helper");

mongoose.connect(Config.DATABASE.URL);
const db = mongoose.connection;

db.on("open", () => {
    console.log("db connected")
})

const app = express();


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", async (req, res) => {
    const { firstName, lastName, userName, type, typeValue, address, password } = req.body;

    if (await ExistUser(type, typeValue)) {
        return res.json({
            msg: type + " already exists"
        })
    }


    if (type === "mobile") {
        const user = new UserModel({
            firstName, lastName, userName, type, phone: typeValue, address, password
        })
        user.save()
        return res.json({
            msg: "registered by " + type
        })
    }
    else {
        const user = new UserModel({
            firstName, lastName, userName, type, email: typeValue, address, password
        })
        user.save()
        return res.json({
            msg: "registered by " + type
        })
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email })




    if (!user) {
        return (
            res.json({ msg: "email not found" })
        )

    }
    if (user.password !== password) {
        return (
            res.json({ msg: "incorrect password" })
        )
    }

    res.send("Login Successful")

})

app.post("/", (req, res) => {
    res.send("Server working")
})


const server = http.createServer({}, app)
server.listen(5050, Config.HOST, () => {
    console.log("server is working " + Config.PORT)
});
