const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

/* GET users listing. */

router.get('/cart', productsController.cart);
router.get('/detail', productsController.detail);

router.get('/addProduct', productsController.addProduct)

module.exports = router;