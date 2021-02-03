const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    file: {
        type: String,
        required: true,
        unique: false
    },
    status: {
        type: Boolean,
        required: true,
        unique: false,
        default: false
    },
    aprovador: {
        type: mongoose.Types.ObjectId, 
        ref: 'User',
        required: false
    },
    criador: {
        type: mongoose.Types.ObjectId, 
        ref: 'User',
        required: false
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