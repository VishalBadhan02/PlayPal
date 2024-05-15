const UserModel = require('../model/user');
const reply = require('../helper/reply');
const lang = require('../language/en');
const { generateToken } = require('../services/JWT');
const Lang = require('../language/en');
const { ExistUser, generateOTP, verifyOTP } = require('../helper/index')
const SendMail = require('../services/mail')
const Bcrypt = require("bcrypt")
const saltRounds = 16;



const login = async (req, res) => {
    const { password, email } = req.body;


    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return (
                res.status(200).json(reply.failure(lang.LOGIN_NOTFOUND))
            )
        }
        const isMatch = await Bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json(reply.failure(lang.PASSWORD_NOTFOUND))
        }

        const module = await generateOTP(user._id, "otp for login");

        await SendMail(user.email, "opt", "Otp for login " + module);

        const token = generateToken(user);
        return (
            res.status(200).json(reply.success(Lang.LOGIN_SUCCESS, { token }))

        )
    }
    catch (err) {
        return res.json(reply.failure(err.message,));
    }
}


const Register = async (req, res) => {
    const { firstName, lastName, userName, type, typeValue, address, password } = req.body;

    const encypted_password = await Bcrypt.hash(password, saltRounds);

    try {
        if (await ExistUser(type, typeValue)) {
            return res.status(200).json(reply.failure(lang.REGISTER_EMAIL_ALREADY))
        }

    } catch (err) { return res.status(402).json(reply.failure(err.message,)); }


    if (type === "mobile") {
        const user = new UserModel({
            firstName, lastName, userName, type, phone: typeValue, address, password: encypted_password
        })
        user.save();
        const token = generateToken(user);


        return (
            res.status(200).json(reply.success(Lang.LOGIN_SUCCESS + typeValue, { token }))
        )
    }

    const user = new UserModel({
        firstName, lastName, userName, type, email: typeValue, address, password: encypted_password
    })
    user.save();

    const module = await generateOTP(user._id, "registered by " + type);


    await SendMail(user.email, "opt", "your otp is " + module);

    const token = generateToken(user);

    return (
        res.status(200).json(reply.success(Lang.LOGIN_SUCCESS + typeValue, { token }))
    )

}

const handleOTpverification = async (req, res) => {
    const { otp } = req.body;

    const isverified = await verifyOTP(req.user.decoded._id, otp);

    if (!isverified) {
        return res.send(false)
    }
    return res.json({
        status: true,
        data: {
            token: req.user.token
        }
    })

}

module.exports = { login, Register, handleOTpverification }