const { check } = require("express-validator");

module.exports = [
  check("model")
    .notEmpty()
    .withMessage("Es obligatorio")
    .bail()
    .isLength({
      min: 2,
      max: 50,
    })
    .withMessage("Debe tener entre 1 y 20 caracteres"),
  check("price")
    .notEmpty()
    .withMessage("Es obligatorio")
    .isInt({
      gt: 1,
    })
    .withMessage("Debe ser positivo"),
  check("description").isLength({
    min: 2,
    max: 500,
  }).withMessage('Debe tener entre 2 y 500 caracteres'),
];
