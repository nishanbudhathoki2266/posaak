const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD.replace("@", "%40")
);

mongoose
  .connect(DB)
  .then((con) => {
    console.log("DB Connection Successful!");
  })
  .catch((err) => console.log("Error connecting to the database"));

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log("App running on port ", port);
});
