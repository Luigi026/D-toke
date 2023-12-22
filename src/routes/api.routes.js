const { checkEmail } = require("../controllers/APIs/usersApiController");
const { getCart, addItemToCart, removeItemToCart, deleteItemToCart, clearCart } = require('../controllers/APIs/cartApiController');
const router = require("express").Router();
const {index, show,store,update,delete : destroy} = require('../controllers/APIs/productsApiController');

/* API */

router
    .get("/check-email", checkEmail)
    
    .get('/cart', getCart)
    .post('/cart', addItemToCart)
    .delete('/cart',removeItemToCart)
    .delete('/cart/item', deleteItemToCart)
    .delete('/cart/all',clearCart)
    
    .get('/products',index)
    .get('/products/:id',show)
    .post('/products',store)
    .put('/products/:id',update)
    .delete('/products/:id',destroy)

module.exports = router;