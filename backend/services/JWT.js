const jwt = require("jsonwebtoken");
const Config = require("../config");

const generateJWT = (user) => {
    const token = jwt.sign(user.toObject(), Config.JWTSECRETKEY);
    return token;
}



const verifyJWT = (req, res, next) => {
    const token = req?.headers?.authorization;
    if (!token) {
        res.json({ status: false, msg: "JWT Token Not Found!" });

    }

    const decoded = jwt.verify(token, Config.JWTSECRETKEY);
    if (!decoded) {
        res.json({ status: false, msg: "Token Wrong or Expired" });

    }

    req.user = decoded;
    next();

}

module.exports = {
    generateJWT, verifyJWT
}