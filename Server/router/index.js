const express = require("express");
const router = express.Router();
const api = require("./api");

const baseurl = process.env.BASE_URL;

router.use(baseurl, api);

router.use(baseurl, (req, res) => {
  return res.status(404).send({
    msg: "Api is not found",
  });
});

module.exports = router;
