const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: false
    },
    sobrenome: {
        type: String,
        required: true,
        unique: false
    },
    cargo: {
        type: Number, // 0 usuario, 1 aprovador, 2 adm
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.index({}, {
    unique: true
});

const User = mongoose.model("User", userSchema);

exports.User = User;
exports.userSchema = userSchema;