const express = require("express");
const productRouter = require("./routes/productRoutes");

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/products", productRouter);

module.exports = app;
