const express = require("express");
const productRouter = require("./routes/productRoutes");

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/products", productRouter);

app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = "fail";
  err.statusCode = 404;

  // Calling next with error skips all the middlewares and goes to error handling middleware
  next(err);
});

// A centralized error handler
app.use((err, req, res, next) => {
  // Internal server error 500 code
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
