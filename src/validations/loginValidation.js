const { check, body } = require("express-validator");
const db = require('../database/models')
const { compareSync } = require("bcryptjs");

module.exports = [
    check('email')
        .notEmpty()
        .withMessage('El correo electronico es obligatorio')
        .isEmail()
        .withMessage('Formato invalido')
        .custom((value, {req}) => {
            return db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                if (!user) {
                    return Promise.reject()
                }
            })
            .catch(() => Promise.reject('Correo eletronico no registrado'))
        }),
    body('password')
        .notEmpty()
        .withMessage('La contraseña es obligatoria')
        .custom((value, {req}) => {
    
            return db.User.findOne({
            
                where : {
                    email : req.body.email
                }
            
            }).then(user => {
                if(!user || !compareSync(value, user.password)){
                    return Promise.reject()
                }
            }).catch(() => Promise.reject('Credenciales inválidas'))
        })
]