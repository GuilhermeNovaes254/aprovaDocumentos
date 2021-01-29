const bcrypt = require('bcrypt');
const userService = require('../services/user.service');

const authLogin = {

    loginSession: async (req, res) => {

        const {password, email} = req.body;
        
        const user = await userService.getOne(email)


        // validar senha passada via post contra a guardada
        if (!bcrypt.compareSync(password, user.password)) {
            res.redirect('/');
        }

        // setar uma session com o usuario
        req.session.usuario = user;
        res.redirect('/main')
    }

};

module.exports = authLogin;