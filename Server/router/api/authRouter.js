const express = require("express");
const {
  registrationController,
  loginController,
} = require("../../controller/authController");
const router = express.Router();

router.use("/registration", registrationController);
router.use("/login", loginController);
module.exports = router;
