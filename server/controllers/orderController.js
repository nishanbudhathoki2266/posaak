const Order = require("../models/orderModel");
const AppError = require("../utils/appError");
const APIFeatures = require("./../utils/apiFeatures");
const catchAsync = require("./../utils/catchAsync");

exports.createOrder = catchAsync(async (req, res, next) => {
  const newOrder = await Order.create(req.body);
  res.status(201).json({
    status: "success",
    order: newOrder,
  });
});

exports.getAllOrders = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Order.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const orders = await features.query;

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

exports.getOrderByUserId = catchAsync(async (req, res, next) => {
  const orders = await Order.find({ user: req.params.userId });

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
