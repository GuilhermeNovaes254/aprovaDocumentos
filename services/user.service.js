const mongoose = require("mongoose");
const {User} = require("../models/user.model");
const bcrypt = require("bcrypt");
require("dotenv").config();


exports.createUser = async (data) => {
    try {

        let salt = parseInt(process.env.SALT_ROUNDS, 10)
        data.password =  bcrypt.hashSync(data.password, salt)
        const newUser = new User(data);
        await newUser.save();
        return newUser;
        
    } catch (error) {
        throw new Error(error);
    }
};

exports.getAll = async () => {
    try {
        const user = await User.find().select("-password -_id");
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

exports.getOne = async (email) => {
    try {
        const user = await User.findOne({email: email});
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