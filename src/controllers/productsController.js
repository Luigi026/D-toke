const db = require("../database/models");
const moment = require("moment");

const { readJSON, writeJSON } = require("../data");
const { existsSync, unlinkSync } = require('fs');
const deleteImage = require("../../utils/deleteImage");

let products = readJSON("./products.json");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
  cart: (req, res) => {
    return res.render("productCart");
  },
  detail: (req, res) => {

    const product = products.find(product => product.id === +req.params.id)

    return res.render('productDetail', {
      product,
      toThousand

    })
  },
  addProduct: (req, res) => {
    return res.render("addProduct");
  },
  editProduct: (req, res) => {
    const id = req.params.id

    const product = db.Product.findByPk(id, {
      include : {
        all : true
    }
    })

    const categories = db.Category.findAll()
    
    Promise.all([product, categories])
        .then(([product, categories]) => {
            return res.render('editProduct',{
                categories,
                ...product?.dataValues
            })
        })
        .catch(error => console.log(error))

    // const product = products.find((product) => product.id === +req.params.id)
    // return res.render("editProduct", {
    //   ...product
    // });
  },
  update: (req, res) => {
    /* console.log(req.body)
  console.log(req.file) */
    const id = req.params.id;
    const { name, price, gender, description } = req.body;
/*     const productsModify = products.map(product => {//map:me crea un nuevo array 
      if (product.id === +req.params.id) {
        product.model = name.trim();
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
    res.redirect('/admin') */
    ///////////////////////////////////////////////

  db.Product.findByPk(id)
  .then(() => {
    
    db.Product.update(
    {
      model: name.trim(),
      price,
      gender,
      description: description.trim()
    },
    {
      where: {
        id: id
      }
    })
    .catch((error) => console.log(error))
    .finally(() => {
      return res.redirect("/admin")
    })
  })

  },
  store: (req, res) => {
    const { name, price, gender, description, size } = req.body;

    let category = null;

    if (gender == "Adidas") {
      category = 2;
    }
    if (gender == "Puma") {
      category = 3;
    }
    if (gender == "Nike") {
      category = 1;
    }
    if (gender == "Reebok") {
      category = 4;
    }

    const newProduct = {
      model: name,
      description: description,
      image: req.file.filename,
      price: price,
      category_id: category,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    db.Product.create(newProduct)
      .then((product) => {
        console.log("Product created", product);
        return res.redirect("/admin");
      })
      .catch((error) => {
        console.error("Error creating product", error);
        return res.status(500).send("Error al crear el producto");
      });
  },
  remove: (req, res) => {

    const productId = req.params.id;

    db.Product.findByPk(productId)
      .then((product) => {
        deleteImage(product.image)
      })

    db.Product.destroy({
      where: { id: productId }
    })
      .then(() => {
        console.log('Producto eliminado exitosamente');
        res.redirect('/admin');
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
        res.status(500).send('Error al eliminar el producto');
      });
  }
};
