const express = require('express');
const { register, registerNewUser, login, loginProcess, profile, update, logout } = require('../controllers/usersController');
const router = express.Router();
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidation');
const profileValidator = require('../validations/profileValidator');

const userCheck = require('../middlewares/userCheck');
const notUserCheck = require('../middlewares/notUserCheck');

/* GET users listing. */
router.get('/login',notUserCheck,login);
router.post('/login', loginValidator ,loginProcess);
router.get('/register',notUserCheck,register);
router.post('/register',registerValidator,registerNewUser);
router.get('/profile',userCheck, profile);
router.put('/update',profileValidator, update);
router.get('/logout',logout);

module.exports = router;

