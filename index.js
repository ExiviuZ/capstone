const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const port = 3235;
const Product = require("./model/product");
const morgan = require("morgan");
const ejsMate = require("ejs-mate");

mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then((res) => {
    console.log("~~Success connecting to database~~");
  })
  .catch((err) => {
    console.log("Connection Error");
  });

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

app.get("/", async (req, res) => {
  res.render("home");
});
