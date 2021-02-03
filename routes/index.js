var express = require('express');
var router = express.Router();

const path = require('path');
const multer  = require('multer');
const multerConfig = require('../config/multer');

const authController = require('../controllers/authLogin.controller');
const generalController = require('../controllers/general.controller');
const usersController = require('../controllers/user.controller');
const fileController = require('../controllers/file.controller');

const verifLogged = require('../middlewares/verifLogado');


router.get('/', generalController.welcome);
router.post('/login', authController.loginSession);
router.get('/main', verifLogged, generalController.main);
router.get('/main/anexar', verifLogged, generalController.anexar);
router.get('/main/aprovar', verifLogged, generalController.aprovar);
router.get('/main/gerir', verifLogged, generalController.gerir);
router.get('/main/updateuser', verifLogged, generalController.updateuser);
router.get('/main/relatorios', verifLogged, generalController.relatorios);

router.post('/users/create', usersController.create);
router.get('/users', usersController.getAll);

router.post("/anexar/arquivo", multer(multerConfig).single('arquivo'), fileController.createFileRegistry);

module.exports = router;
