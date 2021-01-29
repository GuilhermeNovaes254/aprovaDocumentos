const userService = require('../services/user.service');

exports.welcome = (req, res) => {

    res.render('index');

};

exports.login = (req, res) => {

    const {
        email,
        password
    } = req.body;
    console.log(password);
    console.log(email);
    res.send('OK');

};

exports.main = (req, res) => {

    res.render('main');

};

exports.anexar = (req, res) => {

    res.render('anexar')
};

exports.aprovar = (req, res) => {

    res.render('aprovar')
};

exports.gerir = (req, res) => {

    res.render('gerir')
};

exports.updateuser = (req, res) => {

    res.render('update')
};

exports.relatorios = (req, res) => {

    res.render('relatorios')
};