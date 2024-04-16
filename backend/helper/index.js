const UserModel = require("../model/user")

const ExistUser = async (type, typeValue) => {
    if (await type === "mobile") {
        const check = await UserModel.findOne({ phone: typeValue })
        return (check) ? true : false;
    }
    const check = await UserModel.findOne({ email: typeValue })
    return (check) ? true : false;


}



module.exports = ExistUser