const http = require("http");
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

const UserModel = require("./model/user")
const Config = require("./config/index");
const ExistUser = require("./helper");
const { generateJWT } = require("./services/JWT");

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
    const { firstName, lastName, userName, type, typeValue, address, password, oneTimePassword } = req.body;

    if (await ExistUser(type, typeValue)) {
        return res.json({
            msg: type + " already exists"
        })
    }

    if (type === "mobile") {
        const user = new UserModel({
            firstName, lastName, userName, type, phone: typeValue, address, password, oneTimePassword
        })
        user.save();

        const token = generateJWT(user);
        return res.json({
            status: true,
            msg: "registered by " + type
            , token
        })
    }
    else {
        const user = new UserModel({
            firstName, lastName, userName, type, email: typeValue, address, password, oneTimePassword
        })
        user.save();
        const token = generateJWT(user);
        return res.json({
            status: true,
            msg: "registered by " + type
            , token
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

app.post("/otpverify", async (req, res) => {
    const { oneTimePassword } = req.body
    const user = await UserModel.findOne({ oneTimePasswordl })

    if (user.oneTimePassword !== oneTimePassword) {
        return (
            res.json({ msg: "incorrect otp please try again" })

        )
    }

    res.send("Otp verified")

})


app.post("/", (req, res) => {
    res.send("Server working")
})


const server = http.createServer({}, app)
server.listen(Config.PORT, Config.HOST, () => {
    console.log("server is working " + Config.PORT)
});
