const express = require('express');
const { admin } = require('../controllers/indexController');
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const editProductValidator = require('../validations/productsEditValidator');
const addProductValidator = require('../validations/addProductValidator');
const adminCheck = require('../middlewares/adminCheck');

const router = express.Router();

/* /admin */
router.get('/', admin);

router.get('/addProduct',adminCheck, productsController.addProduct);
router.post('/addProduct', upload.single('image'),addProductValidator,productsController.store)

router.get('/editProduct/:id',adminCheck, productsController.editProduct);
router.put('/editProduct/:id', upload.single('image'),editProductValidator,productsController.update);

router.delete('/delete/:id',productsController.remove)  

module.exports = router;
