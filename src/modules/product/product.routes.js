const { Router } = require("express");
const routerProduct = Router();
const {
  addProduct,
  deleteProduct,
  getProductById,
  getAllProduct,
  patchProduct,
  updateProduct,
} = require("./product.controller");

routerProduct
  .post("/", catchedAsync(addProduct))
  .put("/:id", catchedAsync(updateProduct))
  .patch("/:id", catchedAsync(patchProduct))
  .delete("/:id", catchedAsync(deleteProduct));

routerProduct
  .get("/", catchedAsync(getAllProduct))
  .get("/:id", catchedAsync(getProductById));

module.exports = { routerProduct };
