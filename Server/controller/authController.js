const registrationController = (req, res) => {
  res.send("this registration is working.");
};

const loginController = (req, res) => {
  res.send("this login is working.");
};

module.exports = { registrationController, loginController };
