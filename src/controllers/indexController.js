const { readJSON } = require('../data');
const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
  index: (req, res) => {
    return res.render('index', {
			productsNike : products.filter(product => product.category === "Nike"),
			productsAdidas : products.filter(product => product.category === "Adidas"),
      productsReebok : products.filter(product => product.category === "Reebok"),
			productsPuma : products.filter(product => product.category === "Puma"),
			toThousand
    });
  },
  admin: (req, res) => {
    const products = readJSON('products.json');
    return res.render('admin', {
      products,
    })
  },
  search: (req, res) => {

    const results = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()) || product.category.toLowerCase().includes(req.query.keywords.toLowerCase()))


    return res.render('results', {
      results,
      toThousand,
      keywords: req.query.keywords
    })
  }
}