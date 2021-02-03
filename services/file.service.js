const mongoose = require("mongoose");
const { File } = require("../models/file.model");


exports.createFile = async (data) => {
   try {
      const newFile = new File(data);
      await newFile.save();
      return newFile;
   } catch (error) {
      throw new Error(error);
   }
};

exports.getAllFiles = async (email) => {
   try {
      const files = await File.find();
      return files;
   } catch (error) {
      throw new Error(error);
   }
};

// exports.getOneFile = async (email) => {
//     try {
//        const file = await File.findOne({ email: email });
//        return file;
//     } catch (error) {
//        throw new Error(error);
//     }
// };

exports.updateFile = async (email, update) => {
   try{
      const options = { new: true };
      const file = await File.findOne({ email: email });
      const newFile = await File.findByIdAndUpdate(file._id, update, options);
      console.log(newFile)

   }catch(error) {
      throw new Error(error);
   }
};


exports.createProtocol = async (file, aprovador) => {

};

