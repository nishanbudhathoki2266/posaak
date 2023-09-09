const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
  products: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Product",
      },
      quantity: { type: Number, required: true },
      image: { type: String, required: true },
      color: { type: String, required: true },
      size: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  shippingAddress: {
    tole: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false,
  },
  paymentType: {
    type: String,
    default: "COD",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
