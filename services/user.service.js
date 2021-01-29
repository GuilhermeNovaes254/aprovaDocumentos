const mongoose = require("mongoose");
const { User } = require("../models/user.model");

exports.createUser = async (data) => {
   try {
      const newUser = new User(data);
      await newUser.save();
      return newUser;
   } catch (error) {
      throw new Error(error);
   }
};

exports.getOne = async (email) => {
    try {
       const user = await User.findOne({ email: email });
       return user;
    } catch (error) {
       throw new Error(error);
    }
};

exports.updateUser = async (email, update) => {
   try{

      const options = { new: true };
      const user = await User.findOne({ email: email });
      const newUser = await User.findByIdAndUpdate(user._id, update, options);
      console.log(newUser)

   }catch(error) {
      throw new Error(error);
   }
};