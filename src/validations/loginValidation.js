const {check} = require('express-validator');

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('El correo electronico es obligatorio')
    .isEmail(),
    check('password')
    .notEmpty()
    .withMessage('La contraseña es obligatoria')
]