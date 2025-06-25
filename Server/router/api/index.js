const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");
const category = require("./category");

router.use("/auth", authRouter);
router.use("/category", category);

module.exports = router;
