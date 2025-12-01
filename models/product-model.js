const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  discount: { type: Number, default: 0 },
  bgColor: { type: String, default: "#ffffff" },
  panelColor: { type: String, default: "#f0f0f0" },
  textColor: { type: String, default: "#000000" },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
