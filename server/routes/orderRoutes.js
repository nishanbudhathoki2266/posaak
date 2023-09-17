const express = require("express");
const orderController = require("./../controllers/orderController");
const authController = require("./../controllers/authController");
const router = express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(authController.restrictTo("admin"), orderController.getAllOrders)
  .post(authController.restrictTo("user"), orderController.createOrder);

router.use(authController.restrictTo("admin"));
router.route("/my-orders").get(orderController.getMyOrder);

router.get("/top-selling", orderController.topSellingProduct);
router.get("/revenue", orderController.revenue);

router
  .route("/:id")
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deletOrder);

module.exports = router;
