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

exports.filterOpenProtocolFiles = async () => {
    try {
       const files = await File.find({ status: 0 }).populate("criador", ["_id", "nome", "sobrenome"]);
       return files;
    } catch (error) {
       throw new Error(error);
    }
};

exports.updateFile = async (id, update) => {
   try{
      const options = { new: true };
      const newFile = await File.findByIdAndUpdate(id, update, options);
      // console.log(newFile)

   }catch(error) {
      throw new Error(error);
   }
};


