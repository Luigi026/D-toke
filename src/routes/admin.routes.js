const { admin } = require('../controllers/indexController');
const {addProduct,store,update,editProduct,remove} = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const editProductValidator = require('../validations/productsEditValidator');
const addProductValidator = require('../validations/addProductValidator');
const adminCheck = require('../middlewares/adminCheck');

const router = require("express").Router();

/* /admin */
router.get('/', admin);

router.get('/addProduct',adminCheck, addProduct);
router.post('/addProduct', upload.single('image'),addProductValidator,store)

router.get('/editProduct/:id',adminCheck, editProduct);
router.put('/editProduct/:id', upload.single('image'),editProductValidator,update);

router.delete('/delete/:id', remove)  

module.exports = router;
