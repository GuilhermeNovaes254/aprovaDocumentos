var express = require("express");
var router = express.Router();

const path = require("path");
const multer  = require("multer");
const multerConfig = require("../config/multer");

const crypto = require("crypto");

const authController = require("../controllers/authLogin.controller");
const generalController = require("../controllers/general.controller");
const usersController = require("../controllers/user.controller");
const fileController = require("../controllers/file.controller");

const verifLogged = require("../middlewares/verifLogado");

const { check,body } = require('express-validator');


var storage = multer.diskStorage({
    destination: function (res, file, cb) {
        cb(null, path.join('uploads'))
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(4, (err, hash) => {
            if(err) cb(err);
            const fileName = `${hash.toString("hex")}-${file.originalname}`;
            cb(null, fileName);
        })
    }
})

var upload = multer({
    storage: storage
})

router.get("/", generalController.welcome);
router.post("/login", authController);

router.get("/criar", generalController.criar);
router.post('/criar', [
    check("nome").isLength({
        min: 2,
        max: 100
    })
    .withMessage("Nome deve conter no mínimo 2 e no máximo 100 caracteres!"),
    check("sobrenome").isLength({
        min: 2,
        max: 100
    })
    .withMessage("Sobrenome deve conter no mínimo 2 e no máximo 100 caracteres!"),
    check("password").isLength({
        min: 6
    })
    .withMessage("Senha deve conter no mínimo 6 caracteres!"),
    check("email").isEmail()
    .withMessage("E-mail inválido!"),
    body("email").custom(value => {
        
        return userController.findByEmail({
            email: value
        }).then(usuario => {
            if (usuario) {
                return Promise.reject("E-mail informado já está cadastrado!")
            }
        });
             
    })
], usersController.create);

router.get("/main", verifLogged, generalController.main);
router.get("/main/anexar", verifLogged, generalController.anexar);
router.get("/main/aprovar", verifLogged, generalController.aprovar);
router.get("/main/gerir", verifLogged, generalController.gerir);
router.get("/main/updateuser", verifLogged, generalController.updateuser);
router.get("/main/relatorios", verifLogged, generalController.relatorios);
router.get("/main/out",  verifLogged, generalController.sair);

router.post("/users/create", usersController.create);
router.post("/users/update", verifLogged, usersController.update);
router.get("/users", usersController.getAll);

router.post("/anexar/arquivo",  upload.any(), fileController.createFileRegistry);
router.get("/anexar/arquivo/listar", fileController.openProtocol)

router.get("/aprovar/aprovar", fileController.aprove);
router.get("/aprovar/negar", fileController.deny);



module.exports = router;
