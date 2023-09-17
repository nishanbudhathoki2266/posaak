const Order = require("../models/orderModel");
const AppError = require("../utils/appError");
const catchAsync = require("./../utils/catchAsync");

exports.createOrder = catchAsync(async (req, res, next) => {
  const newOrder = await Order.create({ ...req.body, user: req.user.id });
  res.status(201).json({
    status: "success",
    order: newOrder,
  });
});

exports.getAllOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find();

  res.status(200).json({
    status: "success",
    results: orders.length,
    data: {
      orders,
    },
  });
});

exports.getOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new AppError("No order found with that ID!", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});

exports.getMyOrder = catchAsync(async (req, res, next) => {
  const orders = await Order.find({ user: req.user.id });

  if (!orders) {
    return next(new AppError("No order found for the given user ID!", 404));
  }

  res.status(200).json({
    status: "success",
    results: orders.length,
    data: {
      orders,
    },
  });
});

exports.updateOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!order) {
    return next(new AppError("No order found with that ID!", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});

exports.deletOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (!order) {
    return next(new AppError("No order found with that ID!", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.topSellingProduct = catchAsync(async (req, res, next) => {
  const products = await Order.aggregate([
    {
      $unwind: "$products",
    },
    {
      $group: {
        _id: "$products.product",
        numProductSales: { $sum: "$products.quantity" },
      },
    },
    {
      $sort: { numProductSales: -1 },
    },
    {
      $limit: 3,
    },
    {
      $lookup: {
        from: "products", // The name of the "products" collection
        localField: "_id", // Field in the "orders" collection
        foreignField: "_id", // Field in the "products" collection
        as: "productDetails", // Alias for the joined data
      },
    },
  ]);

  res.status(200).json({
    data: {
      products,
    },
  });
});

exports.revenue = catchAsync(async (req, res, next) => {
  const totalRevenue = await Order.aggregate([
    {
      $group: {
        _id: null,
        revenue: { $sum: "$totalPrice" },
      },
    },
  ]);

  res.status(200).json({
    data: {
      totalRevenue,
    },
  });
});
