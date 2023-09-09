const express = require("express");
const orderController = require("./../controllers/orderController");
const authController = require("./../controllers/authController");
const router = express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(authController.restrictTo("admin"), orderController.getAllOrders)
  .post(authController.restrictTo("user"), orderController.createOrder);

router.route("/user/:userId").get(orderController.getOrderByUserId);

router.use(authController.restrictTo("admin"));

router
  .route("/:id")
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deletOrder);

module.exports = router;
