const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const adminCheck = require('../middlewares/adminCheck');

/* / */
router.get('/', indexController.index);
router.get('/search', indexController.search); 
router.get('/admin', adminCheck, indexController.admin);

module.exports = router;
