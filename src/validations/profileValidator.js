const { check, body } = require("express-validator");
const { readJSON } = require("../data");
module.exports = [

  check("name")
    .isLength({
      min: 2,
    })
    .withMessage("El nombre es obligatorio")
    .isAlpha("es-ES")
    .withMessage("Solo letras"), 
];
