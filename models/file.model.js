const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    file: {
        type: String,
        required: true,
        unique: false
    },
    status: { //0 : false , 1: true , 2: deny,
        type: Number,
        required: true,
        unique: false,
        default: 0
    },
    aprovador: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: false
    },
    criador: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: false
    },
    local:{
        type: String,
        required: true
    },
    protocolo_entrada:{
        type: String
    },
    data_protocolo_entrada: {
        type: Date
    },
    protocolo_aprov: {
        type: String
    },
    data_procolo_aprov: {
        type: Date
    }
});

fileSchema.index({}, {
    unique: true
});

const File = mongoose.model("File", fileSchema);

exports.File = File;
exports.fileSchema = fileSchema;