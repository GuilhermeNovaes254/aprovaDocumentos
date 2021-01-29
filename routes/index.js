var express = require('express');
var router = express.Router();

const authController = require('../controllers/authLogin');
const generalController = require('../controllers/general');

const verifLogged = require('../middlewares/verifLogado');


router.get('/', generalController.welcome);
router.post('/login', authController.loginSession);
router.get('/main', verifLogged, generalController.main);
router.get('/main/anexar', verifLogged, generalController.anexar);
router.get('/main/aprovar', verifLogged, generalController.aprovar);
router.get('/main/gerir', verifLogged, generalController.gerir);
router.get('/main/updateuser', verifLogged, generalController.updateuser);
router.get('/main/relatorios', verifLogged, generalController.relatorios);


module.exports = router;
