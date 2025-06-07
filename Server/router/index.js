const express = require("express");
const router = express.Router();
const baseurl = process.env.BASE_URL;
const auth = require("./authRouter");

router.use(auth);

module.exports = router;
