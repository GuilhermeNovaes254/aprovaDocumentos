const VerificaUsuarioLogado = (req,res,next) => {

    if(!req.session.usuario){
        res.redirect('/login/error');
    }

    next();
}

module.exports = VerificaUsuarioLogado;