module.exports = {
    cart: (req, res) => {
        return res.render('productCart');
    },
    detail: (req, res) => {
        return res.render('productDetail');
    }
}