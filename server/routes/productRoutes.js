const express = require("express");
const productController = require("./../controllers/productController");
const authController = require("./../controllers/authController");
const router = express.Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    productController.deleteProduct
  );
module.exports = router;
