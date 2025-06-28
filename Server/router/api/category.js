const express = require("express");
const multer = require("multer");
const { createCategory } = require("../../controller/categoryController");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/createCategory", upload.single("profile"), createCategory);

module.exports = router;
