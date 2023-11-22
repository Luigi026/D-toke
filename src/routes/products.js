const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();
const upload = require('../middlewares/upload');
const editProductValidator = require('../validations/productsEditValidator');

/* GET users listing. */

router.get('/productsList', productsController.list);
router.get('/cart', productsController.cart);
router.get('/detail/:id', productsController.detail);

router.get('/addProduct', productsController.addProduct);
router.post('/addProduct', upload.single('image'),productsController.store)

router.get('/editProduct/:id', productsController.editProduct);
router.put('/editProduct/:id', editProductValidator, upload.single('image'), productsController.update);

router.delete('/delete/:id',productsController.remove)  

module.exports = router;