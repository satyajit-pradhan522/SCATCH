const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    minlength: 3,
    required: true,
  },
  password: String,
  email: String,
  products: { type: Array, default: [] },
  gstin: String,
  picture: String,
});

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
