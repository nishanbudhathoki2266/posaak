const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(helmet());
app.use(cors());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, Please try again in an hour!",
});

app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));

app.use(mongoSanitize());

app.use(xss());

app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  //   const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  //   err.status = "fail";
  //   err.statusCode = 404;

  // Calling next with error skips all the middlewares and goes to error handling middleware
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// A centralized error handler
app.use(globalErrorHandler);

module.exports = app;
