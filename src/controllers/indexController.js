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
    const categories = db.Category.findAll({
      include : [
        {
          association : 'products',
          include : ['category'],
        }
      ]
    });

   
    const productsList = db.Product.findAll({
      include : ['category'],
    });

    Promise.all([productsList, categories])
      .then(([productsList, categories]) => {
        return res.render('index', {
          categories,
          productsList,
          toThousand,
        })
      })

      .catch((error) => console.log(error));

  },
  admin: (req, res) => {
  
    const productsList = db.Product.findAll({
      include : ['category'],
      order: ['model'],
  })
  const categories = db.Category.findAll();

  Promise.all([productsList, categories])
  .then(([productsList, categories]) => {
    res.render("admin", {
    productsList,
    categories,
    });
  })
  .catch((error) => console.log(error));
  
  },
  search: (req, res) => {

    const products = db.Product.findAll({
      include : ['category'],
      where : {
          [Op.or] : [
              {
                  model : {
                    [Op.substring] : req.query.keywords
                  }
              },
              {
                  description : {
                    [Op.substring] : req.query.keywords
                  }
              },
              {
                  description : {
                    [Op.substring] : req.query.keywords
                  }
              }
              
              
          ]
      }
  })
  const category = db.Category.findAll({

     where : {
         [Op.or] : [
             {
                 brand : {
                   [Op.substring] : req.query.keywords
                 }
             }
             
         ]
     }
 })
 Promise.all([products, category])
  .then(([products, category]) => {
  return res.render("results", {
    products,
    category,
    toThousand,
    keywords: req.query.keywords
    })
  })

 
}
}