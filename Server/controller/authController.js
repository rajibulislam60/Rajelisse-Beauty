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
  let existringUser = await userModel.findOne({ email });
  if (existringUser) {
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
  const { email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(401).send({ error: "Invalid email or password" });
    }

    bcrypt.compare(password, existingUser.password, async (err, result) => {
      if (result) {
        const userInfo = {
          id: existingUser.id,
          email: existingUser.email,
          usertype: existingUser.usertype,
          phone: existingUser.phone,
          name: existingUser.name,
        };

        let expiresIn;
        let successMessage;

        if (existingUser.usertype === "client") {
          expiresIn = "7d";
          successMessage = "Login Successful";
        } else if (existingUser.usertype === "admin") {
          expiresIn = "6h";
          successMessage = "Admin Login Successful";
        } else if (
          existingUser.usertype === "driver" ||
          existingUser.usertype === "employee"
        ) {
          expiresIn = "12h";
          successMessage = "Employee Login Successful";
        } else {
          return res.status(403).send({ error: "Unauthorized usertype" });
        }

        const token = jwt.sign({ userInfo }, process.env.JWT_Secret, {
          expiresIn,
        });

        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
        });

        return res.status(200).send({
          success: successMessage,
          data: existingUser,
          token,
        });
      } else {
        return res.status(401).send({ error: "Incorrect email or password" });
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send({ error: "Server error" });
  }
};

module.exports = { registrationController, loginController };
