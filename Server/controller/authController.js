const EmailValidateCheck = require("../helpers/validateEmail");
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");

const registrationController = async (req, res) => {
  let { name, email, phone, usertype, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).send({
      error: "Field is required.",
    });
  }

  if (!EmailValidateCheck(email)) {
    return res.send({
      error: "Invalid Email",
    });
  }
  let existringuser = await userModel.findOne({ email });
  if (existringuser) {
    return res.status(409).send({
      error: "Email already in use.",
    });
  }
  bcrypt.hash(password, 10, async function (err, hash) {
    if (err || !hash) {
      return res.status(500).send({ error: "Password encryption failed" });
    }

    try {
      let user = new userModel({
        name,
        email,
        phone,
        usertype,
        password: hash,
      });
      await user.save();
      res.send(user);
    } catch (error) {
      console.log(error);
    }
  });
};

const loginController = (req, res) => {
  let { email, password } = req.body;
  try {
    let user = new userModel({
      email,
      password,
    });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registrationController, loginController };
