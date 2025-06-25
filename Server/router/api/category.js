const express = require("express");
const router = express.Router();

router.post("/createCategory", (req, res) => {
  res.send("Category api is working");
});

module.exports = router;
