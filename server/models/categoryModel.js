const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A category must have its name!"],
  },
  description: {
    type: String,
    required: [true, "A category must have its description!"],
  },
  image: String,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
