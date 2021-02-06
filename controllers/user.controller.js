const status = require("http-status-codes");
const userService = require("../services/user.service");

exports.getAll = async (req, res) => {

    const users = await userService.getAll();
    return users;

};

exports.create = async (req, res) => {
    console.log(req.body);
    const newUser = await userService.createUser(req.body);
    res.redirect("/?usercreated=1");
}

exports.findByEmail = async (email) => {
    let user = await userService.getOne(email);
    console.log(user)
    return user;
}
