const express = require("express");
const {
  registrationController,
  loginController,
} = require("../../controller/authController");
const { authMiddleWare } = require("../../middleWare/authMiddleWare");
const router = express.Router();

router.post("/registration", registrationController);
router.post("/login", loginController);

router.get("/user", authMiddleWare, (req, res) => {
  res.send("All users");
});
module.exports = router;
