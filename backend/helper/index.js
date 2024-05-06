const UserModel = require("../model/user")
const OTPModel = require("../model/otps")
const moment = require("moment")
const reply = require('./reply');
const lang = require('../language/en');

const ExistUser = async (type, typeValue) => {
    if (await type === "mobile") {
        const check = await UserModel.findOne({ phone: typeValue })
        return (check) ? true : false;
    }
    const check = await UserModel.findOne({ email: typeValue })
    return (check) ? true : false;


}

const generateOTP = async (userId, comment) => {
    const oneTimePassword = Math.floor(Math.random(0) * (10000 - 999 + 1) + 999);
    oneTimePassword == oneTimePassword.toString();

    const OTPModule = new OTPModel();
    OTPModule.userId = userId;
    OTPModule.otp = oneTimePassword;
    OTPModule.comment = comment;
    OTPModule.expiredate = moment(new Date()).add(10, 'minutes').toDate();
    OTPModule.save()
    return OTPModule;
}

const verifyOTP = async (userId, otp) => {

    const OTPModule = await OTPModel.findOne({ userId, otp });

    if (!OTPModule) {
        return "otp wrong or expired"
    }
    
    return true;

}

const handleUpdate = (user_id, value) => {
    const dd = new UserModel.updateOne(user_id, value);
}

module.exports = { ExistUser, generateOTP, verifyOTP }