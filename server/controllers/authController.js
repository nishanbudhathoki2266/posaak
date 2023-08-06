const jwt = require("jsonwebtoken");
const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newUser._id);
  res.status(201).json({
    status: "succcess",
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //  1 -> Check is email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  //   2 -> Check is user exists and password is correct
  const user = await User.findOne({ email }).select("+password");

  const correct = await user?.correctPassword(password, user.password);

  if (!user || !correct) {
    // 401 is unauthorized
    return next(new AppError("Incorrect email or password!", 401));
  }

  //   3 -> If everthing ok, send token to client
  const token = signToken(user._id);
  res.status(200).json({
    status: "succcess",
    token,
  });
});
