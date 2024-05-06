const UserModel = require('../model/user');
const reply = require('../helper/reply');
const lang = require('../language/en');
const { generateToken } = require('../services/JWT');
const Lang = require('../language/en');
const { ExistUser, generateOTP, verifyOTP } = require('../helper/index')
const SendMail = require('../services/mail')



const login = async (req, res) => {
    const { email } = req.body;


    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return (
                res.status(200).json(reply.failure(lang.LOGIN_NOTFOUND))
            )
        }

        // const token = generateJWT(user);
        return (
            res.status(200).json(reply.success(Lang.LOGIN_SUCCESS))

        )
    }
    catch (err) {
        return res.status(402).json(reply.failure(err.message));
    }
}


const Register = async (req, res) => {
    const { firstName, lastName, userName, type, typeValue, address, password } = req.body;


    if (await ExistUser(type, typeValue)) {
        return res.status(200).json(reply.failure(lang.REGISTER_EMAIL_ALREADY))
    }

    if (type === "mobile") {
        const user = new UserModel({
            firstName, lastName, userName, type, phone: typeValue, address, password
        })
        user.save();
        const token = generateToken(user);


        return (
            res.status(200).json(reply.success(Lang.LOGIN_SUCCESS + typeValue, { token }))
        )
    }

    const user = new UserModel({
        firstName, lastName, userName, type, email: typeValue, address, password
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
    const { otp } = req.body.otp;
    const isverified = await verifyOTP(req.user._id, otp);

    if (!isverified) {
        return res.send(false)
    }
    return res.send(true);

}

module.exports = { login, Register, handleOTpverification }