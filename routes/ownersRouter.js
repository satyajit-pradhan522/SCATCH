const express = require("express");
const router = express.Router();
const Owner = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owner = await Owner.find();
    if (owner.length > 0) {
      return res.status(400).send("Owner already exists");
    }
    let { fullname, email, password } = req.body;
    let createdOwner = await Owner.create({ fullname, email, password });
    res.status(201).send(createdOwner);
  });
}

router.get("/", (req, res) => {
  res.send("Owners Home Page");
});

module.exports = router;
