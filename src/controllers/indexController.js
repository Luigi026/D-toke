const {readJSON} = require('../data')
module.exports = {
    index: (req, res) => {
        return res.render('index');
      },
    admin: (req,res) => {
      const products = readJSON('products.json');
        return res.render('admin', {
            products,
        })
    }
}