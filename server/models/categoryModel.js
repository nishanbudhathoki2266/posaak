const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A category must have its name!"],
    },
    description: {
      type: String,
      required: [true, "A category must have its description!"],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

categorySchema.virtual("products", {
  ref: "Product",
  localField: "products",
  foreignField: "_id",
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
