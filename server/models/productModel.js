const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name!"],
      unique: true,
      trim: true,
      maxlength: [40, "A product must have less or equal to 40 characters"],
      minLength: [10, "A product must have at least 10 characters"],
    },
    slug: String,
    description: {
      type: String,
      required: [true, "A product must have at least a little description!"],
    },
    price: {
      type: Number,
      required: [true, "A product must have a price"],
    },
    priceDiscount: {
      type: Number,
      default: 0,
      validate: {
        validator: function (val) {
          return val < this.price;
        },
        message: "Discount price should be lower than regular price",
      },
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
