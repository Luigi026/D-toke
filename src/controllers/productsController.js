module.exports = {
    cart: (req, res) => {
        return res.render('productCart');
    },
    detail: (req, res) => {
        return res.render('productDetail');
    },
    addProduct: (req, res) => {
        return res.render('addProduct')
    },
    editProduct: (req, res) => {
        return res.render('editProduct')
    },
}