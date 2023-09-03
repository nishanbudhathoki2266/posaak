const express = require("express");
const orderController = require("./../controllers/orderController");
const authController = require("./../controllers/authController");
const router = express.Router();

router
  .route("/")
  .get(orderController.getAllOrders)
  .post(
    authController.protect,
    authController.restrictTo("user"),
    orderController.createOrder
  );

router
  .route("/:id")
  .get(orderController.getOrder)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    orderController.updateOrder
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    orderController.deletOrder
  );

module.exports = router;
