const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
  let { token } = req.cookies;

  if (token) {
    jwt.verify(token, process.env.JWT_Secret, function (err, decoded) {
      if (err) {
        return res.status(400).send({
          success: false,
          msg: err.message,
        });
      } else {
        let { usertype } = decoded.userInfo;
        if (usertype === "admin") {
          next();
        } else {
          return res.status(401).send({
            success: false,
            msg: "Access denied.",
          });
        }
      }
    });
  } else {
    return res.status(404).send({
      success: false,
      msg: "Token is invalid.",
    });
  }
};

module.exports = { authMiddleWare };
