const mongoose = require("mongoose");
const {User} = require("../models/user.model");
const bcrypt = require("bcrypt");
require("dotenv").config();


const genHash = async (info) => {
    bcrypt.hash(info, process.env.SALT_ROUNDS, function (err, hash) {
        return hash;
    });
}

exports.createUser = async (data) => {
    try {
        data.password = await genHash(data.password);
        const newUser = new User(data);
        await newUser.save();
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
};

exports.getAll = async (email) => {
    try {
        const user = await User.find().select("-password -_id");
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

exports.getOne = async (email) => {
    try {
        const user = await User.findOne({
            email
        });
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

exports.updateUser = async (email, update) => {
    try {
        const options = {
            new: true
        };
        if (update.email != undefined) {
            update.password = await genHash(update.password)
        }
        const user = await User.findOne({
            email: email
        });
        const newUser = await User.findByIdAndUpdate(user._id, update, options);
        console.log(newUser)

    } catch (error) {
        throw new Error(error);
    }
};