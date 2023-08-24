const { readJSON, writeJSON } = require("../data");

let products = readJSON("./products.json");

module.exports = {
  cart: (req, res) => {
    return res.render("productCart");
  },
  detail: (req, res) => {
    return res.render("productDetail");
  },
  addProduct: (req, res) => {
    return res.render("addProduct");
  },
  editProduct: (req, res) => {
    return res.render("editProduct");
  },
  store: (req, res) => {
    const { name, price, gender, description, size } = req.body;

    let newProduct = {
      id: products[products.length - 1].id + 1,
      name: name.trim(),
      description: description.trim(),
      image: req.file ? req.file.filename : null,
      category: gender,
      colors: null,
      price: +price,
      tallas: size,
    };

    products.push(newProduct);

    writeJSON(products, "./products.json");
    return res.redirect("/");
  },
};
