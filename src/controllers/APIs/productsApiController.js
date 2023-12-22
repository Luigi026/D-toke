const paginate = require("express-paginate");
const createError = require("http-errors");
const { getProductById, storeProduct, updateProduct, deleteProduct } = require("../../services/products.services");
const db = require('../../database/models')

module.exports = {
  index: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include: [
          {
            association: 'category',
            attributes: ['id', 'brand', 'image']
          }
        ],
      });

      return res.status(200).json({
        ok: true,
        data: products,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upss, hubo un error",
      });
    }
  },
  show: async (req, res) => {
    try {
      const products = await getProductById(req.params.id);

      return res.status(200).json({
        ok: true,
        data: products,
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        data: error.status || 500,
        error: error.message || "hubo un error",
      });
    }
  },
  store: async (req, res) => {
    try {
      // const {model, description, image, price, category_id}
      const { model, description, price } =
        req.body;

      // validación ++++++++++++++++++++++++++++++++++++++++++++++++++
      if ([model, description, price].includes("" || undefined)) {
        throw createError(400, "Todos los campos son obligatorios");
      }
      //  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

      const product = await storeProduct(req.body);
      return res.status(200).json({
        ok: true,
        message: "Producto",
        data: product,
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        data: error.status || 500,
        error: error.message || "Upss, hubo un error. Que porqueria D:",
      });
    }
  },
  update: async (req, res) => {
    try {
      const productUpdated = await updateProduct(req.params.id, req.body);

      return res.status(200).json({
        ok: true,
        message: "Producto agregado con éxito",
        data: productUpdated,
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        data: error.status || 500,
        error: error.message || "Upss, hubo un error. Que porqueria D:",
      });
    }
  },
  delete: async (req, res) => {
    try {
        await deleteProduct(req.params.id)

        return res.status(200).json({
            ok: true,
            message: "Pelicula eliminada con ÉXITO",
        })
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json({
            ok: false,
            status: error.status || 500,
            error: error.message || 'Upss, hubo un error...'
        })
    }
},

  totalProductInDB: async (req, res) => {
    try {
      const total = await db.Product.count();

      return res.status(200).json({
        ok: true,
        data: total,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upss, hubo un error",
      });
    }
  },

  getCategories: async (req, res) => {
    try {
      const categories = await db.Category.findAll({
        attributes: ["brand", "id"],
      });

      return res.status(200).json({
        ok: true,
        data: categories,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upss, hubo un error",
      });
    }
  }

};
