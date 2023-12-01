const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();


/* GET users listing. */

router.get('/productsList', productsController.list);
router.get('/cart', productsController.cart);
router.get('/detail/:id', productsController.detail);


module.exports = router;