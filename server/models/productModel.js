const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name!"],
    },
    description: {
      type: String,
      required: [true, "A product must have at least a little description!"],
    },
    price: {
      type: Number,
      required: [true, "A product must have a price"],
    },
    images: [String],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
