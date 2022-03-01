/**
 Path:api/login
 */

const { Router }=require('express');
const { check } = require('express-validator');

const { crearUsuario, login, nuevoToken } = require('../Controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router= Router();

router.post('/new',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty().isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos,
], crearUsuario);

router.post('/',[
    check('email', 'El email es obligatorio').not().isEmpty().isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos,
], login);

//validarJWT
router.get('/renew',validarJWT, nuevoToken);



module.exports= router;


