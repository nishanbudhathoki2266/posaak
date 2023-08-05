const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

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

productSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
