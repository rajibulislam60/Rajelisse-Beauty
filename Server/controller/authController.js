const userModel = require("../model/userModel");

const registrationController = async (req, res) => {
  let { name, email, phone, address, usertype, profile, password } = req.body;
  try {
    let user = new userModel({
      name,
      email,
      phone,
      address,
      usertype,
      profile,
      password,
    });
    res.send(user);
    await user.save();
  } catch (error) {
    console.log(error);
  }
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
