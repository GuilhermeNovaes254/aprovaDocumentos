const status = require("http-status-codes");
const userService = require("../services/user.service");

exports.getAll = async (req, res) => {

    const users = await userService.getAll();
    return users;

};

exports.create = async (req, res) => {
    console.log(req.body);
    const newUsers = await userService.createUser(req.body);
    return create;
};

exports.findOne = async (id) => {

    let user = await userService.getOne(id);
    return user;
}
