const express = require('express');
const { register, registerNewUser, login, loginProcess, profile, update, logout } = require('../controllers/usersController');
const router = express.Router();
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidation');
const profileValidator = require('../validations/profileValidator');

const userCheck = require('../middlewares/userCheck');
const notUserCheck = require('../middlewares/notUserCheck');

/* GET users listing. */
router
    .get('/login',notUserCheck,login)
    .post('/login', loginValidator ,loginProcess)
    .get('/register',notUserCheck,register)
    .post('/register',registerValidator,registerNewUser)
    .get('/profile',userCheck, profile)
    .put('/update',profileValidator, update)
    .get('/logout',logout)

module.exports = router;

