const multer = require("multer");
const sharp = require("sharp");
const AppError = require("../utils/appError");
const Product = require("./../models/productModel");
const APIFeatures = require("./../utils/apiFeatures");
const catchAsync = require("./../utils/catchAsync");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image!", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadProductImages = upload.array("images", 3);

exports.resizeProductImages = catchAsync(async (req, res, next) => {
  if (!req.files) return next();

  req.body.images = [];
  await Promise.all(
    req.files.map(async (file, i) => {
      const filename = `product-${req.user.id}-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(800, 800)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/img/products/${filename}`);

      req.body.images.push(filename);
    })
  );

  next();
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    product: newProduct,
  });
});

exports.getAllProducts = catchAsync(async (req, res, next) => {
  // Searching
  const searchQuery = req.query.search || "";
  const searchConditions = [
    {
      name: { $regex: new RegExp(searchQuery, "i") },
    },
    {
      description: { $regex: new RegExp(searchQuery, "i") },
    },
  ];

  const features = new APIFeatures(
    Product.find({ $or: searchConditions }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const products = await features.query;

  // Essential for pagination
  const totalProducts = await Product.countDocuments({ $or: searchConditions });

  res.status(200).json({
    status: "success",
    results: totalProducts,
    total: Math.ceil(totalProducts / 5), // keeping limit 4 for a page for now.
    data: {
      products,
    },
  });
});

exports.getFeaturedProducts = catchAsync(async (req, res, next) => {
  const featuredProducts = await Product.find({ isFeatured: true });

  res.status(200).json({
    status: "success",
    results: featuredProducts.length,
    data: {
      featuredProducts,
    },
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new AppError("No product found with that ID!", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(new AppError("No product found with that ID!", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new AppError("No product found with that ID!", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.totalProductsPerCategory = catchAsync(async (req, res, next) => {
  const productsPerCategory = await Product.aggregate([
    {
      $group: {
        _id: "$category",
        numProducts: { $sum: 1 },
      },
    },
    {
      $lookup: {
        from: "categories", // The name of the "categories" collection
        localField: "_id", // Field in the "categories" collection
        foreignField: "_id", // Field in the "products" collection
        as: "categoryDetails", // Alias for the joined data
      },
    },
  ]);

  res.status(200).json({
    data: {
      productsPerCategory,
    },
  });
});
