const express = require('express');
const { admin } = require('../controllers/indexController');

const router = express.Router();

/* /admin */
router.get('/', admin);

module.exports = router;
