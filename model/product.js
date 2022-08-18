const mongoose = require("mongoose");
const { Schema } = mongoose;
const { model } = mongoose;

const productSchema = Schema({
  name: String,
  price: Number,
  from: String,
});

const Product = model("Product", productSchema);

module.exports = Product;
