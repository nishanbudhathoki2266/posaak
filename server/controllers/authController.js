const { promisify } = require("util");
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

exports.protect = catchAsync(async (req, res, next) => {
  // Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token)
    return next(
      new AppError("You are not logged in! Please log in to get access!", 401)
    );

  //   Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //   Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist!",
        401
      )
    );
  }

  //   Check if user changed password after the JWT token was issued

  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        "The user has changed the password recently! Please login again!",
        401
      )
    );
  }

  //   Grant access to protected route
  req.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles is an array
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action!", 403)
      );
    }

    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // Get user based on posted email
  const user = await User.findOne({ email: req.body.email });

  if (!user) return next(new AppError("No user found with that email!", 404));
  // Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  // Send it to user's email
});
exports.resetPassword = catchAsync(async (req, res, next) => {});
