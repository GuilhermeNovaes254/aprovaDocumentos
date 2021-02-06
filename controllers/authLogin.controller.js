const bcrypt = require("bcrypt");
const userController = require("../controllers/user.controller");

const authLogin =  async (req, res) => {

    const {password, email} = req.body;
    
    const user = await userController.findByEmail(email)

    // validar senha passada via post contra a guardada
    if (!bcrypt.compareSync(password, user.password)) {
        res.redirect("/");
    }

    // setar uma session com o usuario
    req.session.usuario = user;
    res.redirect("/main")    

};

module.exports = authLogin;