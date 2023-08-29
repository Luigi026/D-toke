const { readJSON, writeJSON } = require("../data");
const {existsSync, unlinkSync} = require('fs')

let products = readJSON("./products.json");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
  cart: (req, res) => {
    return res.render("productCart");
  },
  detail: (req, res) => {

		const product = products.find(product => product.id === +req.params.id)
		
		return res.render('productDetail',{
			product,
			toThousand
			
		})
  },
  addProduct: (req, res) => {
    return res.render("addProduct");
  },
  editProduct: (req, res) => {
    const product = products.find((product) => product.id === +req.params.id)
    return res.render("editProduct", {
      ...product
    });
  },
  update: (req,res) => {
    /* console.log(req.body)
  console.log(req.file) */

    const {name, price, gender, description} = req.body;
		const productsModify = products.map(product => {//map:me crea un nuevo array 
			if(product.id === +req.params.id){
				product.name = name.trim();
				product.price = +price;
				product.gender = gender;
				product.description = description.trim();
        req.file &&
        existsSync(`./public/images/products/${product.image}`) && 
        unlinkSync(`./public/images/products/${product.image}`);
        product.image = req.file ? req.file.filename : product.image;
      }
			return product
		})
		writeJSON(productsModify, "./products.json")//que y donde lo guardo
		res.redirect('/admin')

  },
  store: (req, res) => {
    const { name, price, gender, description, size } = req.body;

    let newProduct = {
      id: products[products.length - 1].id + 1,
      name: name,
      description: description.trim(),
      image: req.file ? req.file.filename : null,
      category: gender,
      colors: null,
      price: +price,
      tallas: size,
    };

    products.push(newProduct);

    writeJSON(products, "./products.json");
    return res.redirect("/admin");
  },
  remove: (req,res) => {

    const productsModify = products.filter((product) => {
      if (product.id === +req.params.id) {
          existsSync(`./public/images/products/${product.image}`) &&
          unlinkSync(`./public/images/products/${product.image}`);
      }

      return product.id !== +req.params.id;
    });

    writeJSON(productsModify, "products.json");

    return res.redirect("/admin");
  }
};
