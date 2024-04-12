const UserModel = require("../model/user")

const ExistEmail = async (email) => {

    const checkemail = await UserModel.findOne({ email })
    return (checkemail) ? true : false;

}



module.exports =  ExistEmail 