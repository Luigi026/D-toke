const paginate = require("express-paginate");
const createError = require("http-errors");
const {getAllProducts, getProductById, storeProduct, updateProduct, deleteProduct} = require("../../services/products.services");

module.exports = {
  index: async (req, res) => {
    try {
      const { count, products } = await getAllProducts(req.query.limit, req.skip);
      const pagesCount = Math.ceil(count / req.query.limit);
      const currentPage = req.query.page;
      const pages = paginate.getArrayPages(req)(
        pagesCount,
        pagesCount,
        req.query.page
      );

      return res.status(200).json({
        ok: true,
        meta: {
          pagesCount,
          currentPage,
          pages,
        },
        data: products.map((product) => {
          return {
            ...product.dataValues,
            url: `${req.protocol}://${req.get("host")}/api/products/${
              product.id
            }`,
          };
        }),
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
      await deleteProduct(req.params.id);
    } catch (error) {}
  },
};
