const express = require("express");
const cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(cors());

app.use(express.json());
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
