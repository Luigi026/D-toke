const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();
const upload = require('../middlewares/upload')

/* GET users listing. */

router.get('/cart', productsController.cart);
router.get('/detail/:id', productsController.detail);

router.get('/addProduct', productsController.addProduct);
router.post('/addProduct', upload.single('image'),productsController.store)

router.get('/editProduct', productsController.editProduct);

router.delete('/delete/:id',productsController.remove)  

module.exports = router;