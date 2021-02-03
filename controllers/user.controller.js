const status = require('http-status-codes');
const userService = require('../services/user.service');

exports.getAll = async (req, res) => {

    const users = await userService.getAll();
    res.send(users);

};

exports.create = async (req, res) => {
    console.log(req.body);
    const newUsers = await userService.createUser(req.body);
    res.send()
};

