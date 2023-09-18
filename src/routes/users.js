const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();
const loginValidator = require('../validations/loginValidation')

/* GET users listing. */
router.get('/login', usersController.login);
router.post('/login', loginValidator , usersController.loginProcess);
router.get('/register', usersController.register);
router.post('/register', usersController.registerNewUser);

module.exports = router;

