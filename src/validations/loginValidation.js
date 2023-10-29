const {check} = require('express-validator');
const { readJSON } = require("../data");
const { compareSync } = require("bcryptjs");

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('El correo electronico es obligatorio')
    .isEmail()
    .custom((value, {req}) => {
        const users = readJSON('users.json');
        const user = users.find(user => user.email === req.body.email);

        if(!user){
            return false
        }
            return true 
    }).withMessage('Este correo no se encuentra registrado'),
    check('password')
    .notEmpty()
    .withMessage('La contraseña es obligatoria')
    .custom((value, {req}) => {
        const users = readJSON('users.json');
        const user = users.find(user => user.email === req.body.email);

        if(!user || !compareSync(value,user.password)){
            return false
        }
            return true 
    }).withMessage('Credencial inválida')
]