const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    minlength: 3,
    required: true,
  },
  password: String,
  email: String,
  cart: { type: Array, default: [] },
  orders: { type: Array, default: [] },
  isAdmin: Boolean,
  contact: Number,
  picture: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
