const fileController = require("./file.controller");
const userController = require("./user.controller");

exports.welcome = async (req, res) => {

    res.render("index");

};

exports.login = async (req, res) => {

    const {
        email,
        password
    } = req.body;
    // console.log(password);
    // console.log(email);
    res.send("OK");

};

exports.criar = async (req, res) => {

    res.render("criar")
};

exports.main = async (req, res) => {

    res.render("main");

};

exports.anexar = async (req, res) => {

    res.render("anexar")
};

exports.aprovar = async (req, res) => {

    const aprove = await fileController.openProtocol();
    // console.log(aprove)
    res.render("aprovar", {datas:aprove});
};

exports.gerir = async (req, res) => {

    const users = await userController.getAll();
    res.render("gerir", {users:users});
};

exports.updateuser = async (req, res) => {

    // const id = req.query.id;
    // const user = await userController.findOne(id)
    res.render("update")
};

exports.relatorios = async (req, res) => {

    res.render("relatorios")
};

exports.sair = async (req, res) => {

    req.session.destroy();
    res.render('index');
};