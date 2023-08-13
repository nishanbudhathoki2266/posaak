const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name!"],
      unique: [true, "Product already exist!"],
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
          return this.price > val;
        },
        message: "Discount must be lesser than the price!",
      },
    },
    isFeatured: { type: Boolean, default: false },
    images: [String],
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    colors: [
      {
        name: String,
        hexCode: String,
      },
    ],
    sizes: [String],
  },
  { timestamps: true }
);

productSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

productSchema.pre(/^find/, function (next) {
  this.populate({ path: "category", select: "name description" });
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
