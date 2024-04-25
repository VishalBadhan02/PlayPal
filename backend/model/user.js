const { default: mongoose } = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    phoneNumber: Number,
    email: String,
    type: {
        type: String,
        default: "email"
    },
    address: String,
    password: String,
    oneTimePassword: Number
},
    { timestamps: true })

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;