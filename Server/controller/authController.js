const EmailValidateCheck = require("../helpers/validateEmail");
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

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

const loginController = async (req, res) => {
  let { email, password } = req.body;

  try {
    let existringUser = await userModel.findOne({ email });
    if (!existringUser) {
      return res.status(401).send({ error: "Invalid email or password" });
    }

    bcrypt.compare(
      password,
      existringUser.password,
      async function (err, result) {
        if (result) {
          var token = jwt.sign({ existringUser }, "shhhhh");
          res.send({ token });

          return res.status(200).send({
            success: "Login Successful",
            data: existringUser,
          });
        } else {
          return res.status(404).send({ error: "False email or password" });
        }
      }
    );
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send({ error: "Server error" });
  }
};

module.exports = { registrationController, loginController };
