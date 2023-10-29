const db = require("../database/models");
const moment = require("moment");
const {Op} = require('sequelize')


const { readJSON } = require('../data');
const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
  index: (req, res) => {
    const productsNike = db.Product.findAll({
      where: {
        category_id: 1,
      },
    });

    const productsAdidas = db.Product.findAll({
      where: {
        category_id: 2,
      },
    });
    
    const productsPuma = db.Product.findAll({
      where: {
        category_id: 3,
      },
    });
    
    const productsReebok = db.Product.findAll({
      where: {
        category_id: 4,
      },
    });

    Promise.all([productsNike, productsAdidas, productsPuma, productsReebok])
      .then(([productsNike, productsAdidas, productsPuma, productsReebok]) => {
        return res.render('index', {
          productsNike,
          productsAdidas,
          productsPuma,
          productsReebok,
          toThousand,
        })
      })

      .catch((error) => console.log(error));

  },
  admin: (req, res) => {
  
    const productsList = db.Products.findAll({
      order: ['model'],
  })

  Promise.all([productsList])
  .then(([productsList,genres,top]) => {
    res.render("admin", {
    productsList,
    genres,
    moment,
    top 
    });
  })
  .catch((error) => console.log(error));
  
  
  
  
  
    // const products = readJSON('products.json');
    // return res.render('admin', {
    //   products,
    // })
  },
  search: (req, res) => {

    db.Product.findAll({
      where : {
          [Op.or] : [
              {
                  name : {
                    [Op.substring] : req.query.keywords
                  }
              },
              {
                  description : {
                    [Op.substring] : req.query.keywords
                  }
            },
          ]
      }
  })
  
  .then(results => {
  return res.render("results", {
    results,
    toThousand,
    keywords: req.query.keywords
    })
  })

 
}
}