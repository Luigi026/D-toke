const db = require("../database/models");
const moment = require("moment");

const { readJSON, writeJSON } = require("../data");
const { existsSync, unlinkSync } = require('fs');
const deleteImage = require("../../utils/deleteImage");

let products = readJSON("./products.json");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {

  list: (req, res) => {

    const productsList = db.Product.findAll({
      include: ['category'],
      order: ['model'],
    })
    const categories = db.Category.findAll();

    Promise.all([productsList, categories])
      .then(([productsList, categories]) => {
        res.render("productsList", {
          productsList,
          categories,
          toThousand
        });
      })

  },
  cart: (req, res) => {
    return res.render("productCart");
  },
  detail: (req, res) => {

    db.Product.findByPk(req.params.id, {
      include: ['category']
    })
      .then(product => {
        return res.render('productDetail', {
          ...product?.dataValues
        })
      })
      .catch(error => console.log(error))

  },
  addProduct: (req, res) => {
    return res.render("addProduct");
  },
  editProduct: (req, res) => {
    const id = req.params.id

    const product = db.Product.findByPk(id, {
      include: {
        all: true
      }
    })

    const categories = db.Category.findAll()

    Promise.all([product, categories])
      .then(([product, categories]) => {
        return res.render('editProduct', {
          categories,
          ...product?.dataValues
        })
      })
      .catch(error => console.log(error))

  },
  update: (req, res) => {
    const id = req.params.id;
    const { model, price, gender, description } = req.body;
  
    db.Product.findByPk(id)
      .then((product) => {
        const previousImage = product.image; 
        const newImage = req.file ? req.file.filename : previousImage;
  
        return db.Product.update(
          {
            model: model,
            price,
            gender,
            image: newImage,
            description: description.trim(),
          },
          {
            where: {
              id: id,
            },
          }
        )
        .then(() => {
          if (previousImage !== newImage && previousImage !== '') {
            deleteImage(previousImage);
          }
          return res.redirect("/admin");
        })
        .catch((error) => {
          console.log(error);
          return res.status(500).send("Error en la actualización");
        });
      });
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
