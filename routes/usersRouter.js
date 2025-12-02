const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model");

router.get("/", (req, res) => {
  res.send("Users Home Page");
});

router.post("/register", async (req, res) => {
  try {
    let { email, fullname, password } = req.body;
    let user = await userModel.create({ email, fullname, password });
    res.send(user);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
