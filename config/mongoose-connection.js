const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("development:mongoose");

const mongoURI = config.get("MONGO_URI");

mongoose
  .connect(mongoURI + "/scatch")
  .then(() => {
    debug("Connected to MongoDB");
  })
  .catch((err) => {
    debug("Error connecting to MongoDB", err);
  });

module.exports = mongoose.connection;
